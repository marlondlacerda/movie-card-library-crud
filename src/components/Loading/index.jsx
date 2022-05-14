import React, { Component } from 'react';
import loading from '../../images/loading1.gif';
import loadingMobile from '../../images/loadingmobile.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img className="load-desktop" src={ loading } alt="loading" />
        <img className="load-mobile" src={ loadingMobile } alt="loading" />
      </div>
    );
  }
}

export default Loading;
