import React, {Component} from 'react';
import './App.css';
import ToggleView from './ToggleView/ToggleView';
import LifeCycleMethod from './LifeCycleMethod/LifeCycleMethod';
import FuncComp from './FuncComp/FuncComp';

class App extends Component {

  state = {
    showMounting: false,
    showUpdating: false,
    showUnmounting: false,
    showFuncComp: false,
    someText1: "",
    someText2: ""
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

  toggleMountingHandler = () => {
    this.setState({showMounting: !this.state.showMounting})
  }

  toggleUpdatingHandler = () => {
    this.setState({showUpdating: !this.state.showUpdating})
  }

  toggleUnmountingHandler = () => {
    this.setState({showUnmounting: !this.state.showUnmounting})
  }

  toggleFuncCompHandler = () => {
    this.setState({showFuncComp: !this.state.showFuncComp})
  }

  textChangeHandler1 = (event) => {
    this.setState({someText1: event.target.value})
  }

  textChangeHandler2 = (event) => {
    this.setState({someText2: event.target.value})
  }

  render() {
    console.log("[App.js] render");
    return (
      <div className="App">

        <h1>React Component Lifecycle</h1>
        <p>For more information see <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">The Component Lifecycle</a> and <a href="https://reactjs.org/docs/hooks-reference.html">Hooks API</a></p>
        <hr/>

        <ToggleView 
          title="Mounting" 
          show={this.state.showMounting}
          toggle={this.toggleMountingHandler}>

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

        <ToggleView 
          title="Updating" 
          show={this.state.showUpdating}
          toggle={this.toggleUpdatingHandler}>

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

        <ToggleView 
          title="Unmounting" 
          show={this.state.showUnmounting}
          toggle={this.toggleUnmountingHandler}>

          <LifeCycleMethod 
            methodText="componentWillUnmount()"
            desc="clean up before component removed from the DOM" />

        </ToggleView>

        <hr/>

        <ToggleView
          title="React Hooks Example"
          show={this.state.showFuncComp}
          toggle={this.toggleFuncCompHandler}
          dynamicChildren="true">
          <FuncComp 
            text1={this.state.someText1}
            changed1={this.textChangeHandler1} 
            text2={this.state.someText2}
            changed2={this.textChangeHandler2} />
        </ToggleView>

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
