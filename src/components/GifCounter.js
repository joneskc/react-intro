import React from 'react';

const GifCounter = (props) => {
    // have props.count
    return (
        <h2># of Gifs on this Page: {props.count}</h2>
    )
}

export default GifCounter