import React, {Component} from 'react';
import './App.css';
import ToggleView from './ToggleView/ToggleView';
import LifeCycleMethod from './LifeCycleMethod/LifeCycleMethod';
import FuncComp from './FuncComp/FuncComp';
import PureToggleView from './PureToggleView/PureToggleView';

class App extends Component {

  state = {
    someText1: "",
    someText2: "",
    someText3: ""
  }

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props, state);
    return state;
  }

  // Default behavior is to re-render on every state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  textChangeHandler1 = (event) => {
    this.setState({someText1: event.target.value})
  }

  textChangeHandler2 = (event) => {
    this.setState({someText2: event.target.value})
  }

  textChangeHandler3 = (event) => {
    this.setState({someText3: event.target.value})
  }

  render() {
    console.log("[App.js] render");
    return (
      <div className="App">

        <h1>React Component Lifecycle</h1>
        <p>For more information see <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">The Component Lifecycle</a> and <a href="https://reactjs.org/docs/hooks-reference.html">Hooks API</a></p>
        <hr/>

        <ToggleView title="Mounting">

          <LifeCycleMethod 
            methodText="constructor(props)"
            desc={["Default ES6 class feature", "Call super(props)"]} />
          <LifeCycleMethod 
            methodText="static getDerivedStateFromProps(props, state)" />
          <LifeCycleMethod
            methodText="render()" />
          <LifeCycleMethod desc="Render Child Components" />
          <LifeCycleMethod
            methodText="componentDidMount()" />

        </ToggleView>

        <ToggleView title="Updating">

          <LifeCycleMethod 
            methodText="static getDerivedStateFromProps(props, state)" />
          <LifeCycleMethod 
            methodText="shouldComponentUpdate(nextProps, nextState)" />
          <LifeCycleMethod methodText="render()" />
          <LifeCycleMethod desc="Update Child Components" />
          <LifeCycleMethod 
            methodText="getSnapshotBeforeUpdate(prevProps, prevState)" />
          <LifeCycleMethod methodText="componentDidUpdate(prevProps, prevState, snapshot)" />

        </ToggleView>

        <ToggleView title="Unmounting">

          <LifeCycleMethod 
            methodText="componentWillUnmount()"
            desc="clean up before component removed from the DOM" />

        </ToggleView>

        <hr/>

        <ToggleView
          title="React Hooks Example"
          dynamicChildren="true">
          <FuncComp 
            text1={this.state.someText1}
            changed1={this.textChangeHandler1} 
            text2={this.state.someText2}
            changed2={this.textChangeHandler2} />
        </ToggleView>

        <hr/>

        <PureToggleView
          title="Pure Component"
          text={this.state.someText3}
          changed={this.textChangeHandler3} />

        <hr />

      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return "snapshot value";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

}

export default App;
