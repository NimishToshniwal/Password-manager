import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function PasswordModal({
    open,
    handleClose,
    showPassword,
    originalPassword
}) {
    const [newPassword, setNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const validatePassword = () => {
        if (newPassword === originalPassword) {
            setShowNewPassword(true)
        }
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-main' sx={style}>

                    {showNewPassword ? (
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            The Password for {showPassword.name} is {showPassword.password}.
                        </Typography>
                    ) : (<>
                        <input
                            placeholder='Enter your Login Password'
                            className='input-fields'
                            onChange={(event) => setNewPassword(event.target.value)}
                            name='password'
                            type={'password'}
                        />
                        <button
                            className='input-btn'
                            onClick={validatePassword}
                        >
                            Validate yourself !!
                        </button>
                    </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
