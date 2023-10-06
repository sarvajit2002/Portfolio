import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
    
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
    const projects = [
      {
        name: 'Dance Class Website',
        description: 'A Dance Class Website using HTML,CSS,JavaScript.',
        link: 'https://github.com/sarvajit2002/dance-website.git',
      },
      {
        name: 'A Blog Posting Website',
        description: ' Blog Posting Website using React, Node.js and Express.js.',
        link: 'https://github.com/sarvajit2002/Blog-App.git',
      },
    ];
  return (
    <>
    <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't','s']}
              idx={15}
            />
          </h1>
      
     
      </div>
    <div className="project-boxes">
    {projects.map((project, index) => (
  <div key={index} className="project-box">
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <h3>Learn More</h3>
    </a>
  </div>
))}
    </div>
      </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Project