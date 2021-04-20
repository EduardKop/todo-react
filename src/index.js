import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
// class Ed extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     };
//   }
//   render() {
//     const { link, bio } = this.props;
//     const { years } = this.state;
//     return (
//       <>
//         <a href={link}>my link,{years}</a>
//         <h2> {bio} </h2>
//       </>
//     );
//   }
// }

// function All() {
//   return (
//     <>
//       <Ed link="facebook.com" bio="Kop" />
//       <Ed link="facebook.com" bio="Ed" />
//       <Ed link="facebook.com" bio="Rd" />
//     </>
//   );
// }
ReactDOM.render(<App />, document.getElementById("root"));
