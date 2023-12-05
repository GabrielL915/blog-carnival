---
title: Auth API
author: Your Name
pubDatetime: 2023-08-22T12:00:00Z
postSlug: auth api blog post
featured: true
draft: false
tags:
  - Software Architecture
  - JWT
  - NestJS
  - api
  - Design Patterns
ogImage: ""
description: Uma Api em Nestjs mmostrando autentificação com JWT tentando seguir arquitetura limpa.
---

## Table of Contents

## Estrutura do projeto

```bash
|____libs
| |____data-source
| | |____src
| | | |____repository
| |____domain-auth
| | |____src
| | | |____dto
| | | |____strategies
| | | |____use-cases
| |____domain-users
| | |____src
| | | |____dto
| | | |____entities
| | | |____use-cases
| |____resource-auth
| |____resource-users
| |____shared
| | |____src
| | | |____decorators
| | | |____guards
| | | |____interfaces
| | | |____utils
|____migrations
|____src
| |____app.module.ts
| |____main.ts
```

## Configuração

Necessario ter Docker intalado na maquina. Para subir o container do postrgres e adminer abaixo

```bash
version: '3'

services:
  pgsql:
    image: postgres:alpine
    ports:
      - '5432:5432'
    container_name: 'pgsql'
    restart: always
    volumes:
      - pg-data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: pguser
      POSTGRES_PASSWORD: pgpassword

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080

volumes:
  pg-data:
```

Comando para subir o container

```bash
docker-compose up -d
```

Agora e necessario subir o banco de dados e rodar as migrations do KnexJs

```bash
npx knex migrate:latest
```

## Repositorio

Pode encontrar o repositorio no meu GitHub [Auth APi](https://github.com/GabrielL915/auth-api)
