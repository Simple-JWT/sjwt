# SimpleJWT

The SimpleJWT `sjwt` library simplifies using [simplejwt.com](https://simplejwt.com?utm_source=github). It gives you simple tools for your end users to register, login, etc for a complete user management experience. All end users have an associated JSON store that you can access as well.

### Basic Usage

* `npm install sjwt`

* `import {register} from 'sjwt';`

* `const response = await register({email, password, projectId});`

* `import {getAuthenticatedUser} from 'sjwt';`

* `const user = await getAuthenticatedUser({projectId});`

### Documentation

[WIP @ simplejwt.com](https://simplejwt.com/docs)

### Building and manually testing before publishing

1. `npm run build` creates the `dist` directory
2. `npm pack` creates a tar file
3. To test, in some other project's package.json dependencies, put `"sjwt": "file:<path to tgz file>"`

Note, sometimes you need to clean npm's cache:

1. `npm cache ls | grep sjwt` list all sjwt cache entries
2. `npm cache clean <an entry from above>` delete an entry

Note, you often need to remove checksums from package-lock.json as well