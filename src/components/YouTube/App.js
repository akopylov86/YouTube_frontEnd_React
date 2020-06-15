import React, {useState} from 'react';
import SearchBox from "./SearchBox";
import VideoPlayer from "./VideoPlayer";
import youtube from "../../api/youtube";

 function App() {

  let [data, setData] = useState({vids: [], currVideo: null})

  async function searchHandler(query)  {
      // const response = [{videoId:"V1rhxheJg4A",
      //     snippet:{
      //         title:'JS React',
      //         description: 'JS React',
      //         img:"https://i.ytimg.com/vi/Nm8GpLCAgwk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAhpAQj5bPK5oC3lajQ9l5-I8VJuQ"
      //     }
      // },
      //     {videoId:"Nm8GpLCAgwk",
      //         snippet:{
      //             title:'React vs Vue',
      //             description: 'React vs Vue',
      //             img:"https://i.ytimg.com/vi/Nm8GpLCAgwk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAhpAQj5bPK5oC3lajQ9l5-I8VJuQ"
      //         }
      //     }]
      const response = await youtube.get('/search', {
          params: {q: query}
          }
      )

      setData({vids: response, currVideo: response[0]})

  }

  function showVideo(video){
      setData({currVideo: video, vids: data.vids})
  }

  return (
    <div className="App">
        <nav className="navbar navbar-light bg-primary text-light">
            <strong className="navbar-brand text-light">YouTube APP</strong>
            <SearchBox searchHandler={searchHandler}/>
        </nav>
        <VideoPlayer state={data} showVideo={showVideo}/>
    </div>
  );
}

export default App;
