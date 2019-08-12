import React, {Component} from 'react';
import './App.css';
import LifeSection from './LifeSection/LifeSection';
import LifeCycleMethod from './LifeCycleMethod/LifeCycleMethod';
import FuncComp from './FuncComp/FuncComp';

class App extends Component {

  state = {
    showMounting: false,
    showUpdating: false,
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
        <p>For more information see: <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">The Component Lifecycle</a></p>
        <hr/>

        <LifeSection 
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

        </LifeSection>

        <LifeSection 
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

        </LifeSection>

        <hr/>

        <FuncComp 
          text1={this.state.someText1}
          changed1={this.textChangeHandler1} 
          text2={this.state.someText2}
          changed2={this.textChangeHandler2} />

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
