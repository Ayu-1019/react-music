import React, { memo } from 'react';

import { PlayerBar } from './style';

const ZXYPlayerSongBar = memo((props) => {

  const { favorTitle, shareTitle, commentTitle, subscribed, shareCount, commentCount } = props;
  const downloadTitle = "下载";
  
  return (
    <PlayerBar>
      <span className="play">
        <a href="/abc" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button">+</a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle || subscribed}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle || shareCount}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle || commentCount}</i>
      </a>
    </PlayerBar>
  )
})

export default ZXYPlayerSongBar;