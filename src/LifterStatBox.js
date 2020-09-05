import React,{useState, useEffect} from 'react';
import './LifterStatBox.css';
//import { Alert } from 'reactstrap';

function LifterStatBox({name, maxBench, maxSquat, maxDeadlift, ID}) {
    const [Bench, setBench] = useState(parseInt(maxBench));
    const [Squat, setSquat] = useState(parseInt(maxSquat));
    const [Deadlift, setDeadlift] = useState(parseInt(maxDeadlift));
    const [personID, setID] = useState(ID);
    function getStrong(){
        if((Bench+Squat+Deadlift)>=1000){return true;}
        else{return false;}
    }
    function getTotal(){
        return Bench+Squat+Deadlift;
        
    }
    
    const putData = async (params) => {
        const response = await fetch(`http://ec2-18-218-34-136.us-east-2.compute.amazonaws.com:5000/api/swoldiers`, {
                method: `PUT`,
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
    <div className = "LB">
        <div className="name">
            <h1>{name}</h1>
            
        </div>   
        <hr /> 
            
            <div className="stats">
                
                <div className="weights">
                    <div className="stat">
                    <h3 onClick={()=>{const B = parseInt(prompt('Enter New Bench')); setBench(B); putData({
                                "_id": personID,
                                "maxBench": B,
                                }
                            );}}>Max Bench</h3>
                    <p>{Bench}</p>
                    </div>
                
                    <div className="stat">
                        <h3 onClick={()=>{const S = parseInt(prompt('Enter New Squat')); setSquat(S); putData({
                                "_id": personID,
                                "maxSquat": S,
                                }
                            );}}>Max Squat</h3>
                        <p>{Squat}</p>
                    </div>
                
                    <div className="stat">
                        <h3 onClick={()=>{const D = parseInt(prompt('Enter New Deadlift')); setDeadlift(D); putData({
                                "_id": personID,
                                "maxDeadlift": D,
                                }
                            );}}>Max Deadlift</h3>
                        <p>{Deadlift}</p>
                    </div>
                </div>
                <hr/>
                <div className="total">
                    <div className="stat">
                    <p className="T">Total</p>
                    <h2 className={getStrong() ? "black-bold" : "grey"}>{getTotal()}</h2>
                    </div>
                
                </div>
                
            </div>
        
    </div>
  );
}

export default LifterStatBox;