
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LifterStatBox from './LifterStatBox';
import Header from './Header';
import ModalExample from './modal';

function App() {
    
    
    
    const [lifters, setLifters] = useState([]);
    
    useEffect(()=>{
        getData();
    });
    
    const getData = async () => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers`);
        const data = await response.json();
        setLifters(data);
    };
    
    const deleteData = async (params) => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers`, {
                method: `DELETE`,
                mode:`cors`,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify(params)
            });
        const data = await response.json();
    };
    
  return (
      <div>
            <Header />
          
          
            <div className="statLine">
            {lifters.map(lifter =>(
              <LifterStatBox deleteFunction={deleteData} key={lifter.name} name={lifter.name} ID={lifter._id}/>
              ))}
            </div>
            
            
                
             

      </div>
    
  );
}

export default App;
