'use client';

import { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Stack, Divider } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    "NEXT.JS", "TYPESCRIPT", "REACT", "GSAP", "NODE.JS", "AI INTEGRATION", "WEBGL", "THREE.JS", "FINTECH", "DESIGN SYSTEMS"
];

function SkillMarquee({ direction = 1, speed = 20 }: { direction?: number, speed?: number }) {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const el = marqueeRef.current;
            if (!el) return;

            // Clone content for seamless loop
            const content = el.querySelector('.marquee-content');
            if (content) {
                const clone = content.cloneNode(true);
                el.appendChild(clone);
            }

            const totalWidth = content?.scrollWidth || 0;

            gsap.to(el, {
                x: direction === 1 ? -totalWidth / 2 : 0,
                duration: speed,
                repeat: -1,
                ease: 'none',
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth))
                }
            });

            // Optional: Scroll speed up
            /*
           ScrollTrigger.create({
               trigger: document.body,
               onUpdate: (self) => {
                   // complex logic to add velocity
               }
           });
           */
        }, marqueeRef);

        return () => ctx.revert();
    }, [direction, speed]);

    return (
        <Box
            ref={marqueeRef}
            sx={{
                display: 'flex',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                py: 2,
                userSelect: 'none'
            }}
        >
            <Box className="marquee-content" sx={{ display: 'flex' }}>
                {skills.map((skill, index) => (
                    <Typography
                        key={index}
                        variant="h1"
                        sx={{
                            mx: 4,
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255, 82, 0, 0.2)', // Changed from rgba(255,255,255,0.2) to rgba(255, 82, 0, 0.2)
                            fontFamily: 'Oswald, sans-serif',
                            opacity: 0.5,
                            fontSize: 'clamp(4rem, 10vw, 8rem)'
                        }}
                    >
                        {skill}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}

export default function About() {
    return (
        <Box sx={{ py: 20, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="xl">
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="overline" color="secondary">
                            WHO I AM
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: '1/1',
                                borderRadius: 4,
                                overflow: 'hidden',
                                mt: 2,
                                border: '1px solid rgba(255, 82, 0, 0.2)',
                                position: 'relative'
                            }}
                        >
                            <Box
                                component="img"
                                src="/image/my.png"
                                alt="Anshu Nayak"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(0.5) contrast(1.1)',
                                    '&:hover': {
                                        filter: 'grayscale(0) contrast(1)',
                                        transition: 'all 0.5s ease'
                                    }
                                }}
                            />
                        </Box>
                        <Typography variant="h2" paragraph sx={{ mt: 4, textTransform: 'none' }}>
                            A Full Stack Engineer focused on crafting pixel-perfect digital experiences.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body1" sx={{ fontSize: '1.5rem', lineHeight: 1.6, opacity: 0.8 }}>
                            I specialize in building things that live on the internet, blending deep technical expertise with a passion for visual excellence.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 4, fontSize: '1.25rem', lineHeight: 1.6, opacity: 0.6 }}>
                            My work philosophy is simple: It must be fast, functional, and visually unforgettable. I specialize in the React ecosystem, specifically Next.js, and love pushing the boundaries of what is possible on the web using WebGL and GSAP.
                        </Typography>

                        <Stack direction="row" spacing={8} sx={{ mt: 8 }}>
                            <Box>
                                <Typography variant="h3" sx={{ color: '#FF5200' }}>5+</Typography>
                                <Typography variant="caption" color="text.secondary">YEARS EXPERIENCE</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h3" sx={{ color: '#FF5200' }}>50+</Typography>
                                <Typography variant="caption" color="text.secondary">PROJECTS COMPLETED</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h3" sx={{ color: '#FF5200' }}>10+</Typography>
                                <Typography variant="caption" color="text.secondary">AWARDS WON</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ my: 10, borderColor: 'rgba(255,255,255,0.1)' }} />

            <Box>
                <SkillMarquee direction={1} speed={30} />
                <SkillMarquee direction={-1} speed={25} />
            </Box>
        </Box>
    );
}
