import React from 'react'
import { Row, Col } from 'reactstrap';
import Follower from '../follower';

const Followers = (props) => {
	console.log(props)
	return (
		<div>
			<Row>
				{
					props.followers.map(
						follower => <Col md="2">
						<Follower key={follower.id} {...follower}/>
					</Col>)
				}
			</Row>
		</div>
	);
};

export default Followers;