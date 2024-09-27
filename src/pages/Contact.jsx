import React from 'react';

function Contact() {

  let onSubmit; // add direct link to email if sent to prospective. Change decleration to const + function. Leave blank or commented out if deploying to a public github to prevent spam to that address via scrapers and web-crawlers.
  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label>Enter Your Email Address</label>
          <input type="text" className="input" placeholder='Enter email' name='email' required/>
        </div>
        <div className="input-box">
          <label>Enter Your Message Here</label>
          <textarea name="message" className="input" placeholder='Enter your message' required></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Contact