import React, {useContext, useEffect} from'react'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { GlobalContext } from '../context/GlobalState';

const ShoppingList = () => {
    //pulling elements from the context
    const { items } = useContext(GlobalContext);
    const { getItems } = useContext(GlobalContext);
    const { deleteItems } = useContext(GlobalContext);

    useEffect(() => {
        getItems();
      }, []);

    return(
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => deleteItems(_id)}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList;