import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'reactstrap';
import Api  from '../../Api'

class FollwerForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            followers: [],
            
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Api.search(this.state.handle)
        .then(data => {
            this.setState({followers: data});
            this.props.setFollowers(this.state.followers);
        });
    };

    handleChange = (e) =>{
        this.setState({handle: e.target.value});
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChange}/>
                <Button type="submit">Sumbit</Button>
            </Form>
        )
    }
}

export default FollwerForm;
