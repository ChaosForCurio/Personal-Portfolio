'use client';

import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';
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

                    <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => window.open('https://x.com/bornashofficial', '_blank')}
                            sx={{
                                bgcolor: 'white',
                                color: 'black',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: '#FF5200',
                                    color: 'white'
                                }
                            }}
                        >
                            Say Hello
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => window.open('https://x.com/bornashofficial', '_blank')}
                            sx={{
                                borderColor: 'rgba(255,255,255,0.3)',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    borderColor: '#FF5200',
                                    color: '#FF5200'
                                }
                            }}
                        >
                            Twitter / X
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
