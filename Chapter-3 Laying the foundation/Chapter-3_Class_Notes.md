Polyfill:  Polfyfill means replacing code with the code that browser understands
  eg. if older version of JS doesn't understand map() function, or maybe an old version of browser doesn't understand promises , babel may write own custom implementation of map() so that code is able to execute

Babel performs the task of generating the polyfill, for any newer functions of JS, whose implementation is not understood by browser.

We can specify the script for start by specifiying the script in the package.json file.

npm run  (script name) is equivalent to calling npx (script name).

Babel doesn't automatically remove the console log's from the React app, in order to remove console log's, we need to setup a plugin called babel-plugin-transform-remove-console.

After installing the babel-plugin-transform-remove-console, we also need to configure it. Just installing a library in the code doesn't mean, it will function.

`Important point: Whenever a tag has multiple children, we always need to use keys for the children.`

Eg. if the tag structure is something like: 

`<div> <h1> </h1> <h2> </h2> </div>` (Here the div tag has h1 and h2 tags as children, so I should specify the keys for each of the two tags)

Why? Whenever React is updating the DOM, if we naively insert any other list item (let's say another h1 or h2 tag), then React gives bad performance because it has to spend a lot of time in figuring out the changes in the DOM tree i.e. the reconciliation algorithm's performance is not good if we don't use keys for the children, during re-render.

But if I use keys for the children, then the performance of the reconciliation algorithm is much better, and it takes lesser time to re-render the component.

SO, we'll pass the key as props to the children.

See this link: [Keys for children](https://legacy.reactjs.org/docs/reconciliation.html#recursing-on-children)


React.createElement gives us an object (How can we say that React.createElement is giving us an object? Try to console log the object returned by React.createElement,we can clearly see it is a object). This object is then mounted on the HTML DOM Tree.

So, the flow is `React.createElement gets converted to -> Javascript object gets converted to -> A node on the DOM Tree `.

`What is JSX and what is the need of JSX?` 

Let's say, I have a complex structure, which I need to code in React, maybe something like:

`<div><ul><li> Apple </li><li> Orange </li></ul></div>`

If I code this only using React.createElement, it will be a huge nested code, which is very difficult to write. So, this is the reason why JSX was created. JSX is a syntatic sugar over React.createElement.

JSX's full form is Javascript XML. (Javascript Extensible Markup Language)

The core philosophy behind React was to modify the HTML using Javascript in an efficient manner. (Earlier, before React, we used to update HTML using JS using document.getElementById and document.innerHTML etc, but React makes our code even more simpler and elegant.)


Surprising thing: In my App.js file, if I add a line of code like `const newHeading= <h1> Hi, hello! </h1>`, App.js gives no error!! Whereas if I try to write the same line of code someehere else, outside of this React app, like in browser or any other JS file, it gives a syntax error!!

`What exactly is happening?` 

A.  The React app is able to understand the JSX because of the superpowers of Babel. `Babel acts as a transpiler and converts the JSX code into React.createElement, which is then converted into Javascript object and which is then mounted on the DOM tree. (As discussed before)

Multiple lines JSX: In case, the JSX code is multiline, we need to add parantheses around the JSX code. (Why: So that the Javascript doesn't insert semicolons at the end, and break the JSX code that we have written) Visit this link: [Why multiline JSX requires parantheses](https://discuss.codecademy.com/t/why-do-we-need-parentheses-around-multi-line-jsx-expressions/392789) 


`Quiz question: Is JSX HTML inside Javascript?: 85% people said yes, but this is WRONG! JSX is just HTML like syntax, it is not HTML inside Javascript! `

