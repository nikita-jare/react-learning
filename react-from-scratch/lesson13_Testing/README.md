## Testing

### To Read: `From Parcel docs read about Babel from JS, usage with other tools`

1. Three types of developer testing

- Unit testing: Test individual components
- Integration testing: Test components together
- End-to-end testing: Test the entire application

2. React Testing Library - built on top of DOM testing library
   - how to setup project to support testing
   - React Testing uses Jest (Javascript Testing Framework) - jest uses babel
     install additional dependencies required to use jest with babel
   - Parcel uses its own babel configuration, we setting it up again will override and have conflict with its own babel configuration. We can disable parcel's babel configuration in .parcelrc
   - JS DOM - when we run test cases there is no browser environment, it runs in node environment. So we need to use jsdom which is a js environment that acts a browser environment
   - For jest version > 28 we need to install jest-environment-jsdom separately
   - Where to create test files: `__tests__` folder and `.tests.js / .test.ts` files in it. OR `spec.js / spec.ts` or `test.js / test.ts`
   - It will fail if we don't include @babel/preset-react in babel.config.js
     as jsx is not supported
   - It will still fail as toBeInTheDocument is not supported in @testing-library/react. So we need to add @testing-library/jestdom
   - We can create different groups of testcases using describe
   - we can also write test alias it

Setting up Testing:

- npm install --save-dev @testing-library/react
- npm i -D jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- create babel.config.js
- Configure .parcelrc file to disable default babel config in parcel
- Jest configuration `npx jest --init`
- npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react to make JSX run in tests
- Include @babel/preset-react in babel.config.js
- I still got an error saying Cannot find module '@testing-library/dom' so I installed it separately
- Add @testing-library/jest-dom
