import React from 'react';
import '../../../../design-system/main.css';
import NavItems from './NavItems';
import { Herfa, LinkWrapper, Navbarwrapper, Navcontent, Navtitle } from './styled';
export default function Navbar() {
  return (
    <Navbarwrapper>
      <div className='container'>
        <Navcontent>
            <div style={{cursor:"pointer"}}>
                <Navtitle>H <Herfa>erfa</Herfa></Navtitle> 
            </div>
            <LinkWrapper >
                <NavItems/>
            </LinkWrapper>
        </Navcontent>
      </div>
    </Navbarwrapper>
  )
}
