import React, { Component } from 'react';
import './Home.css';
import Home from './Home';
import AboutGood from './AboutGood';
import ApplyGood from './ApplyGood';
import AboutBad from './AboutBad';
import ProductsGood from './ProductsGood';
import ProductsBad from './ProductsBad';
import coyote from './coyote.png';

var ReactDOM = require('react-dom');
var axe = require('react-axe');
  axe(React, ReactDOM, 1000);

class ApplyBad extends Component {
constructor(props) {
    super(props);
    this.state = {
      showComponent1: false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false,
      showComponent6: false
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
      return(<Home />);
    }

    if (this.state.showComponent2) {
      return(<AboutGood />);
    }


    if (this.state.showComponent3) {
      return(<ProductsGood />);
    }

    if (this.state.showComponent4) {
      return(<ProductsBad />);
    }

        if (this.state.showComponent5) {
      return(<AboutBad />);
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
        <title>Apply to Acme - the bad version | Acme Widgets</title>
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
                <li className="pure-menu-item"><a onClick={this._onButtonClick1} className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick3} className="pure-menu-link">Products - Good</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick4} className="pure-menu-link">Products - Bad</a></li>
                
                <li className="pure-menu-item"><a onClick={this._onButtonClick2} className="pure-menu-link">About - Good</a>
                
                </li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick5} className="pure-menu-link" aria-current="page">About - Bad</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" >Apply - Good</a></li>

                <li className="pure-menu-item"><a className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
    
            </ul>
            </div>
          </div>
          <main id="main">
            <header className="header">
              <h1>Join the Acme Widgets Team</h1>
              <h2>Good luck filling out this form</h2>
            </header>
            <div className="content">
              <h2 className=" callout bad">We're excited to meet you</h2>
              <p>
                This version of the application form features common mistakes that make a form difficult to use. The labels are actually spans made to look like labels. All of the inputs are using the standard "text" type, and they are not using the standard name/id values that trigger browsers to autofill.
              </p>
              <h3 className="content-subhead">Bad Acme Application Form</h3>
              <form action="thankyou.html" className="pure-form pure-form-stacked">
                <div className="pure-g">
                  <div className="fieldset pure-u-1-2">{/* div instead of fieldset */}
                    <span className="legend">Your personal information</span>{/* span instead of legend */}
                    <span className="label">First Name</span>{/* span instead of label */}
                    <input type="text " name="f" id="f" placeholder="Jane" />{/* placeholder is not an adequate label */}
                    <span className="label">Last Name</span>
                    <input type="text " name="l" id="l" placeholder="Doe" />
                    <span className="label">Telephone Number</span>
                    <input type="tel" name="t" id="t" placeholder="650-555-1212" />
                    <span className="label">Email</span>
                    <input type="email" name="e" id="e" placeholder="jane@doe.com" />
                    <img src={coyote} width={145} height={126} useMap="#planetmap" />
                  </div>
                  <div className="pure-u-1-2 fieldset">
                    <span className="legend">Your Address</span>
                    <span className="label">Street Address</span>
                    <input type="text " name="s" id="s" placeholder="1 first ave" />
                    <span className="label">City</span>
                    <input type="text" name="c" id="c" placeholder="Any Town" />
                    <span className="label">State</span>
                    <select id="st" name="st">
                      <option>California</option>
                      <option>Not California</option>
                    </select>
                    <span className="label">Zip</span>
                    <input type="text" name="z" id="z" />
                    <span className="label pure-checkbox">
                      <input type="checkbox" name="current" id="current" />
                      This is my current address, I want to stay in this area</span>
                  </div>
                  <div className="pure-u-1-2 fieldset">
                    <span className="legend">Current Employer</span>
                    <span className="label">Company</span>
                    <input type="text" name="co" id="co" />
                    <span className="label">Job Title</span>
                    <input type="text" id="jo" name="jo" />
                    <span className="label">Street Address</span>
                    <input type="text " name="estreet" id="estreet" placeholder="1 first ave" />
                    <span className="label">City</span>
                    <input type="text" name="ecity" id="ecity" placeholder="Any Town" />
                    <span className="label">State</span>
                    <select id="estate" name="estate">
                      <option>California</option>
                      <option>Not California</option>
                    </select>
                    <span className="label">Zipcode</span>
                    <input type="text" name="ezip" id="ezip" />
                    <span className="label pure-checkbox">
                      <input type="checkbox" name="contact" id="contact" />
                      It's ok to contact my current employer.
                    </span>
                    <span className="label">When did you start working at this job?</span>
                    <input type="text" id="start" name="start" />
                  </div>
                  <div className="pure-u-1-2 fieldset">
                    <span className="legend">Education</span>
                    <span className="label">University</span>
                    <input type="text" name="uni" id="uni" />
                    <span className="label" htmlFor="diploma">Upload your diploma</span>
                    <span className="pure-button" onclick="alert('nice diploma!');">Upload</span>
                    <span className="label">Graduation Date</span>
                    <input type="text" name="grad" id="grad" />
                    <div className="fieldset">
                      <span className="legend">Graduation Grade</span>
                      <span className="label pure-radio">
                        <input type="radio" name="grade" defaultValue="a" />
                        A - Cream of the crop!</span>
                      <span className="label pure-radio">
                        <input type="radio" name="grade" defaultValue="b" />
                        B - I slept in a few times</span>
                      <span className="label pure-radio">
                        <input type="radio" name="grade" defaultValue="c" />
                        C - I'm just an average mug</span>
                      <span className="label pure-radio">
                        <input type="radio" name="grade" defaultValue="d" />
                        D - The professors didn't like me</span>
                      <span className="label pure-radio">
                        <input type="radio" name="grade" defaultValue="f" />
                        F - But I mastered the party circuit</span>
                    </div>
                  </div>
                </div>
                <button type="submit" className="pure-button pure-button-primary">Submit</button>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
}
  }
}

export default ApplyBad;
