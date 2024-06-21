import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutClass = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Default User");
  useEffect(() => {
    const data = {
      name: "Nikita",
    };
    setLoggedInUser(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: loggedInUser, setLoggedInUser }}
      >
        <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
