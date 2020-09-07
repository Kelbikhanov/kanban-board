import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
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
                <Button className="btn-card" variant="contained">{buttonTitle} {" "}</Button>
                <Icon className="close">close</Icon>
            </div>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default TrelloActionButton;