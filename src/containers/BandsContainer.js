import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(band => (
          <li key={band.id}>{band.name}</li>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
});

const mapStateToProps = state => {
  return { bands: state.bands };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
