import React, {Component} from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux'
import TrelloActionButton from '../components/TrelloActoionButton/TrelloActionButton'

import styles from './App.scss'

class App extends Component {
  render() {
  const {lists} = this.props;
  return (
      <div className="app">
      <div className="title">
        <a>This Canban Board App</a>
      </div>
      <div className="container-list">
      {lists.map(list => (<TrelloList
        key={list.id}
        title={list.title}
        cards={list.cards}/>
      ))}
      <TrelloActionButton list/>
      </div>
    </div>
    
  );
}
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
