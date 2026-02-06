'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
                // Dispatch event for other components to start their animations
                window.dispatchEvent(new CustomEvent('preloader-complete'));
            }
        });

        // Initial state
        gsap.set(textRef.current, { y: 50, opacity: 0 });

        tl.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        })
            .to(textRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.in',
                delay: 0.5
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: 'expo.inOut'
            });

    }, []);

    // if (!isLoading) return null; // Removed to prevent DOM thrashing

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                bgcolor: '#000',
                zIndex: 99999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                pointerEvents: isLoading ? 'auto' : 'none', // Allow clicks through after load
                // We keep it in DOM but move it out of view via animation, 
                // styles are handled by GSAP (yPercent: -100)
            }}
        >
            <div ref={textRef}>
                <Typography
                    variant="h1"
                    sx={{
                        color: '#FF5200',
                        fontSize: { xs: '3rem', md: '6rem' },
                        fontWeight: 700
                    }}
                >
                    ANSHU NAYAK
                </Typography>
            </div>
        </Box>
    );
}
