### Primeiro comando:

* Serve para criar o container postgres.
``` 
docker run \
    --name postgres \
    -e POSTGRES_USER=root \
    -e POSTGRES_PASSWORD=root \
    -e POSTEGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres
```

### Segundo comando:

* Mostra todos os containers
```docker ps```

### Terceiro comando:

* Entra dentro do container onde pode executar comando de banco de dados, como exemplo  ```  psql``` 
```docker exec -it postgres /bin/bash```

### Quarto comando:

* Serve para criar o container postgres.
``` 
docker run \
  	--name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer
```
* http://localhost:8080/ -> aqui irá ser o local onde o adminer
* se ao logar e dizer que a não existe a tabela, rode o 'Terceiro Comando' no terminal e depois rode ``` createdb heroes ```

### Quinto Comando:

```
docker run \
	--name mongodb \
	-p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=admin \
	-d \
	mongo:4
```

### Sexto Comando:
* instalação do mongoclient

```
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient
```

### Sétimo comando
* criação de usuario(não admin).

```
docker exec -it mongodb \
    mongo --host localhost \
    -u admin \
    -p admin \
    --authenticationDatabase admin\
    --eval "db.getSiblingDB('heroes').createUser({user: 'joao', pwd: 'Senha123', roles: [{role: 'readWrite', db: 'heroes'}]})"