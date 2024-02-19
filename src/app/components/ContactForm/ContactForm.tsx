"use client";
import React, { useState, FormEvent } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

export type ContactFormData = {
  email: string;
  message: string;
  phone: string;
}

type Result = {
  message: string;
  ok: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    message: '',
    phone: '',
  });
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');
  const [result, setResult] = useState<Result | null>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidMessage = (message: string) => {
    return message.length > 0;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setEmailError('Invalid email');
      return;
    }
    if (!isValidMessage(formData.message)) {
      setMessageError('Write something :(');
      return;
    }
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success response
        setFormData({
          email: '',
          message: '',
          phone: '',
        });
        setResult({ message: 'Thank you for reaching out!', ok: true });
        setTimeout(() => {
          setResult(null);
        
        }, 3000);
      } else {
        setResult({ message: 'Something went wrong', ok: false });
        setTimeout(() => {
          setResult(null);
        
        }, 3000);
      }
    } catch (error) {
        setResult({ message: 'Something went horribly wrong.', ok: false });
        setTimeout(() => {
          setResult(null);
        
        }, 3000);
    }
  };

  const withZero = (num: number) => {
    if (num === 0) return '0';
    return num < 10 ? `0${num}` : num;
  }

  return (
    <form className="contact-form"
      action="https://docs.google.com/forms/d/e/1SDcBIQAgDYYRisaLqbkfncg0MMM7B1muju-TcV3xJT0/formResponse"
      method="POST" 
      target="_blank" // Optional: opens the submission result in a new tab
    >
      <h2>contact</h2>
      <div className="input-group">
        <label htmlFor="email" className="form-label">email</label>
        <input
          className="input"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="off"
          type="email"
          maxLength={45}
          onFocus={() => {
            setEmailError('')
            setResult(null)
          }}
        />
        {emailError && <label className="error-label">{emailError}</label>}
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="message" className="form-label">message</label>
        </div>
        <textarea
          className="textarea"
          id="message"
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={300}
          onFocus={() => {
            setMessageError('')
            setResult(null)
          }}
        />
        <input autoComplete='off' type="text" name="phone" className="phone" value={formData.phone}/>
        {messageError && <label className="error-label">{messageError}</label>}
        {!result &&
          <div className="label-group">
            <label className="form-label green-label">{withZero(formData.message.length)}</label>
            <label className="form-label">/ 300</label>
          </div>
        }
        {result?.ok &&
          <div className="label-group">
            <label className="form-label green-label">{result.message}</label>
          </div>
        }
        {result && !result?.ok &&
          <div className="label-group">
            <label className="form-label red-label">{result.message}</label>
          </div>
        }
      </div>
      <Button title="submit()" onClick={handleSubmit}/>
    </form>
  );
};

export default ContactForm;
