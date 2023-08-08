import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaAccessibleIcon } from "react-icons/fa";

function Box(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    
                    <Card.Title>{props.title}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <h1><FaAccessibleIcon/></h1>
        </>
    )
}

export default Box;