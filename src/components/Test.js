import React from "react";
import ModalDetail from "./ModalDetail";
import "../Css/compnentesCss/Test.css";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      search: "",
      number: "",
      backUrl: "",
      name: "",
      detailon: false,
    };
  }
  componentDidMount() {
    // this.getData();
  }
  handleCancel = () => {
    this.setState({ name: "", detailon: false });
  };
  handleDetail = (number, backUrl, name) => {
    this.setState({ number, backUrl, name });
    this.setState({ detailon: true });
  };
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const showDetail = this.state.detailon ? (
      <ModalDetail
        detailon={this.state.detailon}
        number={this.state.number}
        backUrl={this.state.backUrl}
        name={this.state.name}
        cancel={this.handleCancel}
      ></ModalDetail>
    ) : (
      <div></div>
    );
    const searchData = this.props.data ? (
      this.props.data.data
        .filter((info) => {
          if (this.state.search == null) return this.props.data;
          else if (
            info.cntntsSj
              .toLowerCase()
              .includes(this.state.search.toLowerCase())
          ) {
            return this.props.data;
          }
        })
        .map((list) => {
          const cut = list.rtnStreFileNm.split("|");
          const imgUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[0]}`;
          const backUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[1]}`;
          return (
            <div className="ShowCss" key={list.cntntsNo}>
              <li
                className="DataLi"
                key={list.cntntsNo}
                onClick={() =>
                  this.handleDetail(list.cntntsNo, backUrl, list.cntntsSj)
                }
              >
                <img
                  src={imgUrl}
                  width="230"
                  height="230"
                  alt={list.cntntsSj}
                />
                <div className="DataTitle" key={list.cntntsNo}>
                  {list.cntntsSj}
                </div>
              </li>
            </div>
          );
        })
    ) : (
      <div>....Loading</div>
    );
    return (
      <div>
        <input
          className="InputType"
          value={this.state.search}
          name="search"
          onChange={this.handleChange}
          placeholder="🔍Search ..."
        ></input>

        <div className="PhotoBox">
          <ul className="DataUl">{searchData}</ul>
        </div>
        {showDetail}
      </div>
    );
  }
}

export default Test;
