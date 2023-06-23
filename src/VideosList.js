function VideosList(props) {
    const renderList = () => {
        // code to return a map of video items in an ul. 

        var list = props.videos.map(video => {
            var url = `https://www.youtube.com/embed/${video.id.videoId}`
            return (
         <div className="content">
            <div className="list-1">
            <li><iframe width="160" height="115" src={url} title="YouTube video player"></iframe></li>
            </div>
            <div className="list-2">
            <p>{video.snippet.title}</p>
            <h6>{video.snippet.channelTitle}</h6>
            </div>
            </div>
            )
        })

        return list;

        //videos[0].snippet.thumbnails.default.url
    }
    console.log(props);
    return (
        <div>
            <h1>VideosList</h1>
            {props.videos.length}
            <ul>
                {renderList()}
            </ul>

        </div>
    )
}
export default VideosList;