1. Higher Order Components
   It takes a component and returns another component. It adds extra features and enhances the existing component. But at the end, its just a normal JS function.

   In our food app - we are going to create features of promoted labels, free delivery, etc.
   Add promoted label to the restaurant if it is promoted
   HOC : Input: RestaurantCard, Output: RestaurantCardWithPromotedLabel

2. Controlled and Uncontrolled Components
   Important part of any UI application is to understand and manage data. The data layer is very important. The UI layer is powered by the data layer.

   New Feature: Items in Menu we currently have only recommended items. We can add full menu and create different sections.

   if one accordion is open, all other accordions should be closed.
   ` {categories.map((category) => (
     <li
       key={category.card.card.title}
       className="w-3/4 border p-2 m-2 shadow-xl hover:scale-y-105 hover:bg-slate-100 dark:hover:bg-slate-900"
     >
       {/* This is now a controlled component after adding open */}
       <MenuCategory category={category.card.card} showItems={false} />
     </li>
   ))}`

3. Lifting State Up

4. Props Drilling : Passing data from one component to another component.
   Lots of components are nested in each other. We need to pass data from one component to another component. React is a one way data flow. This is an issue. We should avoid prop drilling. One-two levels prop-drilling is okay.

   We need to have some kind of global state/data. Called as React Context API.

5. Context API
   Example of data that we need at all levels of our application - Loggedin user, theme, cart items, etc. We need it to be accessible in multiple components. We can keep this data state in a central store.

   how to create a context? - `useContext`

   Use context only for data that is used in multiple components. Not for data that is used in single component.

Update UserContext value using useContextProvider

You can wrap the entire application with the context provider.

You can also wrap a specific component with the context provider.

You can also create nested context providers.

Context is also available in lazy loaded components.
Use userContext.Consumer in class based components.
