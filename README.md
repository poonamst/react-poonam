### This repository is a React project that helps demonstrate the usage of the react-axe plugin. 

Reference - https://github.com/dequelabs/react-axe

## Steps to install the repository and get it up and running.

1. git clone <https://github.intuit.com/Accessibility-Automation/react-linters.git>
2. npm install
3. npm run 



## About react-axe

One of the things you must be wondering is how is this different from other linters like eslint-jsx-a11y and react-a11y?
Here is what the author has to say - "The main difference is that react-axe tests the accessibility of the rendered DOM. This is important because many accessibility issues exist at the intersection of the DOM and the CSS and unless you have a fully rendered DOM, you will get two sorts of inaccuracies:

False negatives because of lacking information. Example is in order to test color contrast you must know the foreground and background colors, and
False positives because the element being evaluated is not in its final state and the information to communicate this to the testing algorithm is not available. Example is an inert piece of code that will be augmented once it becomes active.
If you have nice clean code, number 2 will be negligent but number 1 will always be a concern." 

Here are the steps that you would need to do in order to install the plugin in an existing project

1. npm install --save-dev react-axe
2. In our project though I have already added it as a dependency in the packgae.json file and hence when you run npm install you should have it available directly.
3. You need to initialize the component by using this piece of code in every file you want to be validated.

```
var React = require('react');
var ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
```

These are the very basic steps that you need to do to get going. Apart from these there is a lot more you can customize in this plugin. Kindly refer the reference mentioned above to know more optional details.

Here is a glimpse of the warnings that you can see when you run npm start. Note you shall also see some warnings from the jsx-a11y plugin since it comes baked in with react projects now-a-days.

![alt text]()


Credits
-------
* https://github.com/dequelabs/react-axe - reac-axe documentation
