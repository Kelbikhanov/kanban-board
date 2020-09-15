import React, {Component} from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux'
import TrelloActionButton from '../components/TrelloActoionButton/TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../action'

import styles from './App.scss'

class App extends Component {
  onDragEnd = (result) => {
    const {destination, source, draggableId} = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
    );
  };

  render() {
  const {lists} = this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="app">
      <div className="title">
        <a>This Canban Board App</a>
      </div>
      <div className="container-list">
      {lists.map(list => (
      <TrelloList
        listID={list.id}
        key={list.id}
        title={list.title}
        cards={list.cards}/>
      ))}
      <TrelloActionButton list/>
      </div>
    </div>
    </DragDropContext>
  );
}
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
