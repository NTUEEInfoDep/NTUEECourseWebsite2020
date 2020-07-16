# Generate password for students
# Read input from ./raw-data/students.csv
# Output json file to ./data/students.json
# Output csv file to ./raw-data/students_password.csv

import os
import string
import secrets
import csv
import json

# ========================================

csv_input = './raw-data/students.csv'
json_output = './data/students.json'
csv_output = './raw-data/students_password.csv'

json_data = list()
csv_data = list()

# ========================================


def gen_password(length=10):
    alphabet = string.ascii_letters + string.digits
    password = ''.join(secrets.choice(alphabet) for _ in range(length))
    return password


# ========================================

with open(csv_input, newline='') as fin:
    rows = csv.DictReader(fin)
    for row in rows:
        password = gen_password()
        json_data.append({
            'userID': row['id'],
            'grade': int(row['grade']),
            'password': password
        })
        row['password'] = password
        csv_data.append(row)

with open(json_output, 'w') as fout:
    json.dump(json_data, fout, indent=2)

with open(csv_output, 'w') as fout:
    fieldnames = list(csv_data[0].keys())
    writer = csv.DictWriter(fout, fieldnames=fieldnames)
    writer.writeheader()
    for row in csv_data:
        writer.writerow(row)
