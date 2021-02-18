import React, { Component } from 'react' 


class CoordinatesButton extends Component {
  
  //When we pass props into a component, we need to use this.props to access it because it becomes a property of the new component. 

  createArray = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])  
  } 

  render() {
    return (
      <div>
        <button onClick={this.createArray}>
        </button>
      </div>
    );
  }
}

export default CoordinatesButton


// 3.  Within `CoordinatesButton`, render a button. On click of the button,
//     create an array with two elements: the X and Y coordinates of the mouse. Find
//     these using the event data.

// 4.  Pass this event data in as the argument for the `onReceiveCoordinates` prop.

// 5.  If successful, the current x,y position of your mouse should be logged.