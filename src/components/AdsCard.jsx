import React, { useEffect } from 'react'

function AdsCard(props) {
  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== 'development') {
      window.adsbygoogle.push({})
    }
  }, [])

  if (window.innerWidth > 1024) {
    // Multiplex Ads
    return (
      <>
        <ins className='adsbygoogle'
          style={ { 'display': 'block' } }
          data-ad-client='ca-pub-8880093889400578'
          data-ad-slot='4843648788'
          data-ad-format='auto'
          data-full-width-responsive='true'></ins>
      </>
    )
  } else {
    // Display Ads
    return (
      <>
        <ins className='adsbygoogle'
          style={ { 'display': 'block' } }
          data-ad-format='autorelaxed'
          data-ad-client='ca-pub-8880093889400578'
          data-ad-slot='4332798305'></ins>
      </>
    )
  }
}

export default AdsCard
