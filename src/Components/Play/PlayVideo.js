import React from "react";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

const PlayVideo = (props)  => {
   
    return (
        <React.Fragment>
         <ModalVideo 
            channel='youtube' 
            autoplay 
            isOpen={props.isOpen} 
            videoId={props.videoId}
            autoplay={1}
            onClose={ e => props.isCloseFunction(false)}
         />
        </React.Fragment>
    )
};

export default PlayVideo;