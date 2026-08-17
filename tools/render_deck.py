"""PPTX -> PDF(LibreOffice) -> PNG(PyMuPDF). 근사 렌더가 아니라 실제 렌더 결과다.

이 PC 에 PowerPoint 가 없어 육안 확인 경로가 이것뿐이다. 그리고 반드시 확인해야 한다 ―
행간·글자폭이 예상과 달라 항목이 통째로 잘려 나간 적이 있다.

    python tools/render_deck.py                      # 기본 덱을 전달용 폴더로
    python tools/render_deck.py <pptx> <outdir> 200  # 임의 파일·해상도
"""
import shutil
import subprocess
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PPTX = ROOT / "outputs" / "주제설명_3장.pptx"

SOFFICE_CANDIDATES = [
    Path(r"C:\Program Files\LibreOffice\program\soffice.exe"),
    Path(r"C:\Program Files (x86)\LibreOffice\program\soffice.exe"),
]


def soffice() -> Path:
    for p in SOFFICE_CANDIDATES:
        if p.exists():
            return p
    found = shutil.which("soffice")
    if found:
        return Path(found)
    raise SystemExit(
        "LibreOffice 를 찾을 수 없다. winget install TheDocumentFoundation.LibreOffice")


def render(pptx: Path, outdir: Path, dpi: int = 200, keep_pdf: bool = True) -> list[Path]:
    if not pptx.exists():
        raise SystemExit(f"입력 파일이 없다: {pptx}")
    outdir.mkdir(parents=True, exist_ok=True)
    tmp = outdir / "_pdf"
    tmp.mkdir(exist_ok=True)
    subprocess.run(
        [str(soffice()), "--headless", "--convert-to", "pdf", "--outdir", str(tmp), str(pptx)],
        check=True, capture_output=True, timeout=300)
    pdf = tmp / (pptx.stem + ".pdf")
    if not pdf.exists():
        raise SystemExit("PDF 변환 실패 ― LibreOffice 가 파일을 잠그고 있는지 확인할 것")

    doc = fitz.open(pdf)
    out = []
    for i, page in enumerate(doc, 1):
        f = outdir / f"{pptx.stem}_p{i}.png"
        page.get_pixmap(dpi=dpi).save(f)
        out.append(f)
    doc.close()

    if keep_pdf:
        shutil.copy(pdf, outdir / (pptx.stem + ".pdf"))
    shutil.rmtree(tmp, ignore_errors=True)
    return out


if __name__ == "__main__":
    pptx = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PPTX
    outdir = Path(sys.argv[2]) if len(sys.argv) > 2 else pptx.parent / f"{pptx.stem}_전달용"
    dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 200
    for p in render(pptx, outdir, dpi=dpi):
        print(p)
