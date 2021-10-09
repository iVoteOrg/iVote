import logo from './logo.svg';
import './App.css';
import CC from './CC'
import FC from './FC'
import PC from './parent'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1 style={{color:'red', backgroundColor:'primary'}}>This is State Lecture</h1>
      <CC/>
      
      {/* { <FC/>
      <PC/>} */}
    </div>
  );
}

export default App;
