import React, { useState } from 'react';
import './modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




function ModalExample ({toggleFunction}) {
    
    
    const [modal, setModal] = useState(false);
    var [newName, setName] = useState();
    var [newBench, setBench] = useState();
    var [newSquat, setSquat] = useState();
    var [newDeadlift, setDeadlift] = useState();
    const toggle = () => setModal(!modal);
    
    const postData = async () => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers`, {
                method: `POST`,
                mode:`cors`,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify({"name":newName, "maxBench":newBench, "maxSquat":newSquat, "maxDeadlift":newDeadlift})
            });
        const data = await response.json();
    };
    
    
    const submitHandler = (event) => {
                                event.preventDefault();
                                postData();
                                toggle();
                                };
    const nameChange = (event) => {
                                setName(event.target.value);
                                };
    const benchChange = (event) => {
                                setBench(parseInt(event.target.value));
                                };
    const squatChange = (event) => {
                                setSquat(parseInt(event.target.value));
                                };
    const deadliftChange = (event) => {
                                setDeadlift(parseInt(event.target.value));
                                };

  return (
    <div>
        <button className = "addBTN" onClick={toggle}>Add Swoldier</button>
          
          <Modal isOpen={modal} toggle={toggle} className="center">
              <ModalHeader toggle={toggle}>Please Enter Max Bench</ModalHeader>
            <ModalBody>
                <form onSubmit={submitHandler}>
                    
                    <p className="noM">Name:</p>
                    <input type="text" onChange={nameChange}></input>
                    <p>{newName}</p>
                    <p className="noM">Bench:</p>
                    <input type="text" onChange={benchChange}></input>
                    <p>{newBench}</p>
                    <p className="noM">Squat:</p>
                    <input type="text" onChange={squatChange}></input>
                    <p>{newSquat}</p>
                    <p className="noM">Deadlift:</p>
                    <input type="text" onChange={deadliftChange}></input>
                    <p>{newDeadlift}</p>
                    
                    <input type="submit" className = "submitBTN"/>
                    
                </form>
            </ModalBody>
          </Modal>
    </div>
  );
}

export default ModalExample;