import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
  return (
    <div className='container project page'>
        <div className="text-zone">
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o','j', 'e','c','t','s']}
              idx={15}
            />
             
            </h1>
        </div>

    </div>
  )
}

export default Project