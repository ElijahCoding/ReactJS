import React, { Component } from 'react'

class Tracks extends Component {
    render () {
        const { tracks } = this.props

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track

                        return (
                            <div
                                key={id}
                                className='track'
                                >
                                <img
                                  src={album.images[0].url}
                                  alt='track-image'
                                  className='track-image'
                                />
                                <p className='track-text'>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks
