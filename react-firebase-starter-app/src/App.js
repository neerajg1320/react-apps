import {useState} from 'react';
import database from './firebase';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);


  // Push Function
  const Push = () => {
    database.ref("user").set({
      name: name,
      age: age
    }).catch(alert);
  }

  
  return (
    <div className="App" style={{marginTop: 250}}>
      <center>
        <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <br/><br/>
        <input placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
        <br/><br/>
        <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}

export default App;
