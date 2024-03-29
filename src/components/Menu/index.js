import React from 'react'; 
import {Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/LogoDefinitiva.png';
import './Menu.css';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
       <nav className="Menu">
         <Link to="/">
          <img className= "Logo" src={Logo} alt="BatmanFlix logo" />    
         </Link>

         <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
           Novo vídeo
         </Button>
       </nav>
    );
}

export default Menu;