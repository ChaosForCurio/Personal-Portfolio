'use client';

import { Box, Container, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    return (
        <Box sx={{ py: 10, mb: 10 }} id="contact">
            <Container maxWidth="md">
                <Box sx={{
                    p: 5,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(255, 82, 0, 0.1) 0%, rgba(10, 10, 10, 1) 100%)',
                    border: '1px solid rgba(255, 82, 0, 0.2)',
                    textAlign: 'center'
                }}>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        LET'S <span style={{ color: '#FF5200' }}>TALK</span>
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7, mb: 4, maxWidth: '500px' }}>
                        Have an idea or just want to say hi? I'm always open to discussing new projects and opportunities.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: 'black',
                            px: 6,
                            py: 2,
                            fontSize: '1.2rem',
                            '&:hover': {
                                bgcolor: '#FF5200',
                                color: 'white'
                            }
                        }}
                    >
                        Say Hello
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
