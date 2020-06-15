import React from "react";
import VideoList from "./VideoList";

const VideoPlayer = ({state, showVideo}) => {
    if (!state.currVideo){
        return <div style={{marginTop: '2em'}}>Как насчет того, чтобы найти что-то интересное?</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${!state.currVideo ? "V1rhxheJg4A" : state.currVideo.videoId}`;

    return (
        <div className="player_container">
            <div className="player">
                <iframe src={videoSrc} className="player_emb" allowFullScreen title='Video player'/>
                <h3>{state.currVideo.snippet.description}</h3>

            </div>
            <VideoList videos={state.vids} showVideo={showVideo}/>
        </div>
    )
}

export default VideoPlayer