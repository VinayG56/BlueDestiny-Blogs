import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7u8g7h9', 'template_rkburbh', form.current, {
        publicKey: 'Vm_x2LH3123DE8pti',
      })
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Contact</h2>
        <span className="section_subtitle">Stay in Touch with Us!</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to Us</h3>
                
                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>
                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">support@bblogwritings.com</span>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">9848942437</span>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-facebook contact_card-icon"></i>
                        <h3 className="contact_card-title">Facebook</h3>
                        <span className="contact_card-data">B-Blog Writings</span>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write Your Query to Us</h3>

                <form ref={form} onSubmit={sendEmail} action="" className="contact_form">
                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag">Name</label>
                        <input type="text" name='name' className="contact_form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag">Email</label>
                        <input type="email" name='name' className="contact_form-input" placeholder='Enter your email'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label htmlFor="" className="contact_form-tag">Query</label>
                        <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder='write your query'></textarea>
                    </div>

                    <button className="button button_flex">Send Message
                    </button>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact
