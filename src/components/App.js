import React, {Component} from 'react';
import TrelloList from './TrelloList/TrelloList';
import { connect } from 'react-redux'
import TrelloActionButton from '../components/TrelloActoionButton/TrelloActionButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../action'

import styles from './App.scss'
import Header from './Header/Header';

class App extends Component {
  onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    )
    );
  };

  render() {
  const {lists} = this.props;
  return (
    
    <DragDropContext onDragEnd={this.onDragEnd}>
      
      <div className="app">
      <Header/>
      <div className="title">
        <a>Задачи</a>
      </div>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <div className="container-list" {...provided.droppableProps} ref ={provided.innerRef}>
          {lists.map((list, index) => (
          <TrelloList
            listID={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
            index={index}/>
          ))}
          <TrelloActionButton list/>
          </div>
        )}
      </Droppable>
    </div>
    </DragDropContext>
  );
}
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
