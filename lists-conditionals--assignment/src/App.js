import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: 'A'
  }

  textChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }

  charClickHandler = (index) => {
    let chars = this.state.inputText.split('');
    chars.splice(index, 1);
    this.setState({
      inputText: chars.join('')
    });
  }

  render() {

    const chars = this.state.inputText.split('');
    const charComponents = chars.map((char, index) => {
      // using the array index as the list item key is not ideal because it will change 
      // when items are removed from the array causing the whole list to re-render anyway,
      // but there is no good alternative here
      return <CharComponent 
        key={index} 
        char={char}
        onClick={() => this.charClickHandler(index)} />
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <UserInput
          text={this.state.inputText}
          onChange={this.textChangedHandler} />
        <ValidationComponent
          length={this.state.inputText.length} />
        {charComponents}

      </div>
    );
  }

}

export default App;
