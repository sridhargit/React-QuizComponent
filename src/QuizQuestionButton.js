import React, {Component} from 'react';

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClick =  () => {

    };

    render() { 
        return ( 
            <li>
                <button onClick={this.handleClick}>{this.props.button_text}</button>
            </li>
         );
    }
}
 
export default QuizQuestionButton;