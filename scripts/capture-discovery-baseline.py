"""Use Hikari's existing Google integrations; save private aggregates outside Git.
The host's GA integration interpreter supplies dependencies and existing auth.
No polling, account setup, customer messaging or financial attribution is performed.
"""
import sys,json,re,os,argparse
from datetime import date
from pathlib import Path
from datetime import datetime,timezone
import requests
from google.auth.transport.requests import Request
sys.path.insert(0,str(Path.home()/'projects/hikari-tools/mcp/gbp'))
from dotenv import load_dotenv
from google.oauth2.credentials import Credentials
load_dotenv(Path.home()/"projects/.env")
load_dotenv(Path.home()/"projects/hikari-tools/mcp/gbp/.env")
sys.path.insert(0,str(Path.home()/'projects/hikari-tools/mcp/ga'))
import ga_client
from google.analytics.data_v1beta.types import RunReportRequest,DateRange,Dimension,Metric,BatchRunReportsRequest
from google.oauth2 import service_account
parser=argparse.ArgumentParser(description='Capture a bounded private Hikari discovery baseline; no writes to Google or Square.')
parser.add_argument('--start',required=True);parser.add_argument('--end',required=True)
parser.add_argument('--output',required=True,type=Path);parser.add_argument('--refresh',action='store_true')
parser.add_argument('--search-console',action='store_true',help='Try existing service-account access; does not grant access or change account settings.')
args=parser.parse_args()
first,last=date.fromisoformat(args.start),date.fromisoformat(args.end)
if not 0 <= (last-first).days <= 30: parser.error('Use one inclusive window of at most 31 days')
if args.output.exists() and not args.refresh: parser.error('Output already exists; reuse it or pass --refresh for a deliberate new capture')
args.output.parent.mkdir(parents=True,exist_ok=True)
root=args.output.parent
out={'captured_at':datetime.now(timezone.utc).isoformat(),'period':{'start':args.start,'end':args.end}}
def err(e): return {'status':'unavailable','error_type':type(e).__name__,'http_status':getattr(getattr(e,'resp',None),'status',None)}
def save():
 args.output.write_text(json.dumps(out,indent=2));args.output.chmod(0o600)
try:
 cred=Credentials(token=None,refresh_token=os.getenv('GBP_REFRESH_TOKEN'),token_uri='https://oauth2.googleapis.com/token',client_id=os.getenv('GBP_CLIENT_ID'),client_secret=os.getenv('GBP_CLIENT_SECRET'),scopes=['https://www.googleapis.com/auth/business.manage']);cred.refresh(Request());headers={'Authorization':'Bearer '+cred.token}
 location='locations/'+os.getenv('GBP_LOCATION_ID')
 r=requests.get('https://mybusinessbusinessinformation.googleapis.com/v1/'+location,params={'readMask':'name,title,storefrontAddress,phoneNumbers,websiteUri,regularHours,categories,metadata'},headers=headers,timeout=25);r.raise_for_status();info=r.json()
 assert info.get('title') in ['Hikari Sushi','Hikari Sushi LLC'] and '10468' in str(info.get('storefrontAddress')),'wrong location'
 out['business_profile']={'status':'verified','location':info}
 params=[('dailyMetrics',x) for x in ['BUSINESS_IMPRESSIONS_DESKTOP_MAPS','BUSINESS_IMPRESSIONS_DESKTOP_SEARCH','BUSINESS_IMPRESSIONS_MOBILE_MAPS','BUSINESS_IMPRESSIONS_MOBILE_SEARCH','BUSINESS_DIRECTION_REQUESTS','CALL_CLICKS','WEBSITE_CLICKS']]+[(x,str(y)) for x,y in {'dailyRange.startDate.year':first.year,'dailyRange.startDate.month':first.month,'dailyRange.startDate.day':first.day,'dailyRange.endDate.year':last.year,'dailyRange.endDate.month':last.month,'dailyRange.endDate.day':last.day}.items()]
 r=requests.get('https://businessprofileperformance.googleapis.com/v1/'+location+':fetchMultiDailyMetricsTimeSeries',params=params,headers=headers,timeout=25);r.raise_for_status();out['business_profile']['daily']=r.json()
 r=requests.get('https://businessprofileperformance.googleapis.com/v1/'+location+'/searchkeywords/impressions/monthly',params={'monthlyRange.startMonth.year':first.year,'monthlyRange.startMonth.month':first.month,'monthlyRange.endMonth.year':first.year,'monthlyRange.endMonth.month':first.month,'pageSize':100},headers=headers,timeout=25);r.raise_for_status();out['business_profile']['keywords_first_month']=r.json()
except Exception as e:out['business_profile_error']=err(e)
save()
try:
 c=ga_client.GAClient(); assert ga_client.PROPERTY_ID=='492307000','wrong GA property'
 ranges=[DateRange(start_date=args.start,end_date=args.end)]
 reports=[RunReportRequest(date_ranges=ranges,dimensions=[Dimension(name=x) for x in ['hostName','eventName']],metrics=[Metric(name=x) for x in ['eventCount','totalUsers']],limit=200),RunReportRequest(date_ranges=ranges,dimensions=[Dimension(name=x) for x in ['hostName','pagePath']],metrics=[Metric(name=x) for x in ['screenPageViews','totalUsers']],limit=60),RunReportRequest(date_ranges=ranges,dimensions=[Dimension(name=x) for x in ['hostName','sessionDefaultChannelGroup']],metrics=[Metric(name=x) for x in ['sessions','totalUsers']],limit=100)]
 batch=c._get_client().batch_run_reports(BatchRunReportsRequest(property='properties/492307000',requests=reports),timeout=45)
 data=[]
 for r in batch.reports:
  dims=[h.name for h in r.dimension_headers];mets=[h.name for h in r.metric_headers]
  data.append({'dimensions':dims,'metrics':mets,'rows':[dict(zip(dims+mets,[v.value for v in row.dimension_values]+[v.value for v in row.metric_values])) for row in r.rows],'row_count':r.row_count,'metadata':str(r.metadata)})
 out['ga4']={'status':'verified','property_id':ga_client.PROPERTY_ID,'reports':data}
except Exception as e:out['ga4']=err(e)
save()
if args.search_console:
 try:
  cred=service_account.Credentials.from_service_account_file(ga_client.SERVICE_ACCOUNT_KEY_PATH,scopes=['https://www.googleapis.com/auth/webmasters.readonly']);cred.refresh(Request())
  r=requests.get('https://www.googleapis.com/webmasters/v3/sites',headers={'Authorization':'Bearer '+cred.token},timeout=30)
  if r.ok:
   sites=r.json().get('siteEntry',[]);sites=[x for x in sites if 'hikarisojo.com' in x.get('siteUrl','')];out['search_console']={'status':'verified' if sites else 'no_hikari_property_access','properties':sites}
  else:out['search_console']={'status':'unavailable','http_status':r.status_code,'reason':r.json().get('error',{}).get('status')}
 except Exception as e:out['search_console']=err(e)
else: out['search_console']={'status':'not_requested'}
save(); print(json.dumps({k:({'status':v.get('status'),'error_type':v.get('error_type'),'http_status':v.get('http_status')} if isinstance(v,dict) else v) for k,v in out.items()}))
