import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ImageList, ImageListItem } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export default function BasicModal({ open, handleClose, url }) {


    return (
        <div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ImageList>
                        <ImageListItem  >
                            <img style={{width:'390px'}} src={url} alt="" />
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Modal>
        </div>
    );
}