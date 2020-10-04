import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LifterList.css';
import LifterStatBox from './LifterStatBox';
import Header from './Header';
import Footer from './Footer';
import { Button, Fade, Progress } from 'reactstrap';



function LifterList() {
    
    
    
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
      
      
      <Fade>
          <div className="main">

            <div className="BG">
                <div className="statLine">
                {lifters.map(lifter =>(
                  <LifterStatBox deleteFunction={deleteData} key={lifter.name} name={lifter.name} ID={lifter._id}/>
                  ))}
                </div>
            </div>         
            
            
          
          </div>
        
      </Fade>
    
  );
}

export default LifterList;
