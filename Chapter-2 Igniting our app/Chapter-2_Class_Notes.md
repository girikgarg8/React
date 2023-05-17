Q. What do we need to make our React app production ready, compared to the static page which we prepared in first class?

A. There are several things which we need to do, like:
    1. Minifying the files
    2. Removing the console log's
    3. Optimizing the performance of app by using bundlers to compress all the React code into a single file

Here, we are creating our own create-react-app, and understanding what happens behing the scene when we use create-react-app as an abstraction.

Different bundlers: Webpack, Vite, Parcel

create-react-app internally uses webpack as the bundler. 

In this tutorial, we'll be using parcel as the bundler.

Now, parcel is a package, and so we need to install it using npm.

Alternative to npm is yarn, but we are going ahead with using npm.

There's no official name for npm, NPM doesn't stand for Node Package Manager.

In order to use NPM, we need to use npm init, and enter the various details as required.

Q. What is NPM, and why do we need it inside our React App?

A.  NPM helps us to manage the dependencies in out React App. Maven:Java :: NPM:React
    We need NPM in our React app so that we can use various packages (superpowers :D) which we need in our React app, such as bundlers, minifiers etc.

Q. How do we ignite our app?

A.  By installing parcel bundler, it is a zero coniguration tool. It has similar features which Vite or Webpack has to offer.

We'll install parcel as a dev-dependency in our project, using the command `npm install -D parcel ` or `npm install --save-dev parcel`, both of them indicate that parcel is being installed as a dev-dependency.

Q. What are dev-dependencies?

A.  Dev-dependencies are those dependencies which are required only in the development environment (the developer's machine), and not the production environment. Examples of dev-dependencies include loggers, testing libraries etc

dev-dependencies are specified in the package.json file (not in the package-lock.json file)

Q. What does caret (^) and tilde (~) sign represent in the version of packages in package.json file?


Q. What is the difference between the package.json and package-lock.json files? 

A. Refer this article: [Difference Between Package.json and package-lock.json files](https://dillionmegida.com/p/package-vs-package-lock-json/)





