import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotAlbumsAction } from '../../store/actionCreators';

import { HotAlbumWrapper } from './styled'

const HotAlbums = memo(() => {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums:state.getIn(['albums','hotAlbums'])
  }),shallowEqual)
  console.log(hotAlbums);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotAlbumsAction());
  },[dispatch])

  return (
    <HotAlbumWrapper>
      <div className='hot-album-title'>热门新碟</div>
      <div className='hot-album-content'></div>
    </HotAlbumWrapper>
  )
})

export default HotAlbums;