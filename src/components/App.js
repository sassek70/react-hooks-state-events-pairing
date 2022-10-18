import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay url={video.embedUrl} title={video.title}/>
      <VideoDetails video={video} />
    </div>
  );
}

export default App;
