import * as React from "react";
import ButtonInterface from '../interfaces/ButtonInterface'

export default class Button extends React.Component<ButtonInterface, {}>  {
    constructor (props: ButtonInterface){
        super(props);
      }
render() {
  return (  
    <div>
      <h1>User Component</h1>
        Hello, <b>{this.props.label}</b>
        <br/>
    </div>
    );
  }
}