import React, {Component} from 'react';

class LifeSection extends Component {

  render () {
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
