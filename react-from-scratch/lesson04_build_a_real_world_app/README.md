## Food Ordering App

1. First thing is to Plan :

- You should know what you need
  1. Design a mock, wireframe
  2. What components will my app have

2. Config driven UI
   different offers carousel according to the location

Any UI has - UI layer and Data Layer
Put all your images on CDN.

Good code is to destructure data in props.
Whenever you are mapping - you have to always give a key
Why do we need keys?

- When we have lot of data rendered from multiple components i.e when there are many components at the same level, they need to have unique ids. Suppose there are no IDs, if a new restraunt comes, then DOM will re-render all the components. Whereas with keys, we can have a unique ID and DOM will only re-render the component that has been modified and has that unique ID.
- Some people use index of map as the key.

```{restaurantData.map((re, index) => {
          return <RestaurantCard key={index} resData={res} />;
        })}
```

But React's official documentation recommends never using index as a key. It wont complain if you do, but its not recommended.
Why?

1. Performance Issues due to unnecessary re-renders.
   suppose we add the new item at the beginning of the list. Now, the key of remaining list items also changes, which makes React re-render all the elements again, instead of just adding a new item at the end. This can be avoided if we use some unique id as a key rather than index.
2. Issues in data mapping in case list items are sorted, filtered, or deleted.

3. Lack of Stability: Array indexes can change when items are inserted, removed, or re-ordered. If the index of an item changes, React will consider it as a different component, leading to unnecessary re-renders and potentially causing inconsistencies in your application’s state.

4. Inefficient Reconciliation: React uses the key prop to efficiently reconcile the virtual DOM and update only the necessary components when the state changes. Using array indexes as keys can make this process less efficient since React needs to traverse the entire list to determine if any item has been added, removed, or re-ordered. This can impact performance, especially for large lists.

5. Identifying Unique Items: Array indexes may not provide enough information to uniquely identify each item in the list. In scenarios where items have similar or identical data, using indexes as keys can result in incorrect behavior. For example, if you have a list of articles with duplicate titles, React may not be able to differentiate between them if indexes are used as keys.

So, not using keys << using index as keys << unique ids as keys
