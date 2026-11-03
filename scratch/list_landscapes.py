import os
import struct

def get_jpeg_info(file_path):
    with open(file_path, 'rb') as f:
        data = f.read()
    if data[:2] != b'\xff\xd8':
        return None
    size = len(data)
    idx = 2
    while idx < size:
        if data[idx] != 0xff:
            idx += 1
            continue
        marker = data[idx + 1]
        if marker in (0xc0, 0xc1, 0xc2, 0xc3):
            h, w = struct.unpack('>HH', data[idx + 5:idx + 9])
            return w, h
        elif marker in (0xd9, 0xda):
            break
        else:
            length = struct.unpack('>H', data[idx + 2:idx + 4])[0]
            idx += 2 + length
    return None

all_files = [f for f in os.listdir('images') if f.endswith('.jpg')]
landscape_files = []
for f in all_files:
    dim = get_jpeg_info(os.path.join('images', f))
    if dim and dim[0] / dim[1] >= 1.3:
        landscape_files.append((f, dim[0], dim[1], os.path.getsize(os.path.join('images', f))))

print(f"Total landscape images: {len(landscape_files)}")
for f, w, h, s in sorted(landscape_files, key=lambda x: x[0]):
    print(f"{f}: {w}x{h} ({s//1024} KB)")

