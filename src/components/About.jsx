import React from 'react'
import { Link } from 'react-router-dom'

/* stylesheets */
import '../styles/about.css'

/* assets */
import bluesky from '../assets/icons/bluesky.png'
import booth from '../assets/icons/booth.png'
import github from '../assets/icons/github.png'
import icon from '../assets/pages/about/icon.png'
import misskey from '../assets/icons/misskey.png'
import x from '../assets/icons/x.png'

function About() {
  document.title = 'About - archIVe'

  return(
    <>
      <span className='flex-box'>
        <div className='profile'>
          <img className='icon' src={ icon } alt='icon' />
          <p className='name'>N</p>
        </div>

        <div className='block interests'>
          <h2 className='h2-about'>interests</h2>
          <ul className='interests'>
            <li>Cyber Security</li>
            <li>Blockchain</li>
            <li>3DCG</li>
          </ul>
        </div>

        <div className='block links'>
          <h2 className='h2-about'>Links</h2>

          <ul>
            <li><a href='https://twitter.com/arch4e_N'><img src={ x } alt='x ( twitter )' /></a></li>
            <li><a href='https://misskey.io/@arch4e'><img src={ misskey } alt='misskey' /></a></li>
            <li><a href='https://bsky.app/profile/arch4e.bsky.social'><img src={ bluesky } alt='bluesky' /></a></li>
            <li><a href='https://arch4e.booth.pm/'><img src={ booth } alt='booth' /></a></li>
            <li><a href='https://github.com/arch4e'><img src={ github } alt='github' /></a></li>
          </ul>
        </div>

        <div className='block blog'>
          <h2 className='h2-about'>blog</h2>
          <Link to={ `posts` } className='link'>arch4e</Link>
        </div>
      </span>
    </>
  )
}

export default About

