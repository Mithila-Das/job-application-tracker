1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById, getElementsByClassName, and querySelector / querySelectorAll are all used to select elements from an HTML page, but they work a little differently.
getElementById() is used to find one element using its ID. Since an ID is unique, it returns only one element.
getElementsByClassName() is used to find elements that have the same class name. Many elements can share a class, so it returns multiple elements.
querySelector() finds the first element that matches a CSS selector. You can use it with an ID, class, or tag name.
querySelectorAll() finds all elements that match a CSS selector. It returns a list of elements.

2.How do you create and insert a new element into the DOM?

Answer:To create and insert a new element into the DOM, first use document.createElement() to create the element, such as a div or p. Then add text, classes, or other attributes using properties like textContent or className. After setting it up, insert it into the page using methods like appendChild() or append() on an existing parent element.In short, create the element, customize it and then add it to the webpage.

3.What is Event Bubbling? And how does it work?

Answer:Event bubbling is when an event starts on the element that was clicked and then moves up to its parent elements.For example, if a button inside a div is clicked,the event runs on the button first,then on the div and then continues upward in the DOM.In simple words,the event bubbles up from child to parent.

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:Event delegation is a way to handle events on many elements by using one event listener on their parent instead of adding separate listeners to each child.It is useful because it saves memory, works for new elements added later and makes code simpler.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:preventDefault() and stopPropagation() are both JavaScript event methods, but they do different things: preventDefault() stops the browser from doing its usual action for that event (like stopping a link from opening a new page or a form from submitting), while stopPropagation() stops the event from “bubbling up” to parent elements, so only the element that triggered it reacts and parent elements don’t respond.
