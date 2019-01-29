import pandas as pd 
import numpy as np
import math
import json

HIGH_DANGER = {'VANDALISM', 'ASSAULT', 'BURGLARY', 'SEX OFFENSES FORCIBLE', 'KIDNAPPING'}
MEDIUM_DANGER = {'SEX OFFENSES NON FORCIBLE', 'DRUG/NARCOTIC', 'FORGERY/COUNTERFEITING', 'FRAUD'}

def label_danger (row):
    """
    Assign danger level label based on type of crime. 
    """
    if row['Category'] in HIGH_DANGER :
        return 3
    if row['Category'] in MEDIUM_DANGER :
        return 2
    return 1


def latlng2index(lng, lat): 
    """
    Convert latitude and longitude coordinate to corresponding
    indices in the heat_map matrix. 
    """
    x = math.ceil((lng - MIN_LNG) * kScale)
    y = math.ceil((MAX_LAT - lat) * kScale)
    return x, y

def index2latlng(y, x):
    """
    Convert indices to corresponding latitude and longitude 
    coordinate in the heat_map matrix. 
    """
    lng = x / kScale + MIN_LNG 
    lat = MAX_LAT - y / kScale 
    return lat, lng


df = pd.read_csv('data.csv')

# remove irrelevant categories and columns 
df = df[df.Category != 'NON-CRIMINAL']
df = df[df.Category != 'RECOVERED VEHICLE']
df = df[df.Category != 'DRIVING UNDER THE INFLUENCE']
df = df[df.Category != 'BRIBERY']
df = df[df.Category != 'FAMILY OFFENSES']

df = df.drop(columns=['Resolution', 'Dates', 'DayOfWeek', 'Address', 'PdDistrict', 'Descript'])

# remove bad data
df = df[df.X != -120.5]
df = df[df.Y != 90]

# Create a new column with corresponding danger level of each crime
df['danger_level'] = df.apply (lambda row: label_danger (row),axis=1)

# Get crime map boundaries. 
MAX_LAT = df['Y'].max() 
MIN_LAT = df['Y'].min()
MAX_LNG = df['X'].max()
MIN_LNG = df['X'].min()

kScale = 10e4

h = math.ceil((MAX_LAT - MIN_LAT) * kScale)
w = math.ceil((MAX_LNG - MIN_LNG) * kScale)

kernel_size = 20
heat_map = np.zeros((h,w)).astype(np.uint8)
count = 0

for _, row in df.iterrows():
    x, y = convert_coordinate(row['X'], row['Y'])
    lvl = row['danger_level']
    for i in range(max(0, y - kernel_size), min(h, y + kernel_size)):
        for j in range(max(0, x - kernel_size), min(w, x + kernel_size)):
            heat_map[i][j] += lvl 
    count += 1 
    if count % 100 == 0:
        print(count, " rows processed")



heat_json = {}
for i in range(len(heat_map)): 
    for j in range(len(heat_map[0])): 
        lat, lng = index2latlng(i, j)
        key = "lat: {:.5f},lng: {:.5f}".format(lat, lng)
        heat_json[key] = int(heat_map[i][j])
            break

json_file = json.dumps(heat_json)
with open('danger_sf.json', 'w') as outfile:  
    json.dump(heat_json, outfile)
