import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
            <nav className='Nav'> 
                <div className='logo'>
                  <img src="https://www-cms.pipedriveassets.com/Company-logos/G2.png" alt="img" />  
                </div> 
                <div>
                   <ul className='nav-links'>
                        <li><a href="#">a propos</a></li>
                        <li><a href="#">solution</a></li>
                        <li><a href="#">tarifs</a></li>
                    </ul>
                </div>
                <div className='sign'>
                <button type="button" class="btn btn-primary">Essai gratuit</button>
                <button type="button" class="btn btn-secondary">Se connecter</button>
                    
                </div>
            </nav>
    );
}

export default Navbar;
