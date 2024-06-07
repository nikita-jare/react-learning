const h1 = React.createElement('h1', {id: 'heading'}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1);

//Create nested elements using react.createElement
// <div id="parent">
//     <div id="child">
//         <h1 id="heading">I am a h1 tag from nested parent</h1>
//          <h1 id="heading">I am a h1 tag from nested parent</h1>
//     </div>
// </div>
/*const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'},
        [   React.createElement('h1', {id: 'heading1'}, "Hello World from React!"),
            React.createElement('h2', {id: 'heading2'}, "I am a h2 tag from nested parent")
        ]
    ),
);*/


//Create nested elements with multiple children and siblings
    // <div id="parent">
    //     <div id="child">
    //         <h1 id="heading1">I am a h1 tag from nested child 1</h1>
    //         <h2 id="heading2">I am a h2 tag from nested child 1</h2>
    //     </div>
    //     <div id="child2">
    //         <h1 id="heading1">I am a h1 tag from nested child 2</h1>
    //         <h2 id="heading2">I am a h2 tag from nested child 2</h2>
    //     </div>
    // </div>

const parent = React.createElement('div', {id: 'parent'},
    [
        React.createElement('div', {id: 'child'},
            [   
                React.createElement('h1', {id: 'heading'}, "Hello World from React child 1!"),
                React.createElement('h2', {id: 'heading2'}, "I am a h1 tag from nested child 1"),
                React.createElement('h2', {id: 'heading2'}, "I am a h1 tag from nested child 1")
            ]
        ),
        React.createElement('div', {id: 'child2'},
            [   React.createElement('h1', {id: 'heading'}, "Hello World from React child 2!"),
                React.createElement('h2', {id: 'heading2'}, "I am a h1 tag from nested child 2"),
                React.createElement('h2', {id: 'heading2'}, "I am a h2 tag from nested child 2")
            ]
        )
    ]
)
//check how parent is created and what it contains
console.log(parent);
//render the parent
root.render(parent);

//but the above nested rendering looks so complicated in React than HTML  
//this is why there is something called JSX that exists
//but this shows that React can be written without JSX  
