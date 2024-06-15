1. useEffect hook :
   When is useEffect called?

   If there is no dependency array then useEffect is called after every render of the component.

   but if the dependency array exists it changes the behaviour of the hook.

   If dependency array is empty then useEffect is called only once when the component is mounted - initial render.

   If dependency array is not empty then useEffect is called whenever the dependency array changes.

2. Always call hooks inside and on the top of component. Never use hooks inside loops or conditionals or functions.

3. Routes inside React - react-router-dom is a JS library
   use createBrowserRouter from react-router-dom

4. Write rafce in vscode to get basic template for react component

5. Create children routes to fix some components on all routes
   Outlet from react-router-dom is used to render children routes and we can reuse header and footer in all routes

6. Never use anchor tag in react to route to other pages. It will reload the whole page everytime.

You can navigate to other page without reloading the whole page, it just refreshes the component -- using Link from react-router-dom

7. Two types of routing in webapps:

   - Client side routing: No network call, components are refreshed
   - Server side routing: make a network call and the page is received from the server

8. Dynamic route:
   dynamic route to display meny of different restaurants on a new page
   `/restaurants/<id>`
