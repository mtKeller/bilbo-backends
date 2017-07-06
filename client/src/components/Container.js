import React ,{ Component} from 'react';
import Maps from './Maps';
import Marker from "./Marker";
import {GoogleApiWrapper} from 'google-maps-react';

class Container extends Component {
	
  
  render() {
    return (
      <div className={"map-box"}>
        <Maps markers={this.props.markers} initialCenter={this.props.initialCenter} google={window.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD98nxotdxRqVB9UwLUS-lq_HABOe0j0qU",
  version: 3.27
})(Container);