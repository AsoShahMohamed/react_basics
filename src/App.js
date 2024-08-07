import logo from './logo.svg';
import image from './logo192.png'
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }





// function ButtonComponent() {

//   return (

//     <button>click me</button>
//   );
// }


// function App() {

//   return (

//     <div className='App'>

//       <ButtonComponent />
//     </div>
//   );

// }



// const react = {
//   name: 'react',
//   clarity: 'ambiguous',
//   imageSize: 100

// };
// function App() {

//   return (
//     <>
//       <h1>project : {react.name}</h1>
//       <br></br>
//       <h3> Clarity: {react.clarity}</h3>
//       <br></br>
//       <div >
//         Image: 
//         <img style={{ width: react.imageSize, height: react.imageSize }} src='./logo192.png'></img>
//       </div>

//     </>
//   );
// }


// function InputComponent() {

//   return (

//     <>
//       <label>type text </label>

//       <input type='text' /></>

//   );
// }
// function ButtonComponent() {

//   return (
//     <><label>go to next page</label><button>click</button></>
    
//   );
// }
// function App() {
//   let condition = true;

//   let content;
//   if (condition) {

//     content = <InputComponent />
//   }
//   else {
//     content = <ButtonComponent />
//   }

//   return (<div>{content}</div>);
// }




const names = [
  { name: 'jake', id: 1 },
  { name: 'luke', id: 2 },
  { name: 'sarah', id: 3 },
];

function App(){

const nameList  = names.map(item => <li>{item.name}</li>);

}


export default App;
