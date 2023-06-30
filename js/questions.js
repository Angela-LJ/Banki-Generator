
const questionsAnswers = {
  behavorial: [
    {
    }
  ],
  html: [
    {
      "question": "What does a doctype do?",
      "answer": [
        "Instructions to the browser about what version of HTML the webpage is written in, ensuring the web page is parsed the same way across web browsers.",
        "Use: It's the first line of code in the HTML document",
        "Example: For an HTML5 document the tag would be &lt;!DOCTYPE html/&gt;"
      ]
    },
    {
      "question": "How do you serve a page with content in multiple languages?",
      "answer": [
        "By setting the lang attributes on the various elements within the page.",
        "Use: The lang attribute can be used on various elements (typically html, p, li...)",
        "Example: You can set the whole site as being english by setting the html element &lt;html lang='en'/&gt; Or you could set a paragraph as spanish with &lt;p lang='es'/&gt;"
      ]
    },
    {
      "question": "What kinds of things must you be wary of when designing or developing for multilingual sites?",
      "answer": [
        "Including the lang attribute", 
        "Allowing users to change the language", 
        "Minimize text in raster based images",
        "Text overflow when translated", 
        "How colors are perceived",
        "Date and currency formats", 
        "Language reading direction",
        "Don't concatenate translated strings"
      ]
    },
    {
      "question": "What are data- attributes good for?",
      "answer": [
        "They store data private to the page or application.",
        "Use: They were often used for storing extra data in the DOM, but are generally discouraged now.",
        "Example: The exception is to add a hook for end to end testing frameworks like Selenium."
      ]
    },
    {
      "question": "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
      "answer": [
        "Semantics:, Describe the content", 
        "Connectivity: Communicate with the server", 
        "Offline and storage: Store data client-side", 
        "Multimedia: Make audio and video first-class citizens", 
        "Graphics and effects: Diverse range of presentation options", 
        "Performance and integration: Speed optimization", 
        "Device access: Various input and output devices", 
        "Styling: More sophisticated themes"
      ]
    },
    {
      "question": "Describe the difference between a cookie, sessionStorage and localStorage.",
      "answer": [
        "Cookies can be initiated by the server, have a manually set expiration date, are small file size, and are sent to the server with HTTP request. Local and session storage are both initiated by the client, are a relatively large file, and aren't sent to the server. The main difference between local and session storage is that local storage will persist forever until cleared manually.",
        "Use:  They are all used for client side storage of strings in key-value pairs."
      ]
    },
    {
      "question": "Describe the difference between &lt;script/&gt;, &lt;script async/&gt; and &lt;script defer/&gt;.",
      "answer": [
        "&lt;script/&gt; HTML parsing is blocked, script is fetched and executed immediately",
        "&lt;script async/&gt; script fetched in parallel to HTML parsing and executed as soon as it is available",
        "&lt;script defer/&gt; script fetched in parallel to HTML parsing and executed when the page has finished parsing.",
        "Use async when the script is independent of any other scripts on the page",
        "defer is useful when you need to make sure the HTML is fully parsed before executing",
        "Example: async could be used for analytics scripts",
        "A deferred script must not contain document.write"
      ]
    },
    {
      "question": "Why is it generally a good idea to position CSS &lt;link/&gt;s within &lt;head/&gt; and JS &lt;script/&gt;s just before &lt;/body/&gt;? Do you know any exceptions?",
      "answer": [
        "Putting &lt;link/&gt;s in the &lt;head/&gt; allows for quick 'first meaningful paint'. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first. Exceptions: When your script contains document.write, or if you need scripts to run on page load, it may be beneficial to split them out from your main script and place them in the head.",
        "Exceptions: When your script contains document.write, however, it isn't considered good practice to use document.write. Also, if you need scripts to run on page load it may be beneficial to split them out from your main script and place them in the head"
      ]
    },
    {
      "question": "What is progressive rendering?",
      "answer": [
        "Techniques used to improve the performance of a webpage to render content for display as quickly as possible",
        "Use: Improving perceived load time",
        "Example: Lazy loading of images, Prioritizing visible content (or above-the-fold rendering) and Async HTML fragments"
      ]
    },
    {
      "question": "Why would you use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
      "answer": [
        "When you want to serve different images to users depending on their device display width. The browser evaluates the content of the srcset attribute to determine which image to download based on the device's resolution capabilities",
        "Use: Sending lower resolution to limit data waste and increase performance or sending larger images to a higher resolution display to enhance the UX.",
        "Example: &lt;img srcset='small.jpg 500w, medium.jpg 1000w, large.jpg 2000w' src='...' alt=''/&gt;"
      ]
    }
  ],
  css: [
    {
      "question": "What is CSS selector specificity and how does it work?",
      "answer": [
        "Explanation: The means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.",
        "Use: Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector.",
        "Example: A selector of #id .class tag would have 111 points as id's count for 100, classes for 10 and tags 1."
      ]
    },
    {
      "question": "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
      "answer": [
        "Explanation: 'Normalize' alters the default styles of various browsers to match each other. 'Reset' will remove the browsers default styles so you are starting from scratch.",
        "Use: Applying one or the other is done to try and make websites visually consistent across different browsers. I prefer to use a mix of both. Starting with the normalize to keep it concise and then add some elements like anchors and headers with a reset. Going full 'nuke' is often unnecessary and creates a larger, harder to debug file."
      ]
    },
    {
      "question": "Describe floats and how they work.",
      "answer": [
        "Explanation: Floats are a positioning property where the element that is floated will be removed from the flow of the page and affect the elements around it. A parent element will collapse to zero height if it contains only floated elements, to fix this it was common to use a .clearfix hack.",
        "Use: It was used prior to flex and grid to layout pages in a more flexible manner.",
        "Example: You could float three elements left and give them widths of 33% to create three even-width columns."
      ]
    },
    {
      "question": "Describe z-index and how stacking context is formed.",
      "answer": [
        "Explanation: The z-index property in CSS controls the vertical stacking order of elements that overlap. A stacking context is an element that contains a set of layers. The z-index values of its children are set relative to that element rather than to the document root. Layers outside of that context can't sit between layers within it."
      ]
    },
    {
      "question": "Describe BFC (Block Formatting Context) and how it works.",
      "answer": [
        "Explanation: A BFC is an HTML box that satisfies at least one of the following conditions:",
        "The value of float is not none.",
        "The value of position is neither static nor relative.",
        "The value of display is table-cell, table-caption, inline-block, flex, or inline-flex, grid, or inline-grid.",
        "The value of overflow is not visible.",
        "Use: Knowing how to establish a block formatting context is important because, without doing so, the containing box will not contain floated children.",
        "Example: Without forming a BFC, you could have content of a float that is taller than the content alongside it. The border of the parent element could then 'cut-through' the floated box."
      ]
    },
    {
      "question": "What are the various clearing techniques, and which is appropriate for what context?",
      "answer": [
        "Explanation:",
        "  - Empty div method",
        "  - Clearfix method",
        "  - overflow: auto or overflow: hidden method",
        "Use: .clearfix utility class is probably the best method to use in general as it doesn't take long to construct and doesn't suffer from clipping issues like the overflow methods."
      ]
    },
    {
      "question": "Explain CSS sprites, and how you would implement them on a page or site.",
      "answer": [
        "Explanation: CSS Sprites are a means of combining multiple images into a single image file for use on a website to help with performance.",
        "Use: Browsers limit the number of concurrent requests a site can make, so leading several images with a single HTTP request helps increase page load speed.",
        "Example: An example would be combining press logos for Wired, NY Times, and The Washington Post into a single image file. Then on the site, with CSS, placing the file three times and moving/cropping it to display the applicable logo."
      ]
    },
    {
      "question": "How would you approach fixing browser-specific styling issues?",
      "answer": [
        "Explanation: There are a handful of ways to solve the issue, such as browser-specific stylesheets, using a library like Bootstrap, etc. My preference would be to use a combination of normalize/reset style sheets. I'd rather use a combination as going full nuke with a reset isn't necessary and makes it a little harder to debug."
      ]
    },
    {
      "question": "How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?",
      "answer": [
          "Explanation: My preference is to try and build lightweight simple websites that incorporate progressive enhancement.",
          "Use: Build the base level of HTML/CSS with semantics and accessibility in the forefront you get a site that works well on feature-constrained browsers. I would then add any CSS on JavaScript enhancements deliberately, checking caniuse.com and using vendor prefixs and polyfills if required.",
          "Example: Instead of filling the site with &lt;div/&gt; using more semantically appropriate tags like &lt;section/&gt; &lt;aside/&gt; &lt;article/&gt; &lt;header/&gt; &lt;footer/&gt;"
      ]
    },
    {
      "question": "What are the different ways to visually hide content (and make it available only for screen readers)?",
      "answer": [
          "Explanation: Make the element have a size of zero width: 0; height: 0",
          "Use: I typically absolutely position the element off screen as it covers the most scenarios."
      ]
    },
    {
      "question": "Have you ever used a grid system, and if so, what do you prefer?",
      "answer": [
          "Explanation: I typically use a 12 column 'grid' system when doing my initial web layout.",
          "Use: I find that it works well for laying out the average website and giving the site some visual consistency. When if comes to coding the site I find it helps speed up the layout immensely."
      ]
    },
    {
      "question": "Have you used or implemented media queries or mobile specific layouts/CSS?",
      "answer": [
          "Explanation: I use them quite frequently.",
          "Use: I use them on every website and typically build mobile first. The breakpoints and media queries are then used to convert the layout from mobile to desktop.",
          "Example: Some examples is changing a bunch of cards from being a single column stack on mobile to a three column layout on desktop."
      ]
    },
    {
      "question": "Are you familiar with styling SVG?",
      "answer": [
          "Explanation: Yes there are a few ways to style them including inline CSS, embedded CSS or an external style sheet. Basic coloring can be done with the fill and stroke attributes.",
          "Example: &lt;rect width=\"100\" height=\"100\" stroke=\"blue\" fill=\"purple\" /&gt;"
      ]
    },
    {
      "question": "Can you give an example of an @media property other than screen?",
      "answer": [
          "Explanation: There are four types: all - for all media type devices, print - for printers, speech - for screenreaders that 'reads' the page out loud, screen - for computer screens, tablets, smartphones, etc.",
          "Example: @media print { body { color: black; } }"
      ]
    },
    {
      "question": "What are two 'gotchas' for writing efficient CSS?",
      "answer": [
          "Explanation: Browsers match selectors from rightmost (key selector) to left. The shorter the length of the chain the faster the browser can find a match. Avoid using tag and universal selectors for your key selector.",
          "Use: Avoid using styles that trigger reflow."
      ]
    },
    {
      "question": "What are the advantages/disadvantages of using CSS preprocessors?",
      "answer": [
        "Explanation: Some advantages would be:",
        "The code is easier to maintain",
        "More efficient to write with nested selectors",
        "Mixins can be used for repeated styles",
        "Ability to split into different files",
        "Disadvantages would be:",
        "Additional tooling is required",
        "You aren't able to use the most current features of standard CSS"
      ]
    },
    {
      "question": "Describe what you like and dislike about the CSS preprocessors you have used.",
      "answer": [
        "Explanation: I've found that being able to split files and nest selectors is the most useful. A couple of downsides are that debugging is a little more difficult and having to wait for compilation."
      ]
    },
    {
      "question": "How would you implement a web design comp that uses non-standard fonts?",
      "answer": [
        "Explanation: Use @font-face and define font-family"
      ]
    },
    {
      "question": "Explain how a browser determines what elements match a CSS selector.",
      "answer": [
        "Explanation: Browsers match selectors from rightmost (key selector) to left.",
        "Example: For example with this selector p span, browsers firstly find all the &lt;span/&gt; elements and traverse up its parent all the way up to the root to find the &lt;p/&gt; element. For a particular &lt;span/&gt;, as soon as it finds a &lt;p/&gt;, it knows that the &lt;span/&gt; matches and can stop its matching."
      ]
    },
    {
      "question": "Describe pseudo-elements and discuss what they are used for.",
      "answer": [
        "Explanation & Use: A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s)",
        "Example: ::first-line can be used to change the font of the first line of a paragraph"
      ]
    },
    {
      "question": "Explain your understanding of the box model and how you would tell the browser, through CSS, to render your layout in different box models.",
      "answer": [
        "Explanation: The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area and optional surrounding padding, border, and margin areas.",
        "Use: The standard box model calculates box size by taking a specified height and width, then adding the padding and border. However to change to the alternative box model you would set box-sizing: border-box which allows you to set the box size with height and width."
      ]
    },
    {
      "question": "What does * { box-sizing: border-box; } do? What are its advantages?",
      "answer": [
        "Explanation & Use: It allows you to specify the actual width and height of a box using the width and height properties. This allows you to input true sizes and not have to do any math to take padding and borders into account."
      ]
    },
    {
      "question": "What is the CSS display property and can you give a few examples of its use?",
      "answer": [
        "Explanation & Use: The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.",
        "Example: display: block would make the element consume the whole line width. display: grid would allow you to layout children in a grid system. If you wanted three columns you could pair it with something like grid-template-columns: 1fr 1fr 1fr"
      ]
    },
    {
      "question": "What's the difference between inline and inline-block?",
      "answer": [
        "Explanation:",
        "inline",
        "CANNOT specify width and height",
        "Can only set margin and padding for the sides, not top and bottom.",
        "inline-block",
        "CAN specify width and height",
        "Can set margin and padding on all sides"
      ]
    },
    {
      "question": "What's the difference between a relative, fixed, absolute and static positioned element?",
      "answer": [
        "Explanation:",
        "Relative - Position is relative to its original static position. Original space on the page is preserved.",
        "Fixed - Element removed from page flow and placed in a spot relative to the viewport. It won't move when scrolled.",
        "Absolute - Element removed from page flow and positioned relative to its closest \"positioned\" ancestor. Original space on the page is not preserved",
        "Static - The default position. top, right, bottom, left and z-index properties do not apply."
      ]
    },
    {
      "question": "What existing CSS frameworks have you used locally, or in production? How would you change/improve them?",
      "answer": [
        "Bootstrap - It takes a while to get the latest CSS features added. Your sites end up looking very similar to others.",
        "Tailwind - The HTML can feel very cluttered. Reusing styles is a bit clunky."
      ]
    },
    {
      "question": "Have you played around with the new CSS Flexbox or Grid specs?",
      "answer": [
        "Explanation: I have used both flexbox and grid and like to employ both of them.",
        "Use: I find grid to be useful for the top-level page layout and any elements which have a typical grid layout. I prefer using flexbox for sections and other elements that don't need a rigid grid alignment.",
        "Example: If I had something like a tic-tac-toe board, I would use grid as it is easy to get the boxes to align and be the same size. If I had some sort of information card with multiple pieces of information, I would likely use flexbox."
      ]
    },
    {
      "question": "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?",
      "answer": [
        "Explanation: Making a website responsive means that some elements will respond by adapting their size or other functionality according to the device's screen size. A mobile-first strategy is also responsive, however, it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later.",
        "Use: You would use media queries to make the above changes at certain screen size breakpoints."
      ]
    },
    {
      "question": "How is responsive design different from adaptive design?",
      "answer": "Explanation: Both responsive and adaptive design attempt to optimize the user experience across different devices. Use: Responsive design works on the principle of flexibility - a single fluid website that can look good on any device. Instead of one flexible design, adaptive design detects the device then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. I believe responsive is the best approach to provide a great experience for all users."
    },
    {
      "question": "Have you ever worked with retina graphics? If so, when and what techniques did you use?",
      "answer": [
        "Explanation: Retina is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1. In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using highest resolution images will have an impact on page load times.", 
        "Use: To overcome this problem, we can use responsive images, as specified in HTML5 with the srcset attribute. Example: &lt;img src=\"/images/test-1600.jpg\" srcset=\"/images/test-400.jpg 400w, /images/test-800.jpg 800w, /images/test-1200.jpg 1200w\"//&gt;"
      ]
    },
    {
      "question": "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
      "answer": "Explanation: translate() is a value of CSS transform. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. translate() would be the more efficient solution with shorter paint times. If you do not want the original space of the element preserved you would want to use absolute positioning."
    }
  ],
  javascript: [
    {
      "question": "Explain event delegation",
      "answer": [
        "Explanation: Setting an event listener on a parent element and having events that happen on a child element bubble up to the parent.",
        "Use: When you want some code to run when the user interacts with any one of a large number of child elements.",
        "Example:\n\n&lt;div id=\"container\"/&gt;\n  &lt;div class=\"tile\"/&gt;&lt;/div/&gt;\n&lt;/div/&gt;\n&lt;script/&gt;\n  container.addEventListener('click', (event) =/&gt; (event.target.style.backgroundColor = bgChange()));\n&lt;/script/&gt;"
      ]
    },
    {
      "question": "Explain how this works in JavaScript",
      "answer": [
        "Explanation: this references an object. When inside of a constructor function or class it will reference the object on instantiation.",
        "Use: It is used to assign properties and values to an object on instantiation.",
        "Example:\n\nclass MyThing {\n  constructor(passThisIn) {\n    this.passThisIn = passThisIn;\n  }\n}"
      ]
    },
    {
      "question": "Explain how prototypal inheritance works",
      "answer": [
        "Explanation: All JavaScript objects have a __proto__ property that is a reference to another object, which is called the object's \"prototype\". If a property is accessed on an object, but not found, the JavaScript engine check's that object prototype. If again it's not found, it checks that prototype's prototype on up the chain until it reaches the top of the chain.",
        "Use: It can help reduce redundant code.",
        "Example:\n\nfunction Parent() {\n  this.name = 'Parent';\n}\nParent.prototype.greet = function () {\n  console.log('Hello from ' + Parent.name);\n};\nconst child = Object.create(Parent.prototype);\nchild.cry = function () {\n  console.log('waaaaaahhhh!');\n};\nchild.cry();\n// waaaaaahhhh!\nchild.greet();\n// hello from Parent\nconsole.log(child.constructor);\n// ƒ Parent() {\n// this.name = 'Parent';\n// }\nconsole.log(child.constructor.name);\n// 'Parent'"
      ]
    },
    {
      "question": "What do you think of AMD vs CommonJS?",
      "answer": [
        "Explanation: I would actually prefer to use ESM (ECMAScript Modules) due to its simple syntax and async nature. Historically CommonJS was used in the back end and runs synchronous and AMD was used in the front end and runs asynchronous.",
        "Use: CJS has been used in Node.js for a while, but the current version of Node now allows the use of ESM."
      ]
    },
    {
      "question": "Explain why the following doesn't work as an IIFE: function foo(){ }(); What needs to be changed to properly make it an IIFE?",
      "answer": [
        "Explanation: The parser reads it as two separate statements. First, the function declaration function foo(){ } and then a blank function call attempt (); The best way to fix this would be to add another set of parentheses wrapping the function declaration (function foo(){ })(). This changes it from a function declaration to a function expression."
      ]
    },
    {
      "question": "What's the difference between a variable that is null, undefined, or undeclared? How would you go about checking for any of these states?",
      "answer": [
        "Explanation:",
        "null: the value is intentionally absent (points to nothing in memory).",
        "undefined: not yet assigned a value or not yet declared.",
        "undeclared: improperly declared without let/const/var",
        "Use: null can be used to assign the primitive value of null to a variable. undeclared throws an error whereas null and undefined can be checked with a conditional",
        "Example: null and undefined can be checked using strict equality ===. Undeclared will throw its own error, so you could use try...catch"
      ]
    },
    {
      "question": "What is a closure, and how/why would you use one?",
      "answer": [
        "Explanation: Closure allows you to use an outer function’s scope (go into a parent, grandparent function, etc.) from within an inner function. In JavaScript, a closure is created every time a function is created.",
        "Use: It allows you to combine data with the function that will operate on that data. It is similar to OOP.",
        "Example:",
        "function init() {",
        "  var name = 'Mozilla'; // name is a local variable created by init",
        "  function displayName() {",
        "    // displayName() is the inner function, a closure",
        "    alert(name); // use variable declared in the parent function",
        "  }",
        "  displayName();",
        "}",
        "init();"
      ]
    },
    {
      "question": "Can you describe the main difference between a .forEach() loop and a .map() loop and why you would pick one versus the other?",
      "answer": [
        "Explanation: .forEach() executes a callback function on each element, but does not return a value. .map() executes a callback function on each element and 'maps' the result to a new array. The new array is returned.",
        "Use: If you need the result and don't want to mutate the original array, use map. If you only need to iterate over the array, then forEach can be used.",
        "Example: .forEach():",
        "const a = [1, 2, 3];",
        "const doubled = a.forEach((num, index) =/&gt; {",
        "  // Do something with num and/or index.",
        "});",
        "// doubled = undefined",
        ".map():",
        "const a = [1, 2, 3];",
        "const doubled = a.map((num) =/&gt; {",
        "  return num * 2;",
        "});",
        "// doubled = [2, 4, 6]"
      ]
    },
    {
      "question": "What's a typical use case for anonymous functions?",
      "answer": [
        "Explanation: I've typically encountered them as callback functions that don't need to be used anywhere else.",
        "Use: Essentially when you don't need a named function and the function is bound to some other action.",
        "Example:",
        "setTimeout(function () {",
        "  console.log('Hello world!');",
        "}, 1000)"
      ]
    },
    {
      "question": "How do you organize your code? (module pattern, classical inheritance?)",
      "answer": [
        "Explanation: My preference is to use ES6 Modules to organize my code for the following reasons:",
        "Easier to reuse code",
        "You can keep different parts of your code cleanly separated, which makes writing and maintaining your code much easier and less error-prone."
      ]
    },
    {
      "question": "What's the difference between host objects and native objects?",
      "answer": [
        "Explanation: Native objects are part of the language as defined by the ECMAScript specification. Host objects are those provided by the runtime (browser or Node).",
        "Example: Some native objects are String, Math, RegExp, and Object. A couple of host objects are window and console"
      ]
    },
    {
      "question": "What is the difference between: function Person(){}, var person = Person(), and var person = new Person()?",
      "answer": [
        "Explanation & Use:",
        "function Person(){} is likely being used as a constructor.",
        "var person = new Person() is instantiated a new Person object as person.",
        "var person = Person() is not correct and would likely return undefined. To create a new instance you would need to use the new operator as above.",
        "Example:",
        "function Person(name) {",
        "  this.name = name;",
        "}",
        "var person = Person('John');",
        "console.log(person); // undefined",
        "console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined",
        "var person = new Person('John');",
        "console.log(person); // Person { name: 'John' }",
        "console.log(person.name); // 'John'"
      ]
    },
    {
      "question": "What's the difference between .call() and .apply()?",
      "answer": [
        "Explanation: They are both used to invoke functions, the difference is in how they take arguments. .call() takes them as comma-separated values and .apply() takes them as an array."
      ]
    },
    {
      "question": "Explain Function.prototype.bind.",
      "answer": [
        "Explanation: Creates a new function that, when called, has its 'this' keyword set to the provided value.",
        "Use: For binding the value of 'this' in methods of classes that you want to pass into other functions. This is frequently done in React components."
      ]
    },
    {
      "question": "When would you use document.write()?",
      "answer": [
        "Explanation: It is usually considered dangerous and prone to misuse. I would not use it in a modern-day website."
      ]
    },
    {
      "question": "What's the difference between feature detection, feature inference, and using the UA string?",
      "answer": [
        "Explanation:",
        "Feature Detection: Working out whether a browser supports a certain block of code, and running different code depending on whether it does, so that the browser can provide a working experience rather crashing/erroring in some browsers.",
        "Feature Inference: Checks for a feature just like feature detection, but uses another function because it assumes it will also exist. Feature Detection is the better approach.",
        "UA String: A browser-reported string that allows the network protocol peers to identify various properties of the system. It's tricky to parse and can be spoofed, so it's best to avoid this method.",
        "Example: Example: Using feature detection:\n\nif ('geolocation' in navigator) {\n  // Can use navigator.geolocation\n} else {\n  // Handle lack of feature\n}"
      ]
    },
    {
      "question": "Explain Ajax in as much detail as possible.",
      "answer": [
        "Explanation: Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page.",
        "Use: By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly use JSON instead of XML, due to the advantages of JSON being native to JavaScript.",
        "Example: The fetch API is typically used nowadays for asynchronous communication."
      ]
    },
    {
      "question": "What are the advantages and disadvantages of using Ajax?",
      "answer": [
        "Advantages:",
        "Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.",
        "Reduce connections to the server since scripts and stylesheets only have to be requested once.",
        "State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.",
        "Disadvantages:",
        "Dynamic webpages are harder to bookmark.",
        "Does not work if JavaScript has been disabled in the browser.",
        "Some web crawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.",
        "JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this."
      ]
    },
    {
      "question": "Explain how JSONP works (and how it's not really Ajax).",
      "answer": [
        "Explanation: JSONP (JSON with Padding) is a method commonly used to bypass the cross-domain policies in web browsers because Ajax requests from the current page to a cross-origin domain is not allowed.",
        "Use: JSONP can be unsafe as it can do everything else JavaScript can, so you need to trust the provider of data. These days, CORS is the recommended approach, and JSONP is seen as a hack.",
        "Example:",
        "&lt;!-- https://mydomain.com --/&gt;",
        "&lt;script/&gt;",
        "  function printData(data) {",
        "    console.log(`My name is ${data.name}!`);",
        "  }",
        "&lt;/script/&gt;",
        "&lt;script src='https://example.com?callback=printData'/&gt;&lt;/script/&gt;"
      ]
    },
    {
      "question": "Have you ever used JavaScript templating? If so, what libraries have you used?",
      "answer": [
        "Explanation: The only one I've used is JSX in React, which I don't think it's quite JavaScript templating.",
        "Use: It's more of an extension to ECMAScript that allows you to easily structure components with familiar HTML syntax.",
        "Example:",
        "const name = 'Josh Perez';",
        "const element = &lt;h1/&gt;Hello, {name}&lt;/h1/&gt;;"
      ]
    }
  ],
  github: [
      {

      }
    ]
};

export default questionsAnswers;

