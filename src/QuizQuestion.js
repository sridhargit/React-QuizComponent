import React, { Component } from 'react';

class QuizQuestion extends Component {
  render(){
    return(
      <div>
        <div>
          <p key={this.props.question.instruction_text}>{this.props.question.instruction_text}</p>
        </div>
        <div className="buttons">
          <ul>
            {this.props.question.answer_options.map((option) => 
             <li key={option}>{option}</li>
            )}
          </ul>
        </div>
      </div>

    );
  }
}

export default QuizQuestion;