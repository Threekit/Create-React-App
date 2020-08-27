This project is a clone of [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

Enter this command into your command line terminal.

```
git clone https://github.com/Threekit/Create-React-App.git my-app
cd my-app
npm install
mv _.env.local .env.local
npm start
```

with yarn

```
git clone https://github.com/Threekit/Create-React-App.git my-app
cd my-app
yarn
mv _.env.local .env.local
yarn start
```

### Create `.env.local` with authentication token

Authentication tokens should **never** be stored in a git repository. They should be stored in an environmental variables.

This repo comes equipped with an auth token that will work on `localhost:3000`, `localhost:3001`, `localhost:8000`, `localhost:8001`, or `localhost:8080`. This command will automatically create the correct `env.local` file.

```bash
mv _.env.local .env.local
```

### Start Project

```
npm start
```
