import React, { useState } from 'react';
import Modal from 'react-modal'
import '../styles/sign-up-modal.css'

Modal.setAppElement('#root'); // Set the root element for accessibility

const SignupModal = ({ isOpen, signUpModalStyles, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here with the form data
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Close the modal after form submission
    onClose();
  };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="sign-up-modal" // Adjusted class name
    overlayClassName="sign-up-modal-overlay" // Adjusted class name
    contentLabel="Signup Modal"
    style="signUpModalStyles" 
    >
      <button className="close-icon" onClick={onClose}>
        &times;
      </button>
      <h2>Create Account</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        I have an account{' '}
        <button onClick={onClose} className="signin-link">
          Sign In
        </button>
      </p>
    </Modal>
  );
};

export default SignupModal;
