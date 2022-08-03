
// import logo from './logo.svg';
// import './App.css';
// import User from './User';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <User name="Pradnya456" email="pradnya@gmail.com"/>
//     </div>
//   );
// }

// export default App;

// card
// import './App.css';
// import Card from './Card';


// let list_img = [{
//   name: "TajMahal 1",
//   description: "Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631",
//   image: "https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"

// },
// {
//   name: "TajMahal 2",
//   description: "Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631",
//   image: "https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"

// },
// {
//   name: "TajMahal 3",
//   description: "Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631",
//   image: "https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"

// }]


// function App() {
//   return (

//     <div className="App">
//       {
//         list_img.map(element => {
//           return (
//             <div>
//               <Card name={element.name} description={element.description} image={element.image} />
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default App;

import React from "react";
import Emoji from "./Component/Emoji";
import './App.css';


function App(){
  return(
    <div>
    <Emoji/>
    </div>
  )
}
export default App;