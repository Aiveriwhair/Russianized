import json


def lerp(
    minPopulation=100000, maxPopulation=1000000, minFactor=0.1, maxFactor=1, value=0
):
    return (maxFactor - minFactor) / (maxPopulation - minPopulation) * (value)


populationMinimum = 100000
minFactor = 0.1  # 100000
maxFactor = 1  #   1000000
newData = []


with open(
    "/Users/william/Desktop/dev/Russianized/Russianized/ressources/dataGeneration/brutData.json",
    "r",
) as f:
    data = json.load(f)

for city in data:
    if city["fields"]["population"] > populationMinimum:
        temp = {
            "name": city["fields"]["name"],
            "coordinates": city["fields"]["coordinates"],
            "radiusFactor": lerp(value=city["fields"]["population"]),
        }
        newData.append(temp)
        print(temp)

dataSet = open("newdataSet100k.json", "w")
dataSet.write(json.dumps(newData))
