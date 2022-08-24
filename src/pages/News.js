import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/News.css';
import NovedadItem from '../components/novedades/NodedadItem';


const News = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() =>{
        const cargarNovedades = async ( ) => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

  return (
    
        
       <section className='holder'>
            <h2 className="title-news">Novedades</h2>
            {loading ? (
                <p> cargando... </p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.descripcion} />)
            )}
       </section>

   

  )
}

export default News