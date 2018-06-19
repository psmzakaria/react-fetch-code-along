// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       carparks: []
//     };
//   }

//   async componentDidMount() {
//     const response = await fetch("http://carparks-sg.herokuapp.com/api");
//     const data = await response.json();
//     this.setState({
//       carparks: data
//     });
//   }

//   render() {
//     console.log(this.state.carparks);
//     return this.state.carparks.map((carpark, i) => {
//       return (
//         <li key={i}>
//           {carpark.Area}:{carpark.Development}:{carpark.Lots}
//         </li>
//       );
//     });
//   }
// }

// export default App;
