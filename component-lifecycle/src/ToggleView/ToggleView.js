import React, {Component} from 'react';

class ToggleView extends Component {
  // using props.children (if not just a string) in a PureComponent 
  // will mean the PureComponents shouldComponentUpdate will always
  // return true making it a pointless check
  // https://blog.cloudboost.io/react-purecomponents-children-979e3da15ba8

  state = {
    show: false
  }

  toggleShowHandler = () => {
    this.setState( (prevState) => {
      return { show: !prevState.show }
    });
  }
  
  // Default behavior is to re-render on every state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ToggleView.js] shouldComponentUpdate - " 
      + this.props.title, nextProps, nextState);

    // closed and staying closed - never re-render
    if (!this.state.show && !nextState.show) return false;
    // open and closing - always re-render
    // closed and opening - always re-render
    if (this.state.show !== nextState.show) return true;

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
    if (this.state.show) {
      children = this.props.children;
      buttonText = "hide";
    } else {
      buttonText = "show";
    }
      
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.toggleShowHandler}>{buttonText}</button>
        {children}
      </div>
    );
  }

}

export default ToggleView;
