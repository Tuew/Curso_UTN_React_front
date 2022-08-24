import React from "react";
import '../../styles/components/pages/News.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div id="novedades">
            <main className="">
                <div className="novedades">
                    <h1>{title}</h1>
                    <h4>{subtitle}</h4>
                    <img className="img-news" src={imagen} />
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    <hr />
                </div>
            </main>
        </div>
    );

}

export default NovedadItem;