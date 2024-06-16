### To Read: sass, scss, styled components

1. Ways to write css

- all in one file
- sass, scss
- styled components (recommended)
- libraries - material-ui (mui), tailwindcss, chakra-ui, bootstrap, antdesign etc.

2. `postcss` transforming css with js

- tailwind.cofig.js:
  content: what files and folders you are going to use tailwind css at

- tailwindcss gives you class for every single css you want to apply to your html

3. Benefits of tailwind:

- saves time switching in between files
- has a initial learning curve but once you get the hang of it, it becomes very fast
- just one class for each and every css
- keeps bundle size small and easy to maintain. Its very lightweight and fast
- We only ship the css classes that are in use. There is no redundant and unused css
- we can also change css according to the device screen size
  `sm:bg-red-500 md:bg-green-500 lg:bg-blue-500`

4. drawbacks

- have to write classes for each and every css and that makes code very repetitive, bulky and messy, less readable
