import React, { useState } from 'react';
import './modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




function ModalStat ({ID, Workout, refresh}) {
    
    let workout = "max" + Workout;
    const [modal, setModal] = useState(false);
    var [newMax, setMax] = useState();
    const toggle = () => setModal(!modal);
    
    const putData = async () => {
        const response = await fetch(`http://riksdomain.com:5000/api/swoldiers`, {
                method: `PUT`,
                mode:`cors`,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                },
                body: JSON.stringify({"_id" : ID, [workout] : newMax})
            });
        const data = await response.json();
        refresh();
    };
    
    
    const submitHandler = (event) => {
                                event.preventDefault();
                                if(newMax !== 0){
                                    putData();
                                }
                                toggle();
                                };
    const maxChange = (event) =>{
                                setMax(parseInt(event.target.value));
                                };

  return (
    <div>
        <h3 onClick={toggle}> Max {Workout}</h3>
          <Modal isOpen={modal} toggle={toggle} className="center">
              <ModalHeader toggle={toggle}>Please Enter {Workout}</ModalHeader>
            
                <ModalBody className="modalBody">
                
                    <form onSubmit={submitHandler}>
                        <input type="text" onChange={maxChange} placeHolder={Workout}></input>
                        <input type="submit" className = "submitBTN"/>
                    </form>
                
                </ModalBody>
          </Modal>
    </div>
  );
}

export default ModalStat;