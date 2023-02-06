import React from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../../design-system/Config';
import Links from './Links';
import NavLinks from './NavLinks';

export default function NavItems() {
    const items = Links(); // Data of Links
    const route = useLocation(); // to detect the Path of Link
  return items.map((link,index)=>{
    return(
        <NavLinks 
        color={route.pathname === link.navLinks ? theme.primary : ""}
        navLinks={link.navLinks} 
        navText={link.navText} 
        key={index}/>
    )
})}