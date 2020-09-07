import React, { useState } from 'react'
import Link from 'next/link'

export default function ContactForm(props) {

  const [submitted, setSubmitted] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitted(true)
  }

  const responseHtml = <div>
    Thank you {name}. Your message was submitted.
  </div>

  return (
    <>
      {submitted && responseHtml}

      {!submitted &&
        <form action="/contacts/send" method="POST" onSubmit={handleSubmit}>
          <div className="alert">
            Message
          </div>
          <div>
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
            </fieldset>

            <fieldset>
              <label htmlFor="phone">Phone:</label>
              <input type="phone" name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
            </fieldset>

            <fieldset>
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" required
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
            </fieldset>

            <fieldset>
              <label for="message">Message:</label>
              <textarea name="message" required
                  onChange={e => setMessage(e.target.value)}
                >{message}</textarea>
            </fieldset>

            <input type="submit" value="Submit" />
          </div>
        </form>
      }
    </>
  )
}
