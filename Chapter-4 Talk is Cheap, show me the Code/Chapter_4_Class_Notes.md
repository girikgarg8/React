There are two syntaxes to create React element, one of them is to use the React.createElement API, the other one is to wrap the JSX code in curly braces. 

for example,consider the code: `const element = <h1>Hello, world!</h1>;`, the element variable now contains a React element. 

Some things to know, before we start coding.

Q1: Is using JSX compulsory in React?

A: No, we can use React elements. In fact, JSX behind the scenes, uses React elements.

`Q2: Is using ES6 compulsory for React?`

A2: The answer to this question, is also NO. React is a library, which doesn't force conditions on us in order to use it.

== Let's start with the coding part NOW!!! ==

Before writing code, it is always necessary to do planning, so that we are not confused on what to code.

Low level design of Food Villa App: ![Low_level_of_FoodVilla_App](LLD_OF_FOODVILLA_APP.jpg)

Important point: Any piece of JSX can only have one parent tag, so either we can wrap the siblings in a single div or I can instead use React fragment.

Disadvantage of using div to wrap the siblings is that I have an extra div in the DOM tree, (go see it now!), which I don't want.

So, we can use React fragments instead of using a separate div. The syntax for using React fragment is <React.fragment> {Intermediate code} </React.fragment>

There's also another syntax for React.Fragment, which is the empty tag <>, it alspo signifies the React.Fragment element behind the scenes. (**This is very very important**)

Advantage and disadvantage of using React.fragment over a div:

1) Advantage: Using React.fragment makes the DOM less cluttered, and also gives performance improvement to the React App.

2) Disadvantage: As we use the empty tag <> or React.fragment, we cannot give it styling or pass props to it. If we wish to use styling, using div is a better choice. 

Inline styling in HTML vs Inline styling in React 

In HTML, I can do the inline styling with code like: `<h1 style="color:blue;">A Blue Heading</h1>`. See this link: [W3 playground for inline CSS](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline)

 However, I cannot write the same syntax in React, to do styling in React, I need to specify the style with the help of a Javascript object (Javascript object is nothing but a key-value pair in Javascript) (because React is a javascript library). 

Syntax to do inline styling in React is:

```
const styleObj= {
    border: "1px solid red"
}
```

and then use it like 

``` 
const Heading=()=>{
    return (
        <div style={styleObj} > <h1> First Heading </h1> <h1> Second Heading </h1> </div> 
    )
} 
```

Sometimes, people also write the style object directly, so no need to get scared of the code:

```
const Heading=()=>{
    return (
        <div style={styleObj} > <h1> First Heading </h1> <h1> Second Heading </h1> </div> 
    )
} 
```

We can also use libraries like Chakra UI, Material UI, Tailwind CSS too instead of using inline CSS. We'll be using Tailwind CSS in later chapters.

Beginning with the coding: Desiging the restaurant Card

The first step, should be, to create a restaurant code with hardcoded data, once we are able to succeed with that, we can then go for the data fetched from API.
See the `dummyRestaurantCard` functional component