import React, { Component } from 'react';
import './Home.css';
import Home from './Home';
import AboutBad from './AboutBad';
import ApplyBad from './ApplyBad';
import ApplyGood from './ApplyGood';
import AboutGood from './AboutGood';
import ProductsBad from './ProductsBad';

class ProductsGood extends Component {
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
      return(<AboutBad />);
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
    return(
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A test web site for accessibility evaluations" />
        <title>Product Grid | Acme Widgets</title>
        <link rel="stylesheet" href="css/pure.css" />
        <link rel="stylesheet" href="css/goodbad.css" />
        <link href="https://rawgithub.com/tilomitra/csstypography/master/css/pure-typography.css" type="text/css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n#menu {display:none;}\n#layout.active #menu {display:block;}\n#menu .pure-menu-selected, #menu .pure-menu-heading {color:#fff;}\n.visually-hidden {\nposition: absolute !important;\nclip: rect(1px 1px 1px 1px); /* IE6, IE7 */\nclip: rect(1px, 1px, 1px, 1px);\npadding:0 !important;\nborder:0 !important;\nheight: 1px !important;\nwidth: 1px !important;\noverflow: hidden;\n}\nbody:hover .visually-hidden a,\nbody:hover .visually-hidden input,\nbody:hover .visually-hidden button {\ndisplay: none !important;\n}\n\n/*pseudo-table*/\n    [role=\"grid\"]\n    {\n        display: table;\n    }\n\n    [role=\"row\"]\n    {\n        display: table-row;\n    }\n    [role=\"gridcell\"], [role=\"columnheader\"]\n    {\n        display: table-cell;\n        border: solid;\n        border-width: thin;\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n\t[role=\"columnheader\"]{\n\t\tbackground:#e0e0e0;\n\t\tcolor:#000;\n\t}\n\n@media (min-width: 48em) {\n    #menu {display: block;}\n}\n\n" }} />
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
                <li className="pure-menu-item"><a className="pure-menu-link">Products - Good</a></li>
 
                <li className="pure-menu-item"><a onClick={this._onButtonClick4} className="pure-menu-link">Products - Bad</a></li>
                               <li className="pure-menu-item"><a onClick={this._onButtonClick2} className="pure-menu-link">About - Good</a>
                
                </li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick3} className="pure-menu-link" aria-current="page">About - Bad</a></li>
                <li className="pure-menu-item"><a onClick={this._onButtonClick6} className="pure-menu-link" >Apply - Good</a></li>

                <li className="pure-menu-item"><a onClick={this._onButtonClick5} className="pure-menu-link" aria-current="page">Apply - Bad</a></li>
                
               
              </ul>
            </div>
          </div>
          <main id="main">
            <header className="header">
              <h1>Acme Widgets</h1>
            </header>
            <div className="content">
              <h2 className="content-subhead">Choose the right widget for you</h2>
              <p>
                Acme widgets is more than just anvils. Choose the right tool for your job.
              </p>
              <p>This page includes <strong>fully accessible data tables</strong>. Your automated tests should not trigger any errors.</p>
              <h3>Compare Acme Widgets</h3>
              <table summary="product comparisons" className="pure-table pure-table-bordered">
                <caption>Acme Widgets For The Win</caption>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Anvil</td>
                    <td>Very heavy block of iron</td>
                    <td>Smashing the RoadRunner</td>
                    <td>$29.95</td>
                  </tr>
                  <tr>
                    <td>Rocket</td>
                    <td>Jet power</td>
                    <td>Go as fast as the bird</td>
                    <td>$19.99</td>
                  </tr>
                  <tr>
                    <td>Tornado Generator</td>
                    <td>Create a local tornado</td>
                    <td>Create chaos</td>
                    <td>$4,590</td>
                  </tr>
                  <tr>
                    <td>Pseudo Tunnel</td>
                    <td>Make a rock look like a tunnel</td>
                    <td>Watch the bird run into a rock</td>
                    <td>$4.25</td>
                  </tr>
                </tbody>
              </table>
              <h3>Last order</h3>
              <table summary="invoice" className="pure-table pure-table-bordered">
                <caption>Order from October 25, 2015</caption>
                <thead>
                  <tr>
                    <th scope="col" id="name">Name</th>
                    <th scope="col" id="quantity">Quantity</th>
                    <th scope="col" id="cost">Cost</th>
                    <th scope="col" id="subtotal">Subtotal</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan={3} id="total">Total:</th>
                    <td headers="total">$86.93</td>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td headers="name">Anvil</td>
                    <td headers="quantity">1</td>
                    <td headers="cost">$29.95</td>
                    <td headers="subtotal">$29.95</td>
                  </tr>
                  <tr>
                    <td headers="name">Pseudo Tunnel</td>
                    <td headers="quantity">4</td>
                    <td headers="cost">$4.25</td>
                    <td headers="subtotal">$17.00</td>
                  </tr>
                  <tr>
                    <td headers="name">Rocket</td>
                    <td headers="quantity">2</td>
                    <td headers="cost">$19.99</td>
                    <td headers="subtotal">$39.98</td>
                  </tr>
                </tbody>
              </table>
              <h3>Pseudo table using ARIA</h3>
              <p>We don't want to use ARIA to replace a good data table with divitis. But this is an example of a basic pseudo table that retains the data table semantics. </p>
              <div role="grid" className="pure-table">
                <div role="row">
                  <div role="columnheader">
                    Name
                  </div>
                  <div role="columnheader">
                    Description
                  </div>
                  <div role="columnheader">
                    Cost
                  </div>
                </div>
                <div role="row">
                  <div role="gridcell">
                    Anvil
                  </div>
                  <div role="gridcell">
                    Very heavy block of iron
                  </div>
                  <div role="gridcell">
                    $29.95
                  </div>
                </div>
                <div role="row">
                  <div role="gridcell">
                    Rocket
                  </div>
                  <div role="gridcell">
                    Jet power
                  </div>
                  <div role="gridcell">
                    $19.99
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      );
  }
  }
}

export default ProductsGood;