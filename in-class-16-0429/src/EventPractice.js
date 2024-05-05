import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({ message: "" });
  }

  //화살표? 생성자 생략???

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="Type Somthing"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}> Confirm </button>
      </div>
    );
  }
}

export default EventPractice;
