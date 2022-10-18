

const VideoDisplay = ({url, title}) => {
console.log(url)

  return (
        <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    )
}

export default VideoDisplay