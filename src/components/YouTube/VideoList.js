import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({videos, showVideo}) => {
    const videoList = videos.map(video => {
        return <VideoListItem key={video.videoId} video={video} showVideo={showVideo}/>
    })

    return (
        <div className="video_list">
            <div className="video_list_title">Next videos:</div>
            {videoList}
        </div>
    )
}

export default VideoList