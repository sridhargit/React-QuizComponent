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
            {this.props.quiz_question.answer_options.map((index,option) => 
             <QuizQuestionButton button_text={option} key={index} />
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;