###ToDo: Add update API call as user scrolls to display more restaurants

1. Monolithic Architecture

- Earlier all apps were developed using Monolithic Architecture
- Everything in the same project - APIs, notification, database, UI code, authentication, etc. all the frontend and backend in same projet

2. Microservice Architecture

- Different services for different functionalities
- This is know as seperation of concerns i.e single responsibility principle
- One advantage is you can have different tech stack for different services
- How do these services interact with each other?
  They make a call to each other.
- Each service is deployed independently. They run on their own specific ports.
  All these ports can be mapped to a single domain.

3. How UI apps fetch data from the backend?

- API calls -
  1. as soon as page loads, make a call to backend and wait for data and then render the UI.
  2. as soon as page loads, we will just quickly render the skeleton UI. And then as soon as data comes in, we will re-render the UI. (In react, we always use this approach) - its a better UX

4. useEffect hook in React:
   `useEffect() takes two arguments - 1. callback function, 2. dependency array`

   `useEffect(callback, [dependency array])`
   useEffect(() => {}, [])

   This callback function will be executed as soon as the component mounts or updates.

5. Our browser block api call from one browser to another:
   `Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows resources on one domain to be requested from another domain.

How to by-pass this cors policy?

6. Shimmer UI -> Skeleton UI -> Loaded UI
   Shimmer UI is a UI component that displays a loading state. Skeleton UI is a UI component that displays a placeholder state. Loaded UI is a UI component that displays the actual data.

7. In useState if the variable is const, how is it updating the value of the variable in the component when it changes?

- Because it re-renders the whole component and not just the variable

8. When you add the search box - add the state variable as value, but it does not take any input from the user.
   `const [searchInput, setSearchInput] = useState(" ");`
   ` <input className="search-input" type="text" value={searchInput} />`

We need to update the searchInput state variable as the user types in the input. Right now the searchInput is empty.

`<input className="search-input" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />`

Now whenever we start typing, one character after another React re-renders the while component that many times. But it is only updating the input value inside the input field by finding difference between the old and updated virtual DOM.
