import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css'
import VideosList from './VideosList';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';

const API_KEY = "YOUR API KEY";  // YOUR API KEY ------------------------------------------------------------------

function App() {
  const [videosList, setVideosList] = useState({
    videos: [],
    selectedVideo: null
  });

  const updateSelectedVideo = (video) => {
    setVideosList({
      ...videosList,
      selectedVideo: video
    });
  };

  const makeAPICallToYoutube = (searchTerm) => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=10`;
    axios.get(API_URL)
      .then(response => {
        console.log(response.data);
        setVideosList({
          ...videosList,
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    makeAPICallToYoutube('React');
  }, []);

  const searchTermUpdate = (term) => {
    makeAPICallToYoutube(term);
  };

  return (
    <>
            <SearchBar onSearchtermChange={(searchTerm) => {
        searchTermUpdate(searchTerm);
      }} ></SearchBar> <br></br><br></br>
  <div className="App">
    <div className="VideoPlayer">
      <VideoPlayer selectedVideo={videosList.selectedVideo} />
    </div>
    <div className="VideosList">
      <VideosList onVideoSelect={(data) => updateSelectedVideo(data)} videos={videosList.videos} />
    </div>
  </div>
    </>
  );
}

export default App;