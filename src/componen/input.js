import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.handelChange(e.target);
          }}
        />
        <button
          onClick={() => {
            this.props.add(this.props.input);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handelChange: target => {
      dispatch({
        type: 'SET_INPUT',
        value: target.value
      });
    },
    add: input => {
      let obj = { inputValue: input, id: Math.floor(Math.random() * 1000) };
      dispatch({
        type: 'ADD_INPUT',
        value: obj
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
