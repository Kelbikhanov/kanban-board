import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {addList, addCard} from '../../action'
import styles from './TrelloActionButton.scss'

class TrelloActionButton extends React.Component {

    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState ({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState ({
                text: ""
            });
            dispatch(addList(text))
        }
        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState ({
                text: ""
            });
            dispatch(addCard(listID, text));
        }
    };

    renderAddButton = () => {
        const { list } = this.props;
        const ButtonText = list ? "Добавить задачу" : "Добавить карточку";
        const ButtonTextOpacity = list ? 1 : 0.5 ;
        const ButtonTextColor = list ? "white" : "inherit";
        const ButtonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";


        return (
            <div
            onClick={this.openForm}
             className="trello-button"
             style={{
             opacity: ButtonTextOpacity,
             color: ButtonTextColor,
             backgroundColor: ButtonTextBackground
             }}>
                <Icon>add</Icon>
                <p>{ButtonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const {list} = this.props;
        const placeholder = list ? "Добавьте задание..." : "Введите новое задание...";

        const buttonTitle = list ? "Добавить список" : "Добавить";
        return <div>
            <Card className="card">
                <Textarea
                className="textarea"
                 placeholder={placeholder}
                 autoFocus 
                 onBlur={this.closeForm}
                 value={this.state.text}
                 onChange={this.handleInputChange}/>
                
            </Card>
            <div className="btn-group">
                <Button
                 onMouseDown={list ? this.handleAddList : this.handleAddCard}
                 className="btn-card"
                 variant="contained">{buttonTitle} {" "}</Button>
                <Icon className="close">close</Icon>
            </div>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect() (TrelloActionButton);