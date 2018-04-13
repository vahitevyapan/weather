import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    //console.log(this.props.weather);
    const status = this.props.weather.status;
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder={status == 200 ? "Select City" : "City not found"}
          className="form-control"
          value={this.state.term}
          style={
            status == 200 ? { border: "" } : { border: " 1px solid #e02b2b " }
          }
          onChange={event => this.setState({ term: event.target.value })}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
const mapStateToProps = ({ weather }) => {
  console.log(weather.status);
  return { weather };
};
export default connect(mapStateToProps, { fetchWeather })(SearchBar);
