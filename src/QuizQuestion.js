import React,{ Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

  constructor(props){
    super(props);
    this.state = {
      incorrectAnswer : false
    }
  }
  handleClick (buttonText) {
    let incorrectAnswer = true;
    if(buttonText === this.props.quiz_question.answer){
        incorrectAnswer = false;
        this.props.showNextQuestionHandler();
    }

    this.setState({
      incorrectAnswer
    })
  }

  render(){
    return(
	  <main>
        <section>
         <p key={this.props.quiz_question.instruction_text}>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option,index) => {
             return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>
            })}
          </ul>
        </section>
        {this.state.incorrectAnswer === true ? 
        <p className='error'>Sorry, that's not right!!!</p> : null
       }
      </main>
    );
  }
}

export default QuizQuestion;