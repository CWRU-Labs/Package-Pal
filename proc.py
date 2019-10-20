from google.cloud import vision
# import io
client = vision.ImageAnnotatorClient()
"""
with io.open("images/First-Class-Package-Label-Example.png", 'rb') as image_file:
        content = image_file.read()

image = vision.types.Image(content=content)
"""
image = vision.types.Image()
image.source.image_uri = "gs://package-pal-images/First-Class-Package-Label-Example.png"

response = client.text_detection(image=image)
texts = response.text_annotations
print('Texts:')
print(texts)

"""
for text in texts:
        print('\n"{}"'.format(text.description))

        vertices = (['({},{})'.format(vertex.x, vertex.y) for vertex in text.bounding_poly.vertices])

        print('bounds: {}'.format(','.join(vertices)))
"""
