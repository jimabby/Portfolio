import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxvllnw','template_e9s4prq',form.current,'RsMGDSFegXHpttgll').then((result) => {
      alert('Message successfully sent!')
      window.location.reload(false)
    }, (error) => {
        alert('Failed to send the message, please try again!')
      });
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}  
            />
          </h1>
          <p>
            I'm interested in Web Developer opportunities - especially ambicious on large projects.
            If you have requests or questions, do not hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder=' Email' required />
                </li>
                <li>
                  <input  type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Weidong Kong,
          <br />
          Brisbane, Australia
          <br />
          <span>wksunshine@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[-27.47678, 153.01587]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-27.47678, 153.01587]}>
              <Popup>Jim lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
} 

export default Contact;