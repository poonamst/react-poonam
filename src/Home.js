import React, { Component } from 'react';
import './Home.css';
import AboutGood from './AboutGood';
import AboutBad from './AboutBad';
import ProductsGood from './ProductsGood';
import ProductsBad from './ProductsBad';
import ApplyBad from './ApplyBad';
import ApplyGood from './ApplyGood';

class Home extends Component {

constructor(props) {
    super(props);
    this.state = {
      showComponent1: false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false
    };
    this._onButtonClick1 = this._onButtonClick1.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
    this._onButtonClick3 = this._onButtonClick3.bind(this);
    this._onButtonClick4 = this._onButtonClick4.bind(this);
    this._onButtonClick5 = this._onButtonClick5.bind(this);
    this._onButtonClick6 = this._onButtonClick6.bind(this);
  }

  _onButtonClick1() {
    this.setState({
      showComponent1: true
    });
  }

   _onButtonClick2() {
      this.setState({
      showComponent2: true, showComponent1: false
    });
    
  }

     _onButtonClick3() {
      this.setState({
      showComponent3: true, showComponent1: false, showComponent2: false
    });
    
  }

     _onButtonClick4() {
      this.setState({
      showComponent4: true, showComponent1: false, showComponent2: false, showComponent3: false
    });
    }

                _onButtonClick5() {
      this.setState({
      showComponent5: true, showComponent1: false, showComponent2: false, showComponent3: false, showComponent4: false
    });
    }

     _onButtonClick6() {
      this.setState({
      showComponent6: true, showComponent1: false, showComponent2: false, showComponent3: false, showComponent4: false, showComponent5: false
    });
    }

  render() {

    if(this.state.showComponent1) {
      return(<AboutGood />);
    }

    if (this.state.showComponent2) {
      return(<AboutBad />);
    }

    if (this.state.showComponent3) {
      return(<ProductsGood />);
    }

    if (this.state.showComponent4) {
      return(<ProductsBad />);
    }

    if (this.state.showComponent5) {
      return(<ApplyBad />);
    }

    if (this.state.showComponent6) {
      return(<ApplyGood />);
    }

   else {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A test web site for accessibility evaluations" />
        <title>Acme Widgets</title>
        <link rel="stylesheet" href="css/pure.css" />
        <link rel="stylesheet" href="css/goodbad.css" />
        <link href="https://rawgithub.com/tilomitra/csstypography/master/css/pure-typography.css" type="text/css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n#menu .pure-menu-selected, #menu .pure-menu-heading {color:#fff;}\n.visually-hidden {\nposition: absolute !important;\nclip: rect(1px 1px 1px 1px); /* IE6, IE7 */\nclip: rect(1px, 1px, 1px, 1px);\npadding:0 !important;\nborder:0 !important;\nheight: 1px !important;\nwidth: 1px !important;\noverflow: hidden;\n}\nbody:hover .visually-hidden a,\nbody:hover .visually-hidden input,\nbody:hover .visually-hidden button {\ndisplay: none !important;\n}\n" }} />
        {/*[if lte IE 8]>
        <link rel="stylesheet" href="css/layouts/side-menu-old-ie.css">
    <![endif]*/}
        {/*[if gt IE 8]><!*/}
        <link rel="stylesheet" href="css/layouts/side-menu.css" />
        {/*<![endif]*/}
        <div id="layout" className="pure-type">
          {/* Menu toggle */}
          <a href="#menu" id="menuLink" className="menu-link">
            {/* Hamburger icon */}
            <span />
            <i className="visually-hidden">Navigation</i>
          </a>
          <div id="menu">
            <div className="pure-menu">
              <a className="pure-menu-heading" href="index.html">Acme</a>
              <ul className="pure-menu-list" role="navigation">
                <li className="pure-menu-item"><a className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick3} className="pure-menu-link">Products - Good</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick4} className="pure-menu-link">Products - Bad</a></li>
                
                <li className="pure-menu-item"><a onClick={this._onButtonClick1} className="pure-menu-link">About - Good</a>
                
                </li>
                
                <li className="pure-menu-item"><a onClick={this._onButtonClick2} className="pure-menu-link" aria-current="page">About - Bad</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" >Apply - Good</a></li>

                <li className="pure-menu-item"><a onClick={this._onButtonClick5} className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
    
                </ul>
            </div>
          </div>
          <main id="main">
            <header className="header">
              <h1>Acme Widgets</h1>
              <h2>Exploring the usability and accessibility of widgets</h2>
            </header>
            <div className="content">
              <h2 className="content-subhead">About this site</h2>
              <p>
                This  web site includes sets of pages to test accessible and non-accessible methods for writing HTML. This will allow us to test patterns on multiple devices and assistive technologies. It will also give us controls for doing automated testing. The menu to the left will contain the test pages.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
}
  }
}

export default Home;
