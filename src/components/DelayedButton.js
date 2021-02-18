import React, { Component } from "react";

class DelayedButton extends Component {
  //When we pass props into a component, we need to use this.props to access it because it becomes a property of the new component.

  delayedButton = () => {
    
    setTimeout(function(){
        this.preventDefault(), 
        alert("ok");
    }, this.onDelayedClick);
}
    
        
  render() {
    return (
      <div>
        <button onClick={this.delayedButton}></button>
      </div>
    );
  }
}

// export default DelayedButton;

// setTimeout(function () {
//   alert("Hello");
// }, 3000); 
//  2.  This component takes two props: `onDelayedClick` (a function), and `delay` (a
//     number).

// 3.  Create a button that, when clicked, will pass the click event to the
//     `onDelayedClick` prop _within_ a `setTimeout()`. The `setTimeout()`
//     should be set to `this.props.delay`.

// 4.  If successful, the event will be logged to the console once the timeout has
//     finished.
    
// 5.  Hint: If you having trouble with this feature, remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool. So how can we fix that?

export default DelayedButton