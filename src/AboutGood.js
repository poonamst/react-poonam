import React, { Component } from 'react';
import './Home.css';
import Home from './Home'
import AboutBad from './AboutBad'
import ApplyGood from './ApplyGood';
import ProductsGood from './ProductsGood';
import ProductsBad from './ProductsBad';
import ApplyBad from './ApplyBad'
import coyote from './coyote.png';
import graph from './graph-beherens.gif';

class AboutGood extends Component {
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
        <meta name="description" content="A test article page for accessibility evaluations" />
        <title>About Acme | Acme Widgets</title>
        <link rel="stylesheet" href="css/pure.css" />
        <link rel="stylesheet" href="css/goodbad.css" />
        <link href="https://rawgithub.com/tilomitra/csstypography/master/css/pure-typography.css" type="text/css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n#menu {display:none;}\n#layout.active #menu {display:block;}\n#menu .pure-menu-selected, #menu .pure-menu-heading {color:#fff;}\n.visually-hidden {\nposition: absolute !important;\nclip: rect(1px 1px 1px 1px); /* IE6, IE7 */\nclip: rect(1px, 1px, 1px, 1px);\npadding:0 !important;\nborder:0 !important;\nheight: 1px !important;\nwidth: 1px !important;\noverflow: hidden;\n}\nbody:hover .visually-hidden a,\nbody:hover .visually-hidden input,\nbody:hover .visually-hidden button {\ndisplay: none !important;\n}\n@media (min-width: 48em) {\n    #menu {display: block;}\n}\n" }} />
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
                <li className="pure-menu-item"><a className="pure-menu-link">About - Good</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick2} className="pure-menu-link">About - Bad</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" >Apply - Good</a></li>

                <li class="pure-menu-item"><a onClick={this._onButtonClick5} className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
    
              </ul>
            </div>
          </div>
          <div id="main">
            <div id="article">
              <header className="header">
              </header>
              <div className="content">
                <h2 className="content-subhead">Acme's Place in  History</h2>
                <p>Acme Widgets <img src={coyote} alt="Wile E. Coyote" style={{float: 'right'}} /> is best known for its role in the Roadrunner cartoons. Acme has proudly provided genius widgets to help the coyote capture the roadrunner. While our widgets are fabulous, the low success rate is certainly due to user error. </p>
                <p>Here's an interesting tidbit, not everybody roots for the Roadrunner. This graph shows the breakdown. <br />
                  <a href="https://hbr.org/2009/08/coyotes-vs-road-runners-managi"><img src={graph} alt="survey of people rooting for the coyote or roadrunner broken down by race" longdesc="https://hbr.org/2009/08/coyotes-vs-road-runners-managi" /></a></p>
                <h2>Using this page</h2>
                <p>
                  This is a <strong>sample page</strong> that includes <em>many</em> elements that are used to give content semantic value. You should be able to run automated tests agains this page and have no errors. Here's a list of elements within this page:
                </p>
                <h3>Lists</h3>
                <ul className="list">
                  <li>Unordered list (this one)</li>
                  <li>Ordered list</li>
                  <li><abbr title="Definition List">DL</abbr></li>
                  <li>Headers</li>
                  <li>Blockquote with cite</li>
                  <li>Image with alt text</li>
                  <li>Image with long description</li>
                  <li>Inline tags: abbr, strong, em, del, ins, time</li>
                </ul>
                <h4>Ordered and Definition Lists</h4>
                <p className="grey">Help make Acme better</p>
                <ol className="list">
                  <li>Visit this project on <a href="https://github.com/7mary4/a11y-control-test">GitHub</a></li>
                  <li>Fork it</li>
                  <li>Send a pull request to make it better</li>
                </ol>
                <p>Does that last list confuse you? Here's what it means.</p>
                <dl>
                  <dt>GitHub</dt>
                  <dd>GitHub is an online collaborative tool that allows people to share code, suggest changes, and propose solutions.</dd>
                  <dd><blockquote cite="https://guides.github.com/">GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub Flow works. <br /><cite><a href="https://guides.github.com/">Github Guides</a></cite></blockquote></dd>
                  <dt>Fork</dt>
                  <dd>Download the code and prepare to make your own version of the project.</dd>
                  <dt>Pull Request</dt>
                  <dd>Ask the project manager to include your <del dateTime="2015-11-16">code</del> <ins dateTime="2015-11-16">patch</ins> into the project.</dd>
                </dl>
                <p>This page was originally created on <time dateTime="2015-11-16">November 16, 2015</time>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
}

export default AboutGood;