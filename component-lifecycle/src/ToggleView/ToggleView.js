import React, {Component} from 'react';

class LifeSection extends Component {
  
  // Default behavior is to re-render on every state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[LifeSection.js] shouldComponentUpdate - " + this.props.title, nextProps, nextState);
    return nextProps.show !== this.props.show;
  }

  render () {
    console.log("[LifeSection.js] render - " + this.props.title);
    let methods = null;
    let buttonText = "";
    if (this.props.show) {
      methods = this.props.children;
      buttonText = "hide";
    } else {
      buttonText = "show";
    }
      
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.toggle}>{buttonText}</button>
        {methods}
      </div>
    );
  }

}

export default LifeSection;
