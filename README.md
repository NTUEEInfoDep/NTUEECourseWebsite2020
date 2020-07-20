# NTUEECourse2020

2020 年新版電機系預選網站

## Contributors

前端：朱哲廣

後端：劉奇聖

## Quick Start (Development mode)

```shell
$ npm install
$ sudo docker-compose up    # This will watch backend code changes
$ npm run develop-client    # This will open webpack-dev-server for frondend
```

And then goto `http://localhost:8000`

For production build, deploy, and other details, see [documentation](/doc/).

## Directory Structure

    .
    ├── assets/                    - static assets
    ├── client/                    - frontend code
    ├── server/                    - backend code
        ├── routes/                - express routers
        └── database               - database-related codes
            ├── data/              - Non-secret data, e.g. course names
            ├── private-data/      - Secret data, e.g. student names and passwords
            ├── mongo/             - MongoDB-related codes
            ├── redis/             - RedisDB-related codes
            ├── database.js        - CLI for database operations
            └── gen_password.py    - Script for generating student passwords
    ├── Dockerfile                 - For deploy
    └── docker-compose.yml         - For development
