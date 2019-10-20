# Server Configuration Information 
1. Server: minimal Google Computer engine, may be migrated to app engine in final build
2. Configurations: Installed python 3.7, pip3, and google.cloud and google.cloud.vision through pip
3. gcloud init must be ran to intialize instance with project package-pal 
4. For some unknown reason, .json file is needed to authenticate vision, can be downloaded from API page
5. export GOOGLE_APPLICATION_CREDENTIALS="[Path]" for API approval 
6. gsutil rsync -r gs://package-pal-images/ ./images to sync folder with bucket

Some of this should hopefully be able to be removed, and this whole server may be able to succeed on the app engine. This is just 
necessary documentation in case any of this needs to be rebuilt. 
