import React from 'react';
import '../styles/components/pages/Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div id="img" className="container"> 
             <div className="bienvenidos">
                <h2>Bienvenido a <span>CoffeeTime</span></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores corporis eveniet dicta voluptatibus natus quae a. Provident voluptatum vel similique doloremque voluptas animi pariatur, iure hic deserunt excepturi ad architecto.</p>
                <NavLink to={"/about"}><span>C</span>omencemos</NavLink>
            </div>        
        </div>
  )
}

export default Home