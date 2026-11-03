import os
import struct

def get_jpeg_info(file_path):
    with open(file_path, 'rb') as f:
        data = f.read()
    
    # Check SOI
    if data[:2] != b'\xff\xd8':
        return None
    
    size = len(data)
    idx = 2
    width, height = 0, 0
    while idx < size:
        if data[idx] != 0xff:
            idx += 1
            continue
        marker = data[idx + 1]
        if marker in (0xc0, 0xc1, 0xc2, 0xc3): # SOF
            h, w = struct.unpack('>HH', data[idx + 5:idx + 9])
            return w, h
        elif marker in (0xd9, 0xda): # EOI or SOS
            break
        else:
            length = struct.unpack('>H', data[idx + 2:idx + 4])[0]
            idx += 2 + length
    return width, height

files = [
    'quinceanera-venue.jpg', 'quinceanera-dance.jpg', 'garden-arch.jpg',
    'pexels-14457430.jpg', 'pexels-14703685.jpg', 'pexels-16985112.jpg',
    'pexels-17931427.jpg', 'pexels-18265901.jpg', 'pexels-18777541.jpg',
    'pexels-19894399.jpg', 'pexels-20218564.jpg', 'pexels-2306281.jpg',
    'pexels-24023403.jpg', 'pexels-26546847.jpg', 'pexels-2788492.jpg',
    'pexels-28236694.jpg', 'pexels-29410666.jpg', 'pexels-30464368.jpg',
    'pexels-31224898.jpg', 'pexels-32019678.jpg', 'pexels-32270813.jpg',
    'pexels-32270845.jpg', 'pexels-32549822.jpg', 'pexels-32549823.jpg',
    'pexels-32994460.jpg', 'pexels-33678487.jpg', 'pexels-35188691.jpg',
    'pexels-35511828.jpg', 'pexels-35511849.jpg', 'pexels-35629351.jpg',
    'pexels-35629381.jpg', 'pexels-35985217.jpg', 'pexels-35985252.jpg',
    'pexels-37097188.jpg', 'pexels-37120133.jpg', 'pexels-37190291.jpg',
    'pexels-37296132.jpg', 'pexels-37572680.jpg', 'pexels-37849463.jpg',
    'pexels-40041419.jpg', 'pexels-4959892.jpg',  'pexels-5804898.jpg',
    'pexels-6148506.jpg',  'pexels-6479558.jpg',  'pexels-6666644.jpg',
    'pexels-6815418.jpg',  'pexels-7099975.jpg',  'pexels-7180730.jpg',
    'pexels-7600385.jpg',  'pexels-8015248.jpg',  'pexels-8466243.jpg',
    'pexels-8467358.jpg',  'pexels-9294072.jpg'
]

for f in files:
    path = os.path.join('images', f)
    dim = get_jpeg_info(path)
    if dim and dim[0] > 0:
        ratio = dim[0] / dim[1]
        orient = "landscape" if ratio > 1.2 else ("square" if ratio > 0.85 else "portrait")
        print(f"{f}: {dim[0]}x{dim[1]} ({orient}, ratio {ratio:.2f})")

