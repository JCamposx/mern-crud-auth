# Tasks app on MERN stack

Simple CRUD app with auth made in MERN stack.

## Table of contents

- [Local setup](#local-setup)
  - [Backend](#backend-locally)
  - [Frontend](#frontend-locally)
- [Docker setup](#docker-setup)
  - [Backend](#backend-on-docker)
  - [Frontend](#frontend-on-docker)

### Local setup

In order to run the app locally, there are some requirements you must have
installed.

- [Nodejs and npm](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

All of this depends on the operating system you are using. Once you are sure
that you meet all the requirements, you can start configuring the project.

First of all, clone the project and move into it.

```bash
git clone https://github.com/JCamposx/mern-crud-auth
cd mern-crud-auth
```

#### Backend locally

Move into the frontend directory.

```bash
cd frontend
```

First, install all the dependencies.

```bash
npm install
```

Then, you have to create an `.env` file. To do this, copy the `.env.example`
file and rename it.

```bash
cp .env.example .env
```

After that, modify the content like this.

```bash
PORT=8000
MONGODB_URI=mongodb://localhost/mern-tasks-app
TOKEN_SECRET=secret123
FRONTEND_URL=http://localhost:3000
```

Finally, run the server.

```bash
npm run dev
```

You will see that the server is running in `localhost` on port `8000`.

#### Frontend locally

Move into the frontend directory.

```bash
cd frontend
```

First, install all the dependencies.

```bash
npm install
```

Then, you have to create an `.env` file. To do this, copy the `.env.example`
file and rename it.

```bash
cp .env.example .env
```

After that, modify the content like this.

```bash
VITE_API_URL=http://localhost:8000/api
```

Finally, run the server.

```bash
npm run dev
```

You will see that the server is running in `localhost` on port `3000`.

#### Running app locally

Having followed all steps, just go to
[http://localhost:3000](http://localhost:3000) and start using the app. Also,
you can interact with the API in [http://localhost:8000](http://localhost:8000).

### Docker setup

Be sure you have installed docker and docker compose. You can check it running
the following commands.

```bash
docker -v
docker compose version
```

Both commands should return the corresponding versions without any error.

First of all, clone the project and move into it.

```bash
git clone https://github.com/JCamposx/mern-crud-auth
cd mern-crud-auth
```

#### Backend on docker

First, move into the backend directory.

```bash
cd backend
```

You have to create an `.env` file. To do this, copy the `.env.example` file
and rename it.

```bash
cp .env.example .env
```

After that, modify the content like this.

```bash
PORT=8000
MONGODB_URI=mongodb://mongo/mern-tasks-app
TOKEN_SECRET=secret123
FRONTEND_URL=http://localhost:3000
```

This variables are mandatory. If they are different, the app will not work.

#### Frontend on docker

First, move into the frontend directory.

```bash
cd backend
```

You have to create an `.env` file. To do this, copy the `.env.example` file
and rename it.

```bash
cp .env.example .env
```

After that, modify the content like this.

```bash
VITE_API_URL=http://localhost:8000/api
```

Once again, this variable is mandatory. If it is different, the app will not
work.

#### Running app on docker

Having set the environment variables, simply go back to the root directory and
run the containers with the following command.

```bash
pwd # Be sure you are in the root directory
docker compose up
```

You will see that the backend server will be running in `localhost` on port
`8000` and the frontend one will be running in `localhost` on port`3000`.

Having followed all steps, you cant interact with the entire app going to the
frontend server at [http://localhost:3000](http://localhost:3000). Also, you can
interact with the API in [http://localhost:8000](http://localhost:8000).
