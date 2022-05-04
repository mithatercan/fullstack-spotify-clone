# Spotify Clone

Spotify Clone built on NextJS for the client and server side. And I've used Postgresql and Prisma ORM for the database. For the style, i used ChakraUI to build the components.

## [Live Demo](https://nextjs-spotify-clone-lac.vercel.app/signin)

![](https://user-images.githubusercontent.com/71825314/166818448-3fd621de-56ab-43a4-993e-e670d2e48d02.png)

# Setup ⚙️

First of all, you should have the Postgresql database. If you don't have one running locally then you can use [Heroku](https://www.heroku.com/postgres) create the Postgresql database.

- Start with cloning this repo.

```bash
 git clone https://github.com/mithatercan/nextjs-spotify-clone.git
```

- You should install the dependencies.

```bash
 npm install
 #or
 npm install --force
```

- You should create the ` .env` file to set the JWT secret and database URL variables.

```bash
  touch .env
```

- The .env file should look like this.

```env
  DATABASE_URL=
  SHADOW_DATABASE_URL=
  JWT_SECRET =
```

### Prisma ORM

You must have the prisma orm downloaded on your local machine. To download the prisma, check the guide [here](https://www.prisma.io/docs/getting-started/quickstart).

- Then you should run migrate the schemas to database

```bash
  npx prisma migrate deploy
```

- And finally you should seed the data.

```bash
  npx prisma db seed
```

### Final Step

After all these setup above. The app is ready to run.

```bash
 npm run dev
```

Default port is 3000. App will be running at localhost:3000

# Contribution 🙏

Pull requests are welcome, you can simply create an issue and contributing the app.

# License

[MIT](https://choosealicense.com/licenses/mit/)
