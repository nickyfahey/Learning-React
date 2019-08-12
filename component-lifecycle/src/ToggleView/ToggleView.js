import React, {Component} from 'react';

class ToggleView extends Component {
  
  // Default behavior is to re-render on every state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ToggleView.js] shouldComponentUpdate - " 
      + this.props.title, nextProps, nextState);

    // closed and staying closed - never re-render
    if (!this.props.show && !nextProps.show) return false;
    // open and closing - always re-render
    // closed and opening - always re-render
    if (this.props.show !== nextProps.show) return true;

    // else open and staying open
    return this.props.dynamicChildren;
    // doing a deep comparison into children props is likely to hinder performance more than help
  }
  // To highlight parts of the DOM that are re-rendered goto 
  // chrome developer tools > ... > more tools > rendering 
  // and turn on Paint flashing. Note: this is what is rendered
  // to the DOM NOT every render call react does

  render () {
    console.log("[ToggleView.js] render - " + this.props.title);
    let children = null;
    let buttonText = "";
    if (this.props.show) {
      children = this.props.children;
      buttonText = "hide";
    } else {
      buttonText = "show";
    }
      
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.toggle}>{buttonText}</button>
        {children}
      </div>
    );
  }

}

export default ToggleView;
