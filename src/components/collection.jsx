import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import BasicModal from './modal';
import { useState } from 'react';



export const Collection = ({ name, category, photos }) => {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = useState('')
  const handleOpen = (e) => {
    setOpen(true);
    setUrl(e)
  }
  const handleClose = () => setOpen(false);
  

  return (
    <>
      <ImageList sx={{ width: 500, height: 400, backgroundColor: '#fff', padding: '15px', cursor: 'pointer', borderRadius: '15px' }} cols={2} rowHeight={164}>
        {photos.map((item) => (
          <ImageListItem key={item} >

            <img
              onClick={()=>handleOpen(item)}
              style={{ borderRadius: '15px' }}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        <Typography variant='h5'>{name}</Typography>
      </ImageList>
      {open && <BasicModal open={open} handleClose={handleClose} url = {url} />}
    </>

  )



}


