import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const Follower = (props) => (
    <Card>
        <CardImg top width="100%" src={props.avatar_url} alt="Card image cap" />
        <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
        </CardBody>
    </Card>
)

export default Follower;