import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail, validateInput } from '../../utils/helpers';

export default function Contact() {
  var newName = newName;
  var newEmail = newEmail;
  var newMessage = newMessage;

  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    
    if (!newName) {
      setErrorMessage('Name is missing, please provide your name!');

      return e.target.reset();

    }
    if (!validateEmail(newEmail)) {
      setErrorMessage('Email is invalid');

      return e.target.reset();

    }
    if (!newMessage) {
      setErrorMessage('Message is missing, please provide a message!');

      return e.target.reset();

    }
    
    emailjs.sendForm(
      'service_93p5os3',
      'template_x3tk4je',
      form.current,
      '5vCxrVoi6nK138Vam'
    )
      .then((result) => {
        console.log(result.text);
        console.log(form);         // <form ref={form} onSubmit={sendEmail}>
        alert("Message sent, We will get back to you shortly!");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleFocus = (e) => {
    e.preventDefault();
    setErrorMessage('')
    console.log(e.target.value);

  };

  const handleBlur = (e) => {
    e.preventDefault();

    console.log(newName);
    if (!validateInput(e.target.value)) {
      setErrorMessage('Please enter a valid input!')

      return;
    };

    console.log(e.target.value);
  };

  const handleName = (e) => {
    e.preventDefault();

    return newName = e.target.value;

  };

  const handleEmail = (e) => {
    e.preventDefault();

    return newEmail = e.target.value;

  };

  const handleMessage = (e) => {
    e.preventDefault();

    return newMessage = e.target.value;

  };

  return (
    <section className="contact">
      <h1>Contact form</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="input" onChange={handleName} onFocus={handleFocus} onBlur={handleBlur} />
        <label>Email</label>
        <input type="email" name="user_email" className="input" onChange={handleEmail} onFocus={handleFocus} onBlur={handleBlur} />
        <label>Message</label>
        <textarea name="message" className="input" onChange={handleMessage} onFocus={handleFocus} onBlur={handleBlur} />
        <input className="submit" type="submit" value="Send" />
      </form>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}


    </section>
  );
}
