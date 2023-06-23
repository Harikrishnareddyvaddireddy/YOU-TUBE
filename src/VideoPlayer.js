function VideoPlayer(props) {

    if (props.selectedVideo == null) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    else {
        //selectedVideo.id.videoId

        var url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}?modestbranding=1`
        return (
            <div>
                <div className="videoWrapper">
                <iframe width="860" height="415" src={url} title="YouTube video player"></iframe>
                </div>
                <h3>{props.selectedVideo.snippet.title}</h3>
                <h4>{props.selectedVideo.snippet.channelTitle}</h4>
            </div>
        )
    }
};
export default VideoPlayer;