"""Build a 5×7-inch neutral review card and verify its QR payload.
Run: uv run --with pillow --with qrcode --with 'fonttools[woff]' --with zxing-cpp python scripts/build-review-kit.py
"""
from pathlib import Path
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
import qrcode
import zxingcpp
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'output/review-kit';OUT.mkdir(parents=True,exist_ok=True)
URL='https://hikarisojo.com/review/'
def font(filename,size):
    f=TTFont(ROOT/'assets/fonts'/filename);f.flavor=None;b=BytesIO();f.save(b);b.seek(0)
    return ImageFont.truetype(b,size)
serif=font('playfair-display-latin.woff2',104)
body=font('inter-latin.woff2',42);small=font('inter-latin.woff2',34)
card=Image.new('RGB',(1500,2100),'#fffefa');draw=ImageDraw.Draw(card);ink='#183b37'
logo=Image.open(ROOT/'assets/images/logo.webp').convert('RGBA');logo.thumbnail((220,220));card.paste(logo,((1500-logo.width)//2,115),logo)
def centered(text,y,f,fill=ink):
    draw.text((750,y),text,font=f,fill=fill,anchor='mt')
centered('How was your visit?',405,serif)
centered('Your honest feedback helps.',585,body)
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M,box_size=18,border=4);qr.add_data(URL);qr.make(fit=True);qrimg=qr.make_image(fill_color='black',back_color='white').convert('RGB')
card.paste(qrimg,((1500-qrimg.width)//2,740));centered('Scan to review Hikari on Google',1450,body)
centered('All honest feedback is welcome.',1540,small,fill='#596762')
centered('hikarisojo.com/review',1765,body)
centered('Hikari Sushi · South Jordan',1895,small)
card.save(OUT/'hikari-google-review-card-5x7.png',dpi=(300,300))
qrimg.save(OUT/'hikari-review-qr.png',dpi=(300,300))
for image in [card,qrimg]:
    result=zxingcpp.read_barcode(image)
    assert result and result.text==URL,'Review QR did not decode to the exact public Hikari URL'
assert card.size==(1500,2100)
print('Created 5x7-inch / 300-DPI card and QR; both decode to '+URL)
