import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card'
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

        const buttonTitle = list ? "Добавить список" : "Добавить карточку";
        return <div>
            <Card>
                <Textarea placeholder={placeholder} autoFocus/>
            </Card>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default TrelloActionButton;