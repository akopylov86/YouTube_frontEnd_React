import React from "react";

const VideoListItem = ({video, showVideo}) => {
    return (
        <div className="list_item" onClick={()=>{showVideo(video)}}>
            <img className="list_item_img" src={video.snippet.img} alt={video.snippet.description}/>
            <div className="list_item_title">{video.snippet.title}</div>
        </div>
        )
}

export default VideoListItem