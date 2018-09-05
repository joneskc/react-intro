import React from 'react';

const Gif = (props) => {
    return (
        <img    src={props.gifInfo.gifUrl}
                alt={props.gifInfo.description}
                onClick={props.deleteGif} />
    )
}

export default Gif