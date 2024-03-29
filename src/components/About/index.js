import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b','o','u','t',' ','m','e']}
              idx={15} />
          </h1>
          <p>I graduated from University of Queensland in December 2022 with a major in Master of Information and Technology. 
            And I got my Bachelor of Science degree at Michigan State University in 2018. </p>
          <p>I have over four years of experience in IT, primarily in software development and two years in web development. 
            My expertise in programming languages such as React, .NET, SQL and Java, combined with my experience with cloud 
            computing platforms like AWS, has allowed me to successfully develop complex web applications. </p>
          <p>I am a self-starter. I can handle my ticket on my own. Also, I can work well with my colleagues on projects. 
            I believe with a team, we can reach our goal much easier. </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About;