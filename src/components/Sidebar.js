import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props)
{
    return(
        <>
            <div className="recent-container">
                    <img className="recent-img" src={props.data.url}/>
                <div>
                    <Link className="recent-link" to={`/${props.data.id.toString()}`}>
                        <h3 className="s-p-title">{props.data.title}</h3>
                    </Link>
                    <p className="s-p-date">{props.data.date}</p>
                </div>
                
            </div>
            <hr/>
        </>
    )
}
export default Sidebar