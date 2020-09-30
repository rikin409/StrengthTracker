import React,{useState, useEffect} from 'react';
import './LifterStatBox.css';
import ModalExample from './modal';
import { Button, Fade } from 'reactstrap';
//import { Alert } from 'reactstrap';

function LifterStatBox({deleteFunction, name, ID}) {
    
    
    
    const [Bench, setBench] = useState();
    const [Squat, setSquat] = useState();
    const [Deadlift, setDeadlift] = useState();
    const [personID, setID] = useState(ID);
    
    
    useEffect(()=>{
        getData({"_id": personID});
    }, []);
    
    
    
    function getStrong(){
        if((Bench+Squat+Deadlift)>=1000){return true;}
        else{return false;}
    }
    
    function getTotal(){
        return Bench+Squat+Deadlift;
    }
    
    //get request for indiviudal lifter. still comes back as an array. The server associated with these URL's has to be running. technically I did it as a put because the server side API is going to take the body (_id) and then only respond with that particular ID's info.
    const getData = async (params) => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers/ID`, {
                method: `PUT`,
                mode:`cors`,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify(params)
            });
        const data = await response.json();
        setBench(data[0].maxBench);
        setSquat(data[0].maxSquat);
        setDeadlift(data[0].maxDeadlift);
    };
    
    //put request to chnage some of the lifter data
    const putData = async (params) => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers`, {
                method: `PUT`,
                mode:`cors`,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify(params)
            });
        const data = await response.json();
        getData({"_id": personID});
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
                        <h3 onClick={()=>{const B = parseInt(prompt('Enter New Bench'));  
                                              if(!isNaN(B)){putData({"_id": personID, "maxBench": B});}
                                             }}>Max Bench</h3>
                        <p><Fade in={true}>{Bench}</Fade></p>
                    </div>
                
                    <div className="stat">
                        <h3 onClick={()=>{const S = parseInt(prompt('Enter New Squat'));  
                                          if(!isNaN(S)){putData({"_id": personID, "maxSquat": S});}
                                         }}>Max Squat</h3>
                        <p><Fade in={true}>{Squat}</Fade></p>
                    </div>
                    
                    <div className="stat">
                        <h3 onClick={()=>{const D = parseInt(prompt('Enter New Deadlift'));  
                                          if(!isNaN(D)){putData({"_id": personID, "maxDeadlift": D});}
                                         }}>Max Deadlift</h3>
                        <p><Fade in={true}>{Deadlift}</Fade></p>
                    </div>
                    
                </div>
                <hr/>
                <div className="total">
                    <div className="stat">
                    <p className="T">Total</p>
                    <Fade><h2 className={getStrong() ? "black-bold" : "grey"}>{getTotal()}</h2></Fade>
                    </div>
                </div>
                
                
            </div>
            
            <button className="Button  " onClick={()=>deleteFunction({"_id": personID})}>Delete</button>
            
    </div>
  );
}

export default LifterStatBox;