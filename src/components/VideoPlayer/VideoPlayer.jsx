import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.scss';
import { getObjectSignedUrl } from '../../s3';
import { Spin } from 'antd';

const VideoPlayer = ({ url }) => {
  const [signedUrl, setNewUrl] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    getObjectSignedUrl(url).then((res) => {
      setNewUrl(res);
    });
  }, [url]);

  if (!signedUrl) {
    return (
      <Spin size="large" spinning={true} style={{ translate: '-50%', position: 'absolute', top: '50%', left: '50%' }} />
    );
  }
  return (
    <div>
      <ReactPlayer
        url={signedUrl}
        controls
        playing={playing}
        volume={0.7}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        playbackRate={1.0}
        className={styles.video}
      />
      {!playing && (
        <svg
          className={styles.playButton}
          onClick={() => setPlaying(true)}
          width="128"
          height="128"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.8754 86.9855L87.0174 64.0001L50.8754 40.9827V86.9855ZM64.0044 118.13C56.5851 118.13 49.5832 116.714 42.999 113.88C36.4147 111.046 30.6639 107.171 25.7466 102.254C20.8292 97.3362 16.9537 91.5869 14.12 85.0055C11.2864 78.4242 9.86963 71.4238 9.86963 64.0045C9.86963 56.4962 11.2864 49.4499 14.12 42.8657C16.9537 36.2814 20.8275 30.5522 25.7415 25.6782C30.6555 20.8042 36.404 16.9456 42.987 14.1024C49.5698 11.2592 56.5718 9.83765 63.993 9.83765C71.503 9.83765 78.5514 11.2584 85.1382 14.1C91.725 16.9416 97.4546 20.7979 102.327 25.6691C107.199 30.5403 111.057 36.2684 113.899 42.8535C116.741 49.4387 118.162 56.4875 118.162 64.0001C118.162 71.4224 116.741 78.4255 113.898 85.0094C111.054 91.5933 107.196 97.3426 102.322 102.257C97.4479 107.172 91.7202 111.046 85.1388 113.88C78.5575 116.714 71.5127 118.13 64.0044 118.13ZM64 109.046C76.5372 109.046 87.1792 104.657 95.9262 95.8795C104.673 87.1016 109.046 76.4751 109.046 64.0001C109.046 51.4629 104.673 40.8208 95.9262 32.0739C87.1792 23.3271 76.5319 18.9536 63.984 18.9536C51.5251 18.9536 40.9053 23.3271 32.1247 32.0739C23.344 40.8208 18.9536 51.4682 18.9536 64.0161C18.9536 76.475 23.3426 87.0948 32.1206 95.8754C40.8985 104.656 51.525 109.046 64 109.046Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};

export default VideoPlayer;
