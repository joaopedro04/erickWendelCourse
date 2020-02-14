#!/bin/bash

echo Removendo containers docker...
docker rm -f postgres && \
docker rm -f adminer && \
docker rm -f mongodb &&\
docker rm -f mongoclient \