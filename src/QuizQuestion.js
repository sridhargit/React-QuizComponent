import React,{ Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  render(){
    return(
	  <main>
        <section>
         <p key={this.props.quiz_question.instruction_text}>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((index,answer_option) => {
             return <QuizQuestionButton key={index} button_text={answer_option} />
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;