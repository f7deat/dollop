import { useRef } from 'react';
import './App.css';
import useVideoPlayer from './hooks/useVideoPlayer';

function App() {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src="https://v16.tiktokcdn.com/ac36dba23b87a6d79769f58586eefe4a/611bbb06/video/tos/alisg/tos-alisg-pve-0037/1b94095c47654e7ea81e69b986717ca8/"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="fas fa-play"></i>
              ) : (
                <i className="fas fa-pause"></i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="fas fa-volume-up"></i>
            ) : (
              <i className="fas fa-volume-mute"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
