import React from 'react'
import emailjs from '@emailjs/browser'

export const EmailForm = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = 'service_k9ke0ng'
        const templateId = 'template_vv8n6rm'
        const publicKey = 'Ov870F14fYqFewIpA'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'test',
            message: message,
            reply_to: email
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Error sending email:', error);
            });
    }

    return (
       
        <div className="contact">
             <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit} className='emailForm'>
            <input 
                type="text" 
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea 
                cols='30'
                rows='10'
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='button'>Send Email</button>
        </form>
        </div>
    )
}