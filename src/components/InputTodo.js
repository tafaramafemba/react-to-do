import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
      const errormess = document.querySelector('.error');
      errormess.textContent = '';
    } else {
      const errormess = document.querySelector('.error');
      errormess.style.color = 'red';
      errormess.style.gridColumn = '2/3';
      errormess.textContent = 'Please add a task';
    }

  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            className="input-text"
            type="text"
            placeholder="Add Todo..."
            value={title}
            name="title"
            onChange={this.onChange}
          />
          <button className="input-submit" type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        <p className='error'></p>
      </div>

    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;