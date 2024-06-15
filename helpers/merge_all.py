import os
import yaml

def merge_dict(d1, d2):
    for key, value in d2.items():
        if key in d1 and isinstance(value, dict):
            merge_dict(d1[key], value)
        else:
            d1[key] = value

openapi1 = {}

output_dir = 'output'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename in os.listdir('.'):
    if filename.endswith('.yaml'):
        with open(filename, 'r') as file:
            openapi = yaml.safe_load(file)
            merge_dict(openapi1, openapi)

output_file = os.path.join(output_dir, 'merged.yaml')
with open(output_file, 'w') as outfile:
    yaml.safe_dump(openapi1, outfile)
