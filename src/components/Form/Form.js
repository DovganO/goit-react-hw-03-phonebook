import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            placeholder="Enter phone number"
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
