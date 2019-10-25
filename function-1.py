from google.cloud import vision, storage

def hello_gcs(event, context):
    """Triggered by a change to a Cloud Storage bucket.
    Args:
         event (dict): Event payload.
         context (google.cloud.functions.Context): Metadata for the event.
    """
    file = event
    print(f"Processing file: {file['name']}.")
    
    storage_client = storage.Client()
    bucket = storage_client.get_bucket("angularstorage")
    blob = bucket.blob("upload.log")
    
    
    if ".jpg" in file['name'] or ".png" in file['name']:
        client = vision.ImageAnnotatorClient()
        image = vision.types.Image()
        print(f"gs://package-pal-images/{file['name']}")
        image.source.image_uri = f"gs://package-pal-images/{file['name']}"
        response = client.text_detection(image=image)
        texts = response.text_annotations
        blob.upload_from_string(str(texts))
        print("SUCCESS")
        #print(texts)
    else:
        print("not an image uploaded")
    
