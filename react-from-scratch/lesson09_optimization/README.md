### To Read: lazy loading, suspense

1. Single Responsibility Principle
   Each component / Module has one and only one responsibility
   It becomes easier to maintain, test, and debug the code
   We can also reuse the code in multiple places
   Keep your components as simple as possible

2. Custom hooks
   We can use custom hooks to reuse code. We can abstract responsibilities from component to different hooks.

   Ex: RestaurantMenu.js component
   It has two responsibilities: fetching data and rendering the data
   We can create a custom hook to fetch data. RestaurantMenu is now not concern about how we fetch the data, it is abstracted.

   Idea for custom hooks - hook/library which exports something like uselocalstorage, usesessionstorage etc.

   Online / Offline feature using Hook

   Recommended to use - 'use' in the name of the hook. Setup Linters

3. What is problem with developing large scale apps?
   Parcel compiles everything into one single js file
   But the problem here is as your code increases, features become more complex this single file js file becomes very large

   So, we need to break down the code into smaller files for optimization purpose, i.e. making smaller bundles of the file --> this is also called as chunking, code splitting, dynamic bundling, etc.

   We should do logical splitting of the code. For ex: in MMT website - one bundle for just flights, one for hotels and one for cab, etc.

   Suppose our current app not only delivers food, but also grocery delivery. Lets split it up.

   We will not load everything at once. We will load only what we need. Lazy Loading or On demand loading.
   lazy() given by react to load the data when we need it.

   `import Grocery from "./components/Grocery";` replace this with
   `const Grocery = lazy(() => import("./components/Grocery"));`

   Now if you go to the network tab in inspect element, you will see two .js files i.e two bundles.

   But now when you click Grocery, it will give an error. This is because, we are loading the component on demand. it takes some time to import and render it. But react is very fast, so it does not find the component and thats why throws an error.
   To resolve this we will use suspense.

   `{
  path: "/grocery",
  element: (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Grocery />
    </Suspense>
  ),
}`

   ![alt text](<Screenshot 2024-06-16 at 10.52.23 AM.png>)
