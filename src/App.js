import { Component, Fragment } from 'react';
import './App.css';
import { Card } from "./components/Card"
import { Modal } from "./components/Modal"
import { Comments } from './components/Comments';
import { Comment} from './components/Comment'


class App extends Component {
  constructor() {
    super();

    this.state = {
      launches: []
    }
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then(launches => this.setState({ launches: launches }))
  }


  render() {
    return (
      <div className="container">
        <h1>SpaceX Launches</h1>
        <div className="row">
          {this.state.launches.map((launch) => (
            <Fragment>
              <Card launch={launch} />
              <Modal launch={launch}/>
              <Comments launch={launch} currentUserId="1"/>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
