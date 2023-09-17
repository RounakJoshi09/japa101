import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const JapaRecordModal = ({modal,setModal}) => {
  const [japaCount, setJapaCount] = useState('');
  const [date,setDate]  = useState(Date.now());  
  const toggle = () => setModal(!modal);

  const handleSubmit = () => {
    console.log(`Date: ${date}, Japa Count: ${japaCount}`);
    toggle();
  };

  return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ background: '#ffc107', color: '#fff' }}>
          <span role="img" aria-label="prayer">🙏</span> Japa Counter <span role="img" aria-label="prayer">🙏</span>
        </ModalHeader>

        <ModalBody style={{ background: '#fcebc6' }}>
          <FormGroup>
            <Label for="date">Select Date:</Label>
            <Input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label for="japaCount">Enter Japa Count:</Label>
            <Input type="number" name="japaCount" id="japaCount" value={japaCount} onChange={(e) => setJapaCount(e.target.value)} />
          </FormGroup>
        </ModalBody>
        <ModalFooter style={{ background: '#ffc107' }}>
          <Button color="primary" onClick={handleSubmit}>Submit</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
  );
};

export default JapaRecordModal;
