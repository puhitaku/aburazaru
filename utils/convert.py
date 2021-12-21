#!/usr/bin/env python3
import base64
import sys
from pathlib import Path


if len(sys.argv) < 2:
    print(f'Usage: {sys.argv[0]} IMAGE', file=sys.stderr)
    sys.exit(1)

path = Path(sys.argv[1])

with open(path, 'rb') as f:
    b64 = base64.encodebytes(f.read())
    match path.name.split('.'):
        case [*_, 'jpg'] | [_, 'jpeg']:
            print(f'data:image/jpeg;base64,{b64.decode()}')
        case [*_, 'png']:
            print(f'data:image/png;base64,{b64.decode()}')
        case [*_, 'gif']:
            print(f'data:image/gif;base64,{b64.decode()}')
        case [*_, e]:
            print(f'Unknown extension: {e}', file=sys.stderr)

