### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front end library, it is easier to create interactive uis using react

- What is Babel?
babel is a preprocessor which translate modern javascript code to older versions supported by all browsers

- What is JSX?
JSX is a syntax extension to Javascript

- How is a Component created in React?
components can be created as a function or a class which extends React.component class

- What are some difference between state and props?
state is mutable and managed by same component while props are immutable and passed to a component

- What does "downward data flow" refer to in React?

dat is passing to the undelined components but not in the opposite direction

- What is a controlled component?
controlled component which handles its states and rerender as per the input

- What is an uncontrolled component?
this component is not controlled by react

- What is the purpose of the `key` prop when rendering a list of components?
key is used to identify items in the array for rerendering purpose

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
its not always unique because items can be rearranged

- Describe useEffect.  What use cases is it used for in React components?
useeffect is using to execute something only when there is a change in its dependancies

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
this is used to store a value which is not affected by rerendering. No change to ref value do not cause a rerender of a component

- When would you use a ref? When wouldn't you use one?
to store some values locally

- What is a custom hook in React? When would you want to write one?
custom hook is a function which acts like a instance method in a class
