import urllib.request, zipfile, io, sys, os

url = 'https://files.pythonhosted.org/packages/07/43/5e77a4489300a8f7fa956dfe1c81105aef02d8a9e54b4ce4ffc3af0734e6/fpdf2-2.8.3-py2.py3-none-any.whl'
print('Downloading fpdf2...')
data = urllib.request.urlopen(url).read()
target = os.path.expanduser('~/.local/lib/python-extra')
os.makedirs(target, exist_ok=True)
with zipfile.ZipFile(io.BytesIO(data)) as zf:
    zf.extractall(target)
print('Installed to', target)
sys.path.insert(0, target)
from fpdf import FPDF
print('fpdf2 import OK')
