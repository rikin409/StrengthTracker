
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LifterStatBox from './LifterStatBox';
import Header from './Header'

function App() {
    
    const [lifters, setLifters] = useState([]);
    
    useEffect(()=>{
        getData();
    }, []);
    
    const getData = async () => {
        const response = await fetch(`ec2-3-13-91-221.us-east-2.compute.amazonaws.com:5000/api/swoldiers`);
        const data = await response.json();
        setLifters(data);
    };
    
    
  return (
      <div>
          <Header />
            <div className="statLine">
          
            {lifters.map(lifter =>(
              <LifterStatBox key={lifter.name} name={lifter.name} maxBench={lifter.maxBench} maxSquat={lifter.maxSquat} maxDeadlift={lifter.maxDeadlift} ID={lifter._id}/>
              ))}
            </div>
      
      
      
      
      
      </div>
    
  );
}

export default App;
