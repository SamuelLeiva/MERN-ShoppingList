import React, {useContext, useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import GlobalContext from '../context/GlobalState';

const ItemModal = () => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const toggle = () =>{
        setModal(!modal);
    }

    const { addItem } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: name
        }

        //Add item via addItem action
        addItem(newItem);

        //close modal
        toggle();
    }

    return (
        <div>
            <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={toggle}
                >Add Item</Button>
            
            <Modal
                isOpen={modal}
                toggle={toggle}
                >
                <ModalHeader>Add to Shopping list</ModalHeader>
            <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add shopping item"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal;
