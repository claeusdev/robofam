import React from "react";

const Card  = (props) => {
    return (
        <div className="dib br3 grow tc bg-light-yellow bw2 shadow-5 pa2">
            <img alt="robopals" src={`https://robohash.org/${props.id}?200x200`} />
            <h2>{props.name}</h2>
            <h4>{props.username}</h4>
        </div>
    )

}

export default Card