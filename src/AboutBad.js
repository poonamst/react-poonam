import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import coyote from './coyote.png';
import graph from './graph-beherens.gif';
import './Home.css';
import Home from './Home';
import AboutGood from './AboutGood';
import ProductsGood from './ProductsGood';
import ProductsBad from './ProductsBad';
import ApplyBad from './ApplyBad';
import ApplyGood from './ApplyGood';
// var React = require('react');
// var ReactDOM = require('react-dom');

  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);

class AboutBad extends Component {
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
      return(<ApplyBad />);
    }

        if (this.state.showComponent6) {
      return(<ApplyGood />);
    }

   else {

    return (
      <div>
        {/*<!doctype html>*/}
        {/*No html lang attribute*/}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A test article page for accessibility evaluations" />
        {/*No title attribute for this HTML page*/}
        {/*<title>About Acme - Bad | Acme Widgets</title>*/}
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
                <li className="pure-menu-item"><a className="pure-menu-link" aria-current="page">About - Bad</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" >Apply - Good</a></li>

                <li class="pure-menu-item"><a onClick={this._onButtonClick5} className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
    
            </ul>
            </div>
          </div>
          <main id="main">
            <article>
              <header className="header">
                  <h1>About Acme - The Bad Version</h1>
              </header>
              <div className="content">
                <h3 className="content-subhead">Acme's Place in  History</h3>
                <p>Acme Widgets <img src={coyote} style={{float: 'right'}} />{/* no alt attribute */} is best known for its role in the Roadrunner cartoons. Acme has proudly provided genius widgets to help the coyote capture the roadrunner. While our widgets are fabulous, the low success rate is certainly due to user error. </p>
                <p>Here's an interesting tidbit, not everybody roots for the Roadrunner. This graph shows the breakdown. <br />
                  <a href="https://hbr.org/2009/08/coyotes-vs-road-runners-managi"><img src={graph} alt /></a>{/* image has empty alt attribute, but is the only element within a link */}</p>
                <span className="content-subhead" style={{fontSize: '1.25em'}}>Using this page</span>
                <p>
                  This is a <span style={{fontWeight: 'bold'}}>sample page</span>{/* using styles instead of strong */} that includes <span style={{textDecoration: 'underline'}} onclick="alert('this is not a link');">many</span> {/* fake link */} errors commonly associated with article pages. Automated testing should trigger an assortment of issues. Here's a list of elements within this page:
                </p>
                <h2>Lists</h2>
                {/* input with type="image" need an alt attribute */}
                <input type="image" style={{float: 'right'}} src={coyote} height={150} width={50} />
                <p>{/* fake list */}
                  * Pseudo unordered list (this one)<br />
                  * Pseudo ordered list<br />
                  * Pseudo Definition lists<br />
                  * Pseudo Headers<br />
                  * Headings out of order<br />
                  * Pseudo link<br />
                  * Pseudo blockquote <br />
                  * Image without alt attribute<br />
                  * Active image with empty alt text<br />
                  * Inline tags: marquee, blink<br />
                  * Input type image without alt attribute<br />
                  * Title attribute missing<br />
                  * Lang attribute missing<br />
                  * Doctype html is missing<br />
                  * Image map without alt text
                </p><div style={{float: 'right'}}>{/* this image lacks an alt attribute, the area also lacks text http://dev.w3.org/html5/spec-preview/image-maps.html */}
                  <img src={coyote} width={145} height={126} useMap="#planetmap" />
                  <map name="planetmap">
                    <area shape="rect" coords="0,0,82,126" href="http://theconcourse.deadspin.com/how-wile-e-coyote-explains-the-world-1752248034" />
                  </map>
                </div>
                <p />
                {/*Hyperlinks should always have text associated with them*/}
                <a href="www.intuit.com" />
                <h4>Ordered and Definition Lists</h4>{/* headings are out of order, it went from h2 to h4 */}
                <p className="grey bad">Help make Acme better</p>
                <div className="orderedlist">{/* fake ordered list */}
                  1. Visit this project on <a href="https://github.com/7mary4/a11y-control-test">GitHub</a><br />
                  2. Fork it<br />
                  3. Send a pull request to make it better<br />
                </div>
                <p>Does that last list confuse you? Here's what it means.</p>
                <div className="definitions">{/* fake definition list */}
                  <b>GitHub</b><br />
                  GitHub is an online collaborative tool that allows people to share code, suggest changes, and propose solutions.<br />
                  <span><i>GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub Flow works. <br /><a href="https://guides.github.com/">Github Guides</a></i>{/* fake blockquote */}
                    <br /><b>Fork</b><br />
                    Download the code and prepare to <blink>make your own</blink> version of the project.
                    <br /><b>Pull Request</b><br />
                    Ask the project manager to include your <span style={{textDecoration: 'line-through'}}>code</span> <i>patch</i> {/* using styles to replicate the del and ins tags */} into the project.</span></div>
                <marquee>This page was originally created on November 16, 2015.</marquee>{/* don't use the marquee */}
              </div>
            </article>
          </main>
        </div>
      </div>
    );
}
  }
}

export default AboutBad;
