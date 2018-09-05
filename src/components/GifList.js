import React from 'react'

import Gif from './Gif'

const GifList = (props) => {
    const gifComponents = props.gifs.map(gif => {
        return (
            <Gif    key={gif.id}
                    gifId={gif.id}
                    gifInfo={gif}
                    deleteGif={props.deleteGif} />
        )
    })

    return (
        <div className="gif-container">
            {gifComponents}
        </div>
    )
}

export default GifList