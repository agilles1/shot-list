import React, { useState } from 'react'
import VideoElement from '../components/VideoElement'

function VideoContainer() {

    return (
        <div>
            <VideoElement/>
                <hr/>
            <VideoElement/>
        </div>
    )
}

export default VideoContainer