import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.inputLabel}>Name</label>
      <input
        className={css.inputField}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label className={css.inputLabel}>Number</label>
      <input
        className={css.inputField}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button className={css.btn} type="submit">
        Add Number
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
