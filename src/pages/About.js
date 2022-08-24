import React from 'react';
import '../styles/components/pages/About.css';
import aboutPhoto from '../media/aboutPhoto.jpg';
import nosotros1 from '../media/nosotros1.jpg';


const About = () => {
    return (
        <div id="about" className="about">
            <section className="about-section">
                <div className='main'>
                    <img src={aboutPhoto}></img>
                    <div className='about-text'>
                        <h1>Sobre <span>Nosotros</span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada neque ante, quis pretium purus sollicitudin eu. Fusce leo ante, elementum quis hendrerit vitae, iaculis vel felis. Nullam sodales neque nec risus suscipit tempus. Maecenas nibh est, convallis eu dui ac, feugiat pretium nibh. Curabitur consequat sit amet tortor ut tincidunt. Ut ullamcorper aliquam libero vitae dictum.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada neque ante, quis pretium purus sollicitudin eu. Fusce leo ante, elementum quis hendrerit vitae, iaculis vel felis. Nullam sodales neque nec risus suscipit tempus. Maecenas nibh est, convallis eu dui ac, feugiat pretium nibh. Curabitur consequat sit amet tortor ut tincidunt. Ut ullamcorper aliquam libero vitae dictum.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada neque ante, quis pretium purus sollicitudin eu. Fusce leo ante, elementum quis hendrerit vitae, iaculis vel felis. Nullam sodales neque nec risus suscipit tempus. Maecenas nibh est, convallis eu dui ac, feugiat pretium nibh. Curabitur consequat sit amet tortor ut tincidunt. Ut ullamcorper aliquam libero vitae dictum.
                        </p> 
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default About