import React, { Component } from 'react';
import './Home.css';
import Home from './Home';
import AboutGood from './AboutGood';
import AboutBad from './AboutBad';
import ApplyBad from './ApplyBad';
import ProductsGood from './ProductsGood';
import ProductsBad from './ProductsBad';

class ApplyGood extends Component {
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
      return(<ApplyBad />);
    }

   else {

    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A test web site for accessibility evaluations" />
        <title>Apply to Acme | Acme Widgets</title>
        <link rel="stylesheet" href="css/pure.css" />
        <link rel="stylesheet" href="css/goodbad.css" />
        <link href="https://rawgithub.com/tilomitra/csstypography/master/css/pure-typography.css" type="text/css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n        #menu {display:none;}\n        #layout.active #menu {display:block;}\n        #menu .pure-menu-selected, #menu .pure-menu-heading {\n            color: #fff;\n        }\n\n        .visually-hidden {\n            position: absolute !important;\n            clip: rect(1px, 1px, 1px, 1px); /* IE6, IE7 */\n            clip: rect(1px, 1px, 1px, 1px);\n            padding: 0 !important;\n            border: 0 !important;\n            height: 1px !important;\n            width: 1px !important;\n            overflow: hidden;\n        }\n\n        body:hover .visually-hidden a, body:hover .visually-hidden input, body:hover .visually-hidden button {\n            display: none !important;\n        }\n        @media (min-width: 48em) {\n            #menu {display: block;}\n        }\n    " }} />
        {/*[if lte IE 8]>
    <link rel="stylesheet" href="css/layouts/side-menu-old-ie.css">
    <![endif]*/}
        {/*[if gt IE 8]><!*/}
        <link rel="stylesheet" href="css/layouts/side-menu.css" />
        {/*<![endif]*/}
        <div id="layout" className="pure-type">
          {/* Menu toggle */}
          <a href="#menu" id="menuLink" className="menu-link"> {/* Hamburger icon */}
            <span /> <i className="visually-hidden">Navigation</i>
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
                <li className="pure-menu-item"><a className="pure-menu-link" >Apply - Good</a></li>

                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
    
            </ul>
            </div>
          </div>
          <main id="main"> <header className="header">
              <h1>Join the Acme Widgets Team</h1>
              <h2>You'll be drinking free Acme coffee in no time.</h2>
            </header>
            <div className="content">
              <h2 className=" callout good">We're excited to meet you</h2>
              <p>Please use our application form to tell us more about you.
                We'll contact you as soon as possible with a super job offer.</p>
              <h3 className="content-subhead">Acme Application Form</h3>
              <form action="thankyou.html" className="pure-form pure-form-stacked">
                <div className="pure-g">
                  <fieldset className="pure-u-1-2">
                    <legend>Your personal information</legend>
                    <label htmlFor="fname">First Name</label> <input type="text" name="fname" id="fname" required placeholder="Jane" />
                    <label htmlFor="lname">Last Name</label> <input type="text" name="lname" id="lname" required placeholder="Doe" />
                    <label htmlFor="tel">Telephone Number</label> <input type="tel" name="tel" id="tel" required placeholder="650-555-1212" />
                    <label htmlFor="email">Email</label> <input type="email" name="email" id="email" required placeholder="jane@doe.com" />
                  </fieldset>
                  <fieldset className="pure-u-1-2">
                    <legend>Your Address</legend>
                    <label htmlFor="street">Street Address</label> <input type="text" name="street" id="street" placeholder="1 first ave" />
                    <label htmlFor="city">City</label> <input type="text" name="city" id="city" placeholder="Any Town" />
                    <label htmlFor="state">State</label>
                    <select id="state" name="state">
                      <option>California</option>
                      <option>Not California</option>
                    </select>
                    <label htmlFor="zip">Zip</label> <input type="text" name="zip" id="zip" />
                    <label htmlFor="current" className="pure-checkbox">
                      <input type="checkbox" name="current" id="current" /> This is my current address, I want to stay in this area
                    </label>
                  </fieldset>
                  <fieldset className="pure-u-1-2">
                    <legend>Current Employer</legend>
                    <label htmlFor="company">Company</label> <input type="text" name="company" id="company" />
                    <label htmlFor="jobtitle">Job Title</label> <input type="text" id="jobtitle" name="jobtitle" />
                    <label htmlFor="estreet">Street Address</label> <input type="text" name="estreet" id="estreet" placeholder="1 first ave" />
                    <label htmlFor="ecity">City</label> <input type="text" name="ecity" id="ecity" placeholder="Any Town" />
                    <label htmlFor="estate">State</label>
                    <select id="estate" name="estate">
                      <option>California</option>
                      <option>Not California</option>
                    </select>
                    <label htmlFor="ezip">Zipcode</label> <input type="text" name="ezip" id="ezip" />
                    <label htmlFor="contact" className="pure-checkbox"> <input type="checkbox" name="contact" id="contact" /> It's ok to contact my current employer.</label>
                    <label htmlFor="start">When did you start working at this job?</label> <input type="date" id="start" name="start" />
                  </fieldset>
                  <fieldset className="pure-u-1-2">
                    <legend>Education</legend>
                    <label htmlFor="university">University</label> <input type="text" name="university" id="university" />
                    <label htmlFor="diploma">Upload your diploma</label> <input type="file" name="diploma" id="diploma" />
                    <label htmlFor="grad">Graduation Date</label> <input type="date" name="grad" id="grad" />
                    <fieldset>
                      <legend>Graduation Grade</legend>
                      <label className="pure-radio"> <input type="radio" name="grade" defaultValue="a" /> A - Cream of the crop!</label>
                      <label className="pure-radio"> <input type="radio" name="grade" defaultValue="b" /> B - I slept in a few times</label>
                      <label className="pure-radio"> <input type="radio" name="grade" defaultValue="c" /> C - I'm just an average mug</label>
                      <label className="pure-radio"> <input type="radio" name="grade" defaultValue="d" /> D - The professors didn't like me</label>
                      <label className="pure-radio"> <input type="radio" name="grade" defaultValue="f" /> F - But I mastered the party circuit</label>
                    </fieldset>
                  </fieldset>
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

export default ApplyGood;
