Q. Why do we create a folder named src in the project structure?

A. It's not a compulsion from the React library to use the src folder. However, using src folder is a common industry practice to keep the project structure organised, and so that finding files becomes easier. So, we can move all the React code into the src folder for better project structure and modularity approach.

React file structure: Read it from the documentation. 

[React File structure](https://legacy.reactjs.org/docs/faq-structure.html)

There can be two broad ways (not the only two ways), tpo define file structure in React:

1) Group by file type: Group similar kinds of files together, for example all the components in one folder, all the mocks in one folder etc. This is what we'll be going ahead with, in the Namaste React course.

2) Grouping by feature, like for a header feature, the header.html, headr.css and header.js, header.test.js files should all be placed in the same folder.
 
 As the official documentation says, "If you’re just starting a project, don’t spend more than five minutes on choosing a file structure. Pick any of the above approaches (or come up with your own) and start writing code! You’ll likely want to rethink it anyway after you’ve written some real code.", so don't fret much about it xD.

There can be two types of imports in React, default import (export) and named import (export).

1. Default import (export): Only one component or function or class etc can be default exported from a Javascript file. Though one thing to note here is that, we can bundle different functions or classes into a single object, but only one entity as a whole can be returned. Let's consider an example, for better understanding. 

Let's say a component Header is being default exported from Header.Js file and imported in the App.js file.

In order to default import a component or class or function, we can use any name in the import statement in App.js, so I can import Girik from Header.js file, and I don't need to use curly braces to do the import.

2. Named import (export): The same function name or component etc has to be used in the import name. Again, let's consider the same example: Let's say a component Header is being named exported from Header.Js file and imported in the App.js file.

To import it, the import syntax would be import {HeaderComponent} from Header.js

Important point: The syntax import {HeaderComponent} from Header.js may look like destructuring an object, but it is not destructuring an object.

How can I say that the import {Title} from 'Header.js' is not destructuring an object? Let's prove this by contradiction:

Try the code below in App.js file :

```
import Obj from Header
Obj.Title or const {Title}=Obj
```
, these lines of code won't work, thus we prove that a named import is not object destructuring, though the syntax looks like it.

However, there is an alternative syntax, if we want to import eveeything from a component (however this is rarely used in practice, still should know): I can write syntax like

```import * as Obj from Header.js
   const {Title}=Obj;
```

Important point: The above is a syntax to only get the named imports, we can't get default exports by following this syntax of global Object.

There's a debate in the React community, some people prefer to use .jsx extension for the components, so for example, instead of using the Header.js file, I can use the Header.jsx filename too. Using .jsx extension may break the code for some external libraries, but for most pruposes it will work. In this course, we'll go for .js convention, but .jsx can also be used.