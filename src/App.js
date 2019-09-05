import React, {PureComponent} from 'react';
import { Container } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import FollowerForm from './components/form';
import Followers from './components/followers';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent{
  state = {
    followers: [],
  };

  setFollowers = (followers) =>{
    this.setState({followers});
  }
  
  render(){
    return (
      <div>
        <Container>
          <FollowerForm setFollowers={this.setFollowers} />
          <Followers followers={this.state.followers}/>
        </Container>
      </div>
    );
  }
}

export default App;
