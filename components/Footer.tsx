'use client';

import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/ChaosForCurio', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/ bornashofficial', label: 'LinkedIn' }, // Note: assuming common username or can update if known
    { icon: <XIcon />, url: 'https://x.com/bornashofficial', label: 'X' }
];

const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#050505',
                pt: 10,
                pb: 5,
                borderTop: '1px solid rgba(255, 82, 0, 0.1)'
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    spacing={4}
                    sx={{ mb: 6 }}
                >
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 900,
                                letterSpacing: '-0.02em',
                                mb: 1
                            }}
                        >
                            ANSHU <span style={{ color: '#FF5200' }}>NAYAK</span>
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.5, maxWidth: '300px' }}>
                            Full Stack Engineer crafting pixel-perfect digital experiences with passion and precision.
                        </Typography>
                    </Box>

                    <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                        <Typography variant="overline" sx={{ color: '#FF5200', fontWeight: 'bold' }}>
                            Navigation
                        </Typography>
                        <Stack direction="row" spacing={3}>
                            {navLinks.map((link) => (
                                <Box
                                    key={link.name}
                                    component="a"
                                    href={link.href}
                                    sx={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        opacity: 0.6,
                                        transition: 'opacity 0.3s',
                                        '&:hover': { opacity: 1 }
                                    }}
                                >
                                    {link.name}
                                </Box>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                        <Typography variant="overline" sx={{ color: '#FF5200', fontWeight: 'bold' }}>
                            Connect
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    onClick={() => window.open(social.url, '_blank')}
                                    sx={{
                                        color: 'white',
                                        opacity: 0.6,
                                        '&:hover': {
                                            color: '#FF5200',
                                            opacity: 1,
                                            transform: 'translateY(-3px)',
                                            transition: 'all 0.3s'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 4 }} />

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="caption" sx={{ opacity: 0.3 }}>
                        © {new Date().getFullYear()} Anshu Nayak. All rights reserved.
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.3 }}>
                        Designed & Built with <span style={{ color: '#FF5200' }}>❤</span> in India
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
