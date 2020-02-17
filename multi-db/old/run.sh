#!/bin/bash

echo criando containers docker
echo container: POSTGRES
docker run \
    --name postgres \
    -e POSTGRES_USER=root \
    -e POSTGRES_PASSWORD=root \
    -e POSTEGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

echo container: ADMINER
docker run \
  	--name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

echo container: MONGODB
docker run \
	--name mongodb \
	-p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=admin \
	-d \
	mongo:4

echo container: MONGOCLIENT
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

echo digite o comando: createdb heroes
docker exec -it postgres /bin/bash