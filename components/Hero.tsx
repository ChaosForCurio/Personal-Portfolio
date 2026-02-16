'use client';

import { useRef, useEffect, useLayoutEffect } from 'react'; // Switched to useEffect for event listener compatibility
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const componentRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Mouse follower blob
            const moveBlob = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                gsap.to(blobRef.current, {
                    x: clientX,
                    y: clientY,
                    duration: 2,
                    ease: 'power3.out',
                });
            };
            window.addEventListener('mousemove', moveBlob);

            // Scroll Parallax
            gsap.to(textRef.current, {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            return () => window.removeEventListener('mousemove', moveBlob);
        }, componentRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ paused: true });

            tl.fromTo('.hero-text-line',
                { y: 100, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
            )
                .fromTo('.hero-subtext',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
                    '-=0.8'
                )
                .fromTo('.hero-btn',
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' },
                    '-=0.6'
                );

            const playAnim = () => tl.play();

            // Listen for preloader
            window.addEventListener('preloader-complete', playAnim);

            // Cleanup
            return () => window.removeEventListener('preloader-complete', playAnim);
        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            ref={componentRef}
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'background.default',
                perspective: '1000px', // For 3D text effect
            }}
        >
            {/* Background Gradient Blob */}
            <Box
                ref={blobRef}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 82, 0, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                    mixBlendMode: 'screen',
                    filter: 'blur(50px)',
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div ref={textRef}>
                    <Stack spacing={0} alignItems="center">
                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography className="hero-text-line" variant="h2" sx={{ color: 'text.secondary', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '0.4em', mb: 2 }}>
                                FULL STACK DEVELOPER
                            </Typography>
                        </Box>

                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography className="hero-text-line" variant="h1" sx={{ color: 'white', lineHeight: 0.9 }}>
                                ANSHU
                            </Typography>
                        </Box>

                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography className="hero-text-line" variant="h1" sx={{ color: 'secondary.main', lineHeight: 0.9 }}>
                                NAYAK
                            </Typography>
                        </Box>

                        <Typography
                            className="hero-subtext"
                            variant="body1"
                            sx={{ mt: 6, maxWidth: '600px', mx: 'auto', opacity: 0.7 }}
                        >
                            Full Stack Engineer building things that live on the internet,
                            focusing on pixel-perfect experiences.
                            <br />Based in India. Available for freelance.
                        </Typography>

                        <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
                            <MagneticButton>
                                <Button
                                    className="hero-btn"
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        borderWidth: '1px',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        color: 'white',
                                        backdropFilter: 'blur(10px)',
                                        px: 4,
                                        py: 1.5,
                                        '&:hover': {
                                            borderColor: '#FF5200',
                                            backgroundColor: 'rgba(255, 82, 0, 0.1)',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    Explore Work
                                </Button>
                            </MagneticButton>
                            <MagneticButton>
                                <Button
                                    className="hero-btn"
                                    variant="text"
                                    color="secondary"
                                    size="large"
                                    sx={{ color: '#FF5200' }}
                                >
                                    Contact Me
                                </Button>
                            </MagneticButton>
                        </Stack>
                    </Stack>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <Box sx={{
                position: 'absolute',
                bottom: 40,
                left: '50%',
                transform: 'translateX(-50%)',
                opacity: 0.5
            }}>
                <Box
                    sx={{
                        width: '1px',
                        height: '60px',
                        bgcolor: 'rgba(255,255,255,0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '50%',
                            bgcolor: '#FF5200',
                            position: 'absolute',
                            top: '-100%',
                            animation: 'scrollDown 2s cubic-bezier(0.77, 0, 0.175, 1) infinite'
                        }}
                    />
                </Box>
                <style jsx global>{`
                    @keyframes scrollDown {
                        0% { top: -100%; }
                        100% { top: 100%; }
                    }
                `}</style>
            </Box>
        </Box>
    );
}
