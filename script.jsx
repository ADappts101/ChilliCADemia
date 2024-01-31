import React from 'react';

export const myComponent = (() => {
class MyComponent extends React.Component {
  // Your custom method
  myFunction = () => {
    console.log("Hello from myFunction!");
  };

  render() {
    // Call your custom method in the JSX file
    this.myFunction();

    return (
      <div>
        {/* Your JSX content */}
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

})();
