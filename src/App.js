import logo from './logo.svg';
import './App.css';

import Weekday from './components/Weekday';
// import {aFunnction} from './components/Weekday'
function App() {
  // array of weekdays
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 
  'Wednesday', 'Thursday', 'Friday', 
  'Saturday']
  // loop
  return (
    <div className="App">
     <h1>June 2022</h1>
     <div>
       {weekdays.map( (weekday, index) => {
         return <Weekday day={weekday} key={index}/>
       })}
       {/* {aFunktion('some input')} */}
       
      
     </div>   
    </div>

  );
}

export default App;
