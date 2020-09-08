import React from "react";
import axios from "axios";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = await axios.get("http://18.221.28.100:4000/users");
    this.setState(data);
    console.log(data);
  };

  render() {
    return (
      <div>{this.state.data ? this.state.data.data[0].cntntsNo : "false"}</div>
    );
  }
}

export default Test;
