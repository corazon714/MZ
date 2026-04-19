const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { marked } = require('marked');

// File order for the unified document
const fileOrder = [
  '01-tanitim/tarihce.md',
  '01-tanitim/genel-ozellikler.md',
  '02-motor-teknik/teknik-ozellikler.md',
  '02-motor-teknik/calisma-prensibi.md',
  '02-motor-teknik/karburator.md',
  '02-motor-teknik/atesleme-sistemi.md',
  '02-motor-teknik/egzoz-sistemi.md',
  '02-motor-teknik/sogutma-sistemi.md',
  '02-motor-teknik/yakit-yaglama-sistemi.md',
  '02-motor-teknik/sanziman-debriyaj.md',
  '03-bakim/periyodik-bakim.md',
  '03-bakim/karburator-ayari.md',
  '03-bakim/atesleme-ayari.md',
  '03-bakim/fren-bakim.md',
  '03-bakim/zincir-bakim.md',
  '03-bakim/yakit-ve-yag.md',
  '03-bakim/elektrik-sistemi.md',
  '03-bakim/kis-bakimi.md',
  '04-tamir/genel-tamir-ipuclari.md',
  '04-tamir/motor-ust-revizyon.md',
  '04-tamir/silindir-piston.md',
  '04-tamir/krank-mili.md',
  '04-tamir/karburator-revizyon.md',
  '04-tamir/sanziman-tamiri.md',
  '04-tamir/conta-sizidirmazlik.md',
  '04-tamir/elektrik-tamiri.md',
  '04-tamir/suspansiyon-tamiri.md',
  '05-sorun-giderme/motor-calismiyor.md',
  '05-sorun-giderme/guc-kaybi.md',
  '05-sorun-giderme/kolben-klemmer.md',
  '05-sorun-giderme/ses-titresim.md',
  '06-yedek-parca/parca-katalogu.md',
  '06-yedek-parca/tedarikciler.md',
  '06-yedek-parca/uyumluluk.md',
  '07-referans/teknik-tablolar.md',
  '07-referans/tork-degerleri.md',
  '07-referans/elektrik-semasi.md',
  '07-referans/kaynaklar.md',
];

const sectionTitles = {
  '01-tanitim': 'BÖLÜM 1 — TANITIM',
  '02-motor-teknik': 'BÖLÜM 2 — MOTOR TEKNİK BİLGİLER',
  '03-bakim': 'BÖLÜM 3 — BAKIM KILAVUZLARI',
  '04-tamir': 'BÖLÜM 4 — TAMİR KILAVUZLARI',
  '05-sorun-giderme': 'BÖLÜM 5 — SORUN GİDERME',
  '06-yedek-parca': 'BÖLÜM 6 — YEDEK PARÇA',
  '07-referans': 'BÖLÜM 7 — REFERANS',
};

const baseDir = '/home/corazon/Desktop/MZ';

marked.setOptions({ gfm: true, breaks: false });

// ─── Collect chapters (titles + IDs + section info) ───
const chapters = []; // { id, title, type:'section'|'chapter', sectionKey, marker }
let contentHTML = '';
let chapterNum = 0;
let lastSection = '';
let markerIdx = 0;

for (const filePath of fileOrder) {
  const section = filePath.split('/')[0];
  const fullPath = path.join(baseDir, filePath);
  if (!fs.existsSync(fullPath)) { console.warn(`Missing: ${fullPath}`); continue; }

  if (section !== lastSection) {
    lastSection = section;
    const sectionTitle = sectionTitles[section] || section;
    const sectionId = `section-${section}`;
    markerIdx++;
    const marker = `\u00ab${String(markerIdx).padStart(2,'0')}\u00bb`;
    chapters.push({ id: sectionId, title: sectionTitle, type: 'section', marker });
    contentHTML += `<div class="section-break" id="${sectionId}"><span class="ch-marker">${marker}</span><h1 class="section-title">${sectionTitle}</h1></div>\n`;
  }

  let md = fs.readFileSync(fullPath, 'utf-8');
  md = md.replace(/^→\s+\[.*$/gm, '');
  md = md.replace(/\n---\n\n\*Kaynak:.*$/s, (m) => {
    const src = m.split('\n').find(l => l.startsWith('*Kaynak:'));
    return src ? `\n\n${src}` : '';
  });

  const h1Match = md.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : path.basename(filePath, '.md');

  chapterNum++;
  const chapterId = `chapter-${chapterNum}`;
  markerIdx++;
  const marker = `\u00ab${String(markerIdx).padStart(2,'0')}\u00bb`;
  chapters.push({ id: chapterId, title, type: 'chapter', marker });

  contentHTML += `<div class="chapter" id="${chapterId}">\n<span class="ch-marker">${marker}</span>\n${marked(md)}\n</div>\n`;
}

// ─── Build TOC HTML (with optional page numbers) ───
function buildTOC(pageMap) {
  let html = '';
  for (const ch of chapters) {
    const pageNum = pageMap ? pageMap[ch.id] : null;
    const pageSpan = pageNum ? `<span class="toc-page-num">${pageNum}</span>` : '';
    if (ch.type === 'section') {
      html += `<li class="toc-section"><a href="#${ch.id}">${ch.title}${pageSpan}</a></li>\n`;
    } else {
      html += `<li class="toc-chapter"><a href="#${ch.id}"><span class="toc-title">${ch.title}</span>${pageSpan}</a></li>\n`;
    }
  }
  return html;
}

// ─── Build full HTML document ───
function buildHTML(tocHTML) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>MZ ETZ 251 — Motor Teknik El Kitabı</title>
<style>
  @page {
    size: A4;
    margin: 20mm 18mm 25mm 18mm;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .ch-marker {
    font-size: 0.5pt;
    color: white;
    line-height: 0.5pt;
    display: inline-block;
    width: 0;
    white-space: nowrap;
  }

  body {
    font-family: 'Liberation Serif', 'DejaVu Serif', 'Noto Serif', serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #1a1a1a;
    text-align: justify;
    hyphens: auto;
  }

  /* Cover Page */
  .cover-page {
    page-break-after: always;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    min-height: 100vh; text-align: center; padding: 40mm 20mm;
  }
  .cover-page h1 { font-size: 28pt; font-weight: bold; margin-bottom: 8mm; color: #111; letter-spacing: 1px; }
  .cover-page h2 { font-size: 16pt; font-weight: normal; margin-bottom: 15mm; color: #333; }
  .cover-page .subtitle { font-size: 12pt; color: #555; margin-bottom: 5mm; }
  .cover-page .info { font-size: 10pt; color: #777; margin-top: 30mm; line-height: 1.8; }
  .cover-line { width: 60%; height: 2px; background: #333; margin: 10mm auto; }

  /* TOC Page */
  .toc-page { page-break-after: always; padding-top: 10mm; }
  .toc-page h1 {
    font-size: 18pt; text-align: center; margin-bottom: 10mm; color: #111;
    border-bottom: 2px solid #333; padding-bottom: 3mm;
  }
  .toc-page ul { list-style: none; padding: 0; }

  .toc-section { margin-top: 5mm; margin-bottom: 2mm; }
  .toc-section a {
    font-weight: bold; font-size: 11pt; color: #111; text-decoration: none;
    display: flex; justify-content: space-between; align-items: baseline;
  }

  .toc-chapter { margin-left: 8mm; margin-bottom: 1.5mm; }
  .toc-chapter a {
    font-size: 10pt; color: #333; text-decoration: none;
    display: flex; align-items: baseline;
  }

  .toc-title {
    flex: 1;
    overflow: hidden;
  }

  .toc-title::after {
    content: " . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
    font-size: 8pt;
    letter-spacing: 1px;
    color: #999;
    overflow: hidden;
    display: inline;
    white-space: nowrap;
  }

  .toc-page-num {
    font-weight: bold;
    min-width: 2.5em;
    text-align: right;
    flex-shrink: 0;
    padding-left: 3mm;
    color: #111;
  }

  .toc-section .toc-page-num {
    font-size: 11pt;
  }

  /* Section Break */
  .section-break {
    page-break-before: always; padding-top: 30mm; text-align: center; min-height: 60mm;
  }
  .section-title {
    font-size: 20pt; font-weight: bold; color: #111;
    border-bottom: 3px solid #333; padding-bottom: 4mm; display: inline-block; letter-spacing: 1.5px;
  }

  /* Chapter */
  .chapter { page-break-before: always; }
  .chapter:first-of-type { page-break-before: auto; }

  /* Headings */
  h1 { font-size: 16pt; font-weight: bold; margin-top: 6mm; margin-bottom: 4mm; color: #111; border-bottom: 1.5px solid #555; padding-bottom: 2mm; page-break-after: avoid; }
  h2 { font-size: 13pt; font-weight: bold; margin-top: 5mm; margin-bottom: 3mm; color: #222; page-break-after: avoid; }
  h3 { font-size: 11.5pt; font-weight: bold; margin-top: 4mm; margin-bottom: 2mm; color: #333; page-break-after: avoid; }
  h4 { font-size: 10.5pt; font-weight: bold; margin-top: 3mm; margin-bottom: 1.5mm; color: #444; page-break-after: avoid; }

  p { margin-bottom: 2.5mm; orphans: 3; widows: 3; }

  /* Tables */
  table { width: 100%; border-collapse: collapse; margin: 3mm 0 4mm 0; font-size: 9.5pt; page-break-inside: auto; }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  th, td { border: 0.5pt solid #888; padding: 1.5mm 2.5mm; text-align: left; vertical-align: top; }
  th { background-color: #e8e8e8; font-weight: bold; color: #111; }
  tr:nth-child(even) { background-color: #f7f7f7; }

  /* Code blocks (ASCII diagrams) */
  pre {
    font-family: 'Noto Sans Mono', 'DejaVu Sans Mono', 'Liberation Mono', monospace;
    font-size: 7.8pt; line-height: 1.25; background-color: #f5f5f5;
    border: 0.5pt solid #ccc; padding: 3mm; margin: 3mm 0;
    overflow-x: visible; white-space: pre; page-break-inside: auto;
  }
  code { font-family: 'Noto Sans Mono', 'DejaVu Sans Mono', 'Liberation Mono', monospace; font-size: 9pt; background-color: #f0f0f0; padding: 0 1mm; border-radius: 1mm; }
  pre code { background: none; padding: 0; font-size: inherit; }

  ul, ol { margin: 2mm 0 2mm 6mm; padding-left: 4mm; }
  li { margin-bottom: 1mm; }

  blockquote { border-left: 3pt solid #888; margin: 3mm 0; padding: 2mm 4mm; background-color: #f9f9f9; font-style: italic; color: #333; page-break-inside: avoid; }
  blockquote p { margin-bottom: 1mm; }

  strong { font-weight: bold; color: #000; }
  em { font-style: italic; }
  hr { border: none; border-top: 0.5pt solid #aaa; margin: 4mm 0; }
  a { color: #111; text-decoration: none; }
  img { max-width: 100%; height: auto; }

  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }

  .chapter:last-child h1 { text-align: center; }
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover-page">
  <h1>MZ ETZ 251</h1>
  <h2>Motor Teknik El Kitabı</h2>
  <div class="cover-line"></div>
  <p class="subtitle">EM 251 — Tek Silindir, 2 Zamanlı, 243 cm³, Hava Soğutmalı</p>
  <p class="subtitle">VEB Motorradwerk Zschopau — Ocak 1989 – Aralık 1991</p>
  <div class="cover-line"></div>
  <p class="subtitle" style="margin-top:15mm;">Teknik Bilgi, Bakım Prosedürleri, Tamir Kılavuzları<br>ve Sorun Giderme Rehberleri</p>
  <div class="info">
    <p>Bu doküman, çeşitli açık kaynaklardan derlenerek hazırlanmış<br>gayri resmi bir teknik referans materyalidir.</p>
    <p style="margin-top:5mm;">2025</p>
  </div>
</div>

<!-- TABLE OF CONTENTS -->
<div class="toc-page">
  <h1>İÇİNDEKİLER</h1>
  <ul>
    ${tocHTML}
  </ul>
</div>

<!-- CONTENT -->
${contentHTML}

</body>
</html>`;
}

// ─── PDF generation helper ───
function generatePDF(htmlPath, pdfPath) {
  execSync(
    `chromium --headless --disable-gpu --no-sandbox --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "${htmlPath}"`,
    { timeout: 120000, stdio: 'inherit' }
  );
}

// ─── Extract page numbers from PDF using pdftotext ───
function extractPageNumbers(pdfPath) {
  const raw = execSync(`pdftotext "${pdfPath}" -`, { maxBuffer: 50 * 1024 * 1024 }).toString('utf-8');
  const pages = raw.split('\f');  // form-feed separates pages
  const pageMap = {};

  for (const ch of chapters) {
    const marker = ch.marker; // e.g. «01», «02», ...
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].includes(marker)) {
        pageMap[ch.id] = i + 1; // 1-indexed page number
        break;
      }
    }
  }

  return pageMap;
}

// ─── Main: Two-pass PDF generation ───
const htmlPath = path.join(baseDir, 'MZ_ETZ_251_Teknik_El_Kitabi.html');
const pdfPath = path.join(baseDir, 'MZ_ETZ_251_Teknik_El_Kitabi.pdf');

// Pass 1: Generate PDF without page numbers in TOC
console.log('Pass 1: Generating PDF without TOC page numbers...');
const tocPass1 = buildTOC(null);
fs.writeFileSync(htmlPath, buildHTML(tocPass1), 'utf-8');
generatePDF(htmlPath, pdfPath);
console.log('Pass 1 complete.');

// Extract page numbers from the first-pass PDF
console.log('Extracting page numbers from PDF...');
const pageMap = extractPageNumbers(pdfPath);
console.log('Found page numbers:');
for (const ch of chapters) {
  console.log(`  ${ch.title}: page ${pageMap[ch.id] || '?'}`);
}

// Pass 2: Regenerate with page numbers in TOC
console.log('\nPass 2: Generating PDF with TOC page numbers...');
const tocPass2 = buildTOC(pageMap);
fs.writeFileSync(htmlPath, buildHTML(tocPass2), 'utf-8');
generatePDF(htmlPath, pdfPath);

const stats = fs.statSync(pdfPath);
console.log(`\nDone! PDF: ${pdfPath} (${(stats.size / 1024 / 1024).toFixed(1)} MB)`);
