# Main Libraries Used
![NodeJS](https://img.shields.io/badge/node.js-white?style=for-the-badge&logo=node.js&logoColor=6DA55F)
![TypeScript](https://img.shields.io/badge/typescript-white.svg?style=for-the-badge&logo=typescript&logoColor=blue)
![Fastify](https://img.shields.io/badge/fastify-white?style=for-the-badge&logo=fastify&logoColor=black)
![docker-compose](https://img.shields.io/badge/docker-white?style=for-the-badge&logo=docker&logoColor=blue)
![Postgres](https://img.shields.io/badge/postgres-white.svg?style=for-the-badge&logo=postgresql&logoColor=%23316192)

# Installation
``` > npm install```

# docker-compose
### start database
``` > docker-compose up -d```

# .env
```properties
DATABASE_URL="postgressql://docker:docker@localhost:5432/inorbit"
```

# Migrations
### generate
``` > npx drizzle-kit generate```

### apply
``` > npx drizzle-kit migrate```

### manage database
``` > npx drizzle-kit studio```

# Initialize database with test data
``` > npm run seed```

# Start project
``` > npm run dev```
