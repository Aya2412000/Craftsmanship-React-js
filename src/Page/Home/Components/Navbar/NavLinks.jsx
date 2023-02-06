import React from 'react'
import { Link } from './styled'

export default function NavLinks({navLinks,navText,color}) {
  return (
    <div>
      <Link style={{color : color}} href={navLinks}>{navText}</Link>
    </div>
  )
}