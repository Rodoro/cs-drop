import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ErrorModalProps = {
    status: string;
    message: string;
    visible: boolean;
    setVisible(visible: boolean): void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#191D3E',
    border: '1px solid rgb(75,85,99)',
    boxShadow: 24,
    p: 4,
};

const ErrorModal: React.FC<ErrorModalProps> = ({ status, message, visible, setVisible }) => {
    return (
        <Modal
            open={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {status}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            </Box>
        </Modal>
    )
}

export default ErrorModal
