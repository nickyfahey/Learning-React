import React, {PureComponent} from 'react';

class PureToggleView extends PureComponent {

  render() {
    console.log("[PureToggleView.js] render - " + this.props.title);
    let content = null;
    let buttonText = "";
    if (this.props.show) {
      content = (
        <div>
          <input type="text" 
            value={this.props.text} 
            onChange={this.props.changed}/>
          {this.props.content}
          <p>{this.props.text}</p>
        </div>
      );
      
      buttonText = "hide";
    } else {
      buttonText = "show";
    }
      
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.toggle}>{buttonText}</button>
        {content}
      </div>
    );
  }
}

export default PureToggleView;
