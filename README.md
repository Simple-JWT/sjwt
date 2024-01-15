# Simple JWT

The Simple JWT library simplifies using [simplejwt.com](https://simplejwt.com?utm_source=github). It gives you simple tools for your end users to register, login, etc for a complete user management experience. All end users have an associated JSON store that you can access as well.

### Basic Usage

* `npm install sjwt`

* `import {register} from 'sjwt';`

* `const response = await register({email, password, projectId});`

* `import {getAuthenticatedUser} from 'sjwt';`

* `const user = await getAuthenticatedUser({projectId});`

### Documentation

[WIP @ simplejwt.com](https://simplejwt.com/docs)