# /// script
# requires-python = ">=3.10"
# dependencies = ["reportlab>=4.0", "pypdf>=5.0"]
# ///
"""Render the dated research report. Run with: uv run docs/reports/build_hikari_report.py."""
from pathlib import Path
import re
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    Flowable, KeepTogether,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs/reports/2026-11-11-hikari-website-improvement-report.md"
OUT = ROOT / "output/pdf/hikari-website-improvement-report-2026-11-11.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
if (FONT_DIR / "Arial.ttf").exists():
    pdfmetrics.registerFont(TTFont("Report", str(FONT_DIR / "Arial.ttf")))
    pdfmetrics.registerFont(TTFont("Report-Bold", str(FONT_DIR / "Arial Bold.ttf")))
    pdfmetrics.registerFontFamily("Report", normal="Report", bold="Report-Bold")
else:
    pdfmetrics.registerFontFamily("Report", normal="Helvetica", bold="Helvetica-Bold")

INK = colors.HexColor("#153E35")
TEXT = colors.HexColor("#263C36")
MUTED = colors.HexColor("#61716B")
ACCENT = colors.HexColor("#A42640")
PALE = colors.HexColor("#EEF4EF")
LINE = colors.HexColor("#D8E2DC")
PAGE_W, PAGE_H = letter
WIDTH = PAGE_W - 88

styles = getSampleStyleSheet()
styles.add(ParagraphStyle("ReportBody", fontName="Report", fontSize=9.8, leading=13.0,
                          textColor=TEXT, spaceAfter=6, alignment=TA_LEFT))
styles.add(ParagraphStyle("ReportTitle", parent=styles["ReportBody"], fontName="Report-Bold",
                          fontSize=29, leading=33, textColor=INK, spaceAfter=12))
styles.add(ParagraphStyle("ReportH2", parent=styles["ReportBody"], fontName="Report-Bold",
                          fontSize=22, leading=27, textColor=INK, spaceAfter=12, keepWithNext=True))
styles.add(ParagraphStyle("ReportH3", parent=styles["ReportBody"], fontName="Report-Bold",
                          fontSize=12.0, leading=16.0, textColor=INK, spaceBefore=6,
                          spaceAfter=5, keepWithNext=True))
styles.add(ParagraphStyle("ReportBullet", parent=styles["ReportBody"], leftIndent=11,
                          firstLineIndent=-9, spaceAfter=5))
styles.add(ParagraphStyle("ReportTable", parent=styles["ReportBody"], fontSize=8.9,
                          leading=11.8, spaceAfter=0))
styles.add(ParagraphStyle("ReportTableHead", parent=styles["ReportTable"],
                          fontName="Report-Bold", textColor=INK))
styles.add(ParagraphStyle("ReportSmall", parent=styles["ReportBody"], fontSize=8.5,
                          leading=11.1, textColor=MUTED, spaceAfter=5))
styles.add(ParagraphStyle("ReportSource", parent=styles["ReportSmall"], textColor=TEXT,
                          fontSize=8.1, leading=10.6, spaceAfter=4))

def inline(text):
    """Support safe inline links, emphasis, code and evidence reference links."""
    tokens = []
    def token(markup):
        i = len(tokens)
        tokens.append(markup)
        return f"REPLACETOKEN{i}END"
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)",
                  lambda m: token(f'<link href="{escape(m[2], {chr(34): "&quot;"})}" color="#A42640">{escape(m[1])}</link>'), text)
    text = escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"`([^`]+)`", r'<font color="#153E35">\1</font>', text)
    def ref(m):
        label = m[0]
        first = re.search(r"(?:S\d\d|L\d\d)", label)[0]
        return f'<link href="#{first}" color="#A42640">{label}</link>'
    text = re.sub(r"\[(?:S\d\d|L\d\d)[^\]]*\]", ref, text)
    for i, v in enumerate(tokens):
        text = text.replace(f"REPLACETOKEN{i}END", v)
    return text

def para(text, style="ReportBody"):
    return Paragraph(inline(text), styles[style])

class OwnerChart(Flowable):
    """Historical vendor scores only; do not conflate with market share or CTR."""
    def __init__(self):
        super().__init__()
        self.width, self.height = WIDTH, 123
    def draw(self):
        c = self.canv
        left, right = 125, WIDTH - 35
        max_value = 40
        c.setFillColor(MUTED)
        c.setFont("Report", 8)
        c.drawString(0, 111, "RECORDED VENDOR VALUES - DEFINITION AND SCAN COMPLETENESS UNCONFIRMED")
        for i, (name, value) in enumerate([("Nami Lily", 38), ("Maru", 25), ("Arigato", 23)]):
            y = 83 - i * 27
            c.setFillColor(TEXT)
            c.setFont("Report", 9.5)
            c.drawString(0, y + 3, name)
            c.setFillColor(PALE)
            c.rect(left, y, right - left, 15, stroke=0, fill=1)
            c.setFillColor(INK)
            c.rect(left, y, (right - left) * value / max_value, 15, stroke=0, fill=1)
            c.setFillColor(TEXT)
            c.drawString(right + 6, y + 3, f"{value}%")
        c.setStrokeColor(LINE)
        c.setLineWidth(.5)
        c.line(left, 20, right, 20)
        c.setFillColor(MUTED)
        c.setFont("Report", 8)
        for value in (0, 20, 40):
            x = left + (right - left) * value / max_value
            c.drawCentredString(x, 8, f"{value}%")

def table(lines):
    rows = [[c.strip() for c in line.strip().strip("|").split("|")] for line in lines]
    rows = [r for r in rows if not all(re.fullmatch(r":?-+:?", c) for c in r)]
    n = len(rows[0])
    if n == 3:
        widths = [69, WIDTH - 171, 102]
    else:
        widths = [WIDTH * .43, WIDTH * .57]
    data = [[para(c, "ReportTableHead" if i == 0 else "ReportTable") for c in row]
            for i, row in enumerate(rows)]
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (-1, 0), PALE),
        ("LINEBELOW", (0, 0), (-1, 0), .7, LINE),
        ("LINEBELOW", (0, 1), (-1, -1), .35, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t

def source_table(lines):
    entries = []
    for line in lines:
        text = line[2:]
        m = re.match(r"\*\*(S\d\d|L\d\d)\*\*", text)
        if m:
            entries.append(Paragraph(f'<a name="{m[1]}"/>' + inline(text), styles["ReportSource"]))
    half = (len(entries) + 1) // 2
    left, right = entries[:half], entries[half:]
    rows = [[left[i] if i < len(left) else "", right[i] if i < len(right) else ""]
            for i in range(half)]
    t = Table(rows, colWidths=[WIDTH / 2, WIDTH / 2], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 14),
        ("RIGHTPADDING", (1, 0), (1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t

story = []
lines = SOURCE.read_text().splitlines()
i = 0
source_section = False
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    if line == "<!-- page -->":
        story.append(PageBreak())
    elif line == "<!-- chart: owner-scores -->":
        story.append(OwnerChart())
        story.append(Spacer(1, 5))
    elif line.startswith("### "):
        title = line[4:]
        story.append(para(title, "ReportH3"))
        source_section = title == "Sources"
    elif line.startswith("## "):
        story.append(para(line[3:], "ReportH2"))
    elif line.startswith("# "):
        story.append(para(line[2:], "ReportTitle"))
    elif line.startswith("|"):
        rows = []
        while i < len(lines) and lines[i].strip().startswith("|"):
            rows.append(lines[i]); i += 1
        story.append(table(rows)); story.append(Spacer(1, 8))
        continue
    elif source_section and line.startswith("- **"):
        entries = []
        while i < len(lines) and lines[i].strip().startswith("- **"):
            entries.append(lines[i].strip()); i += 1
        story.append(source_table(entries)); source_section = False
        continue
    elif line.startswith("- "):
        story.append(para("- " + line[2:], "ReportBullet"))
    elif re.match(r"\d+\. ", line):
        story.append(para(line, "ReportBullet"))
    else:
        # The first prepared-for line and the source-access notes are secondary.
        small = line.startswith("Prepared for") or (story and "original Google video linked" in line)
        story.append(para(line, "ReportSmall" if small else "ReportBody"))
    i += 1

def decorate(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.setFont("Report-Bold", 9)
    canvas.drawString(44, PAGE_H - 30, "HIKARI")
    canvas.setFillColor(MUTED)
    canvas.setFont("Report", 8)
    canvas.drawRightString(PAGE_W - 44, PAGE_H - 30, "WEBSITE IMPROVEMENT / RESEARCH REPORT")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.5)
    canvas.line(44, PAGE_H - 39, PAGE_W - 44, PAGE_H - 39)
    canvas.line(44, 36, PAGE_W - 44, 36)
    canvas.setFont("Report", 8)
    canvas.drawString(44, 23, "November 11, 2026  |  Proposed actions - no website changes")
    canvas.drawRightString(PAGE_W - 44, 23, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(OUT), pagesize=letter, leftMargin=44, rightMargin=44,
                        topMargin=53, bottomMargin=47, title="Hikari website improvement report",
                        author="Samantha for Joel", subject="Evidence-based findings and proposed action plan")
doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
reader = PdfReader(OUT)
print(f"Created {OUT}")
print(f"Pages: {len(reader.pages)}")
for i, page in enumerate(reader.pages, 1):
    text = page.extract_text() or ""
    print(f"Page {i}: {len(text.split())} words; {text.splitlines()[2:4]}")
print(f"Links: {sum(len(p.get('/Annots', [])) for p in reader.pages)}")
