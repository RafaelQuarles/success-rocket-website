import React from 'react';
import styled from 'styled-components';

const StyledContactFormContainer = styled.div`
  border-radius: 5px;
  margin: 20px 0 20px 0;
  padding: 0px;
`;

const StyledContactFormWrapper = styled.div`
  /* Style inputs with type="text", select elements and textareas */
  input[type='text'],
  select,
  textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  }

  /* Style the submit button with a specific background color etc */
  input[type='submit'] {
    filter: drop-shadow(0px 0px 5px #fff);
    -webkit-filter: drop-shadow(0px 0px 5px #fff);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  /* When moving the mouse over the submit button, add a darker green color */
  input[type='reset']:hover {
  }

  input[type='reset'] {
    filter: drop-shadow(0px 0px 5px #fff);
    -webkit-filter: drop-shadow(0px 0px 5px #fff);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  /* When moving the mouse over the submit button, add a darker green color */
  input[type='submit']:hover {
  }

  ul {
    padding-inline-start: 0px;
    display: flex;
    justify-content: space-between;
  }

  ul > li {
  }
`;

const ContactForm = () => {
  return (
    <StyledContactFormContainer>
      <StyledContactFormWrapper>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input className="focus:outline-none" type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input className="focus:outline-none" type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea className="focus:outline-none" name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="bg-primary 
        hover:bg-primary-darker"
              />
            </li>
            <li>
              <input type="reset" value="Clear" className="bg-gray-700 hover:bg-gray-600" />
            </li>
          </ul>
        </form>
      </StyledContactFormWrapper>
    </StyledContactFormContainer>
  );
};

export default ContactForm;
