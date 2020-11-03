import React, { useEffect, useState } from 'react'
import './styles.css'

function Nav () {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-2-1.png'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
        alt='Netflix Avatar'
      />
    </div>
  )
}

export default Nav
