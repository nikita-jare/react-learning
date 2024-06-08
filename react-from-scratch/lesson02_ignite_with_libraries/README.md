Learn to create your own app which is production ready instead of using the ready frameworks that provide the production ready code (create react-app)

A lot of other code and libraries are required to make app fast and production ready and not only react

### NPM:

NPM does not mean Node Package Manager

NPM is everything but a Node Package Manager

Visit npmjs.com

It is a package manager and a standard repository for all kinds of packages and libraries

How to add NPM to your project:
`npm init`

`package.json`: is a configuration file for npm. Keeps approximate version

`package.lock.json`: keeps track of exact version that was installed

Add dependencies to your project:

1. **Bundler**: Bundles and packages your app properly so that it can ship to production

   Ex: webpack, vite, parcel

   We will use parcel here:

   `npm install -D parcel`

   Two types of dependencies we can install:
   Normal dependency : Used in dev as well as production
   Dev dependency: Required during development phase

   ~ (upgrade major version) and ^ (upgrade minor version) in package.json

   node_modules is very heavy - it contains all the required packages

   Each package has its own package.json and dependencies

   Do not check-in node_modules in the repo as we can install our node_modules again using `npm install` in the project directory

2. **Ignite your App:**
   Create a local server and host your app:
   `npx parcel index.html`

3. **Install React in node_modules using npm:**
   Using CDN you will have to make multiple network calls, Also whenever the react version is updated we weill have to change the links. So, to avoid this lets have react directly in our node_modules.

4. **Add import statements to import react and react-dom from node_modules:**
   But it shows an error : @parcel/transformer-js: Browser scripts cannot have imports or exports.

   In our html - we are injecting app.js. So it treats app.js as normal Javascript. So we need to tell that this file is not a browser script and is a module.
   Give type=module in html script

5. **What does Parcel do?**

- Parcel automatically reflects changes on the server soon as the file is saved. That means it is doing HMR: Hot Module Replacement
- To do this: Parcel uses file watching algorithm written in C++
- Parcel also caches things to fasten up build time
- Parcel dev build
- Parcel will also do image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Different bundling: when app is hosted, it can be opened in different browsers so parcel takes care of it and app can run smoothly on different browsers
- Diagnostics
- Error handling
- Host your app on HTTPS or HTTP
- Tree Shaking - if we have 100s of functions and only 1 or 2 of them are used, parcel can remove that unused code.
  Parcel manages everything using other libraries

6. **Make your app old browser compatible:**
   We have browserslist package. We need to list all the browsers that we want to support. Add browserslist to package.json
   broserlist.dev website -

   Adding browsers list to package.json does not mean that it wont work for other browsers not in the list. It means it may or may not wok on others but definitely will work on the list.

   You'd need to do this for example on Government websites. You can give country specific list as well: Example: `browserslist: ['cover 99% in Us']`
