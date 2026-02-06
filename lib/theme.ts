import { Oswald, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

// "Industrial Luxury" / Awwwards-style Theme
const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000', // Pure Black
            paper: '#111111',   // Dark Grey for cards
        },
        primary: {
            main: '#FFFFFF', // White for primary text/actions
        },
        secondary: {
            main: '#FF5200', // Vibrand Orange Accent (Awwwards style)
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#999999', // Medium Grey
        },
        action: {
            hover: 'rgba(255, 82, 0, 0.1)', // Orange hover
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: oswald.style.fontFamily,
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            lineHeight: 0.9,
        },
        h2: {
            fontFamily: oswald.style.fontFamily,
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        h3: {
            fontFamily: oswald.style.fontFamily,
            fontWeight: 500,
            letterSpacing: '0.02em',
        },
        body1: {
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#B0B0B0', // Light Grey
        },
        button: {
            fontFamily: oswald.style.fontFamily,
            letterSpacing: '0.1em',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '12px 24px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                        backgroundColor: '#FF5200',
                        borderColor: '#FF5200',
                        color: '#000000',
                        transform: 'translateY(-2px)',
                    },
                },
                contained: {
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#FF5200',
                    }
                },
                outlined: {
                    borderColor: '#555555',
                }
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    '&:hover': {
                        borderColor: '#FF5200',
                    }
                }
            }
        }
    },
});

export default theme;
