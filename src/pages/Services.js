import React from 'react';
import '../styles/components/pages/Services.css';
import servicio1 from '../media/servicio1.jpg';
import servicio2 from '../media/servicio2.jpg';
import servicio3 from '../media/servicio3.jpg';
import servicio4 from '../media/servicio4.jpg';

const Services = () => {
    return (
        <div id="servicios">
            <div className="title">
                <h1>En Coffee<span>Time</span> ofrecemos</h1>
            </div>
            <div className="servicio">
                <img src={servicio1} alt=''></img>
                <div className="info">
                    <h4>Cafeteria</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illo aspernatur consequatur maiores commodi itaque delectus similique eligendi porro perspiciatis at officiis. Perspiciatis itaque impedit mollitia omnis expedita nesciunt cumque!</p>
                </div>
            </div>

            <div className="servicio">
                <img src={servicio2} alt="" />
                <div className="info">
                    <h4>Pasteleria</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illo aspernatur consequatur maiores commodi itaque delectus similique eligendi porro perspiciatis at officiis. Perspiciatis itaque impedit mollitia omnis expedita nesciunt cumque!</p>
                </div>
            </div>

            <div className="servicio">
                <img src={servicio4} alt="" />
                <div className="info">
                    <h4>Desayunos y Delicias</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illo aspernatur consequatur maiores commodi itaque delectus similique eligendi porro perspiciatis at officiis. Perspiciatis itaque impedit mollitia omnis expedita nesciunt cumque!</p>
                </div>
            </div>


            <div className="servicio">
                <img src={servicio3} alt="" />
                <div className="info">
                    <h4>Jugos Naturales</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illo aspernatur consequatur maiores commodi itaque delectus similique eligendi porro perspiciatis at officiis. Perspiciatis itaque impedit mollitia omnis expedita nesciunt cumque!</p>
                </div>
            </div>

        </div>
    )
}

export default Services