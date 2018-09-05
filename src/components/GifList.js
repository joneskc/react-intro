import React from 'react'

import Gif from './Gif'

const GifList = (props) => {
    const gifComponents = props.gifs.map(gif => {
        return (
            <Gif gifInfo={gif} key={gif.id} />
        )
    })

    return (
        <div>
            {gifComponents}
        </div>
    )
}

export default GifList