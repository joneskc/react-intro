import React from 'react';

const Gif = (props) => {
    return (
        <img    src={props.gifInfo.gifUrl}
                alt={props.gifInfo.description}
                onClick={(event) => props.deleteGif(event, props.gifId)} />
    )
}

export default Gif