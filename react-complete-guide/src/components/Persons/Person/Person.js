import React, { Component } from "react";
import Proptypes from "prop-types";

import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import {AuthContext} from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    // could also initialize state here, using this.state = {...stuff};
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) this.inputElement.current.focus();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Auxiliary>
        <AuthContext.Consumer>
        {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: Proptypes.func,
  name: Proptypes.string,
  age: Proptypes.number,
  changed: Proptypes.func
};

export default withClass(Person, classes);
