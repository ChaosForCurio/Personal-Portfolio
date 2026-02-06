'use client';

import { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography, Stack, Button, Card, CardMedia, CardContent, Chip } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Koenigsegg Jesko",
        category: "Automotive / WebGL",
        description: "High-fidelity automotive showcase featuring the Jesko Absolut. Immersive scrolling, technical specifications, and parallax visuals.",
        image: "https://placehold.co/800x600/050505/FF5200/png?text=Koenigsegg+Jesko",
        tags: ["Next.js", "GSAP", "WebGL"],
        link: "https://github.com/ChaosForCurio/Koenigsegg"
    },
    {
        title: "Maison Dior",
        category: "Fashion / Heritage",
        description: "A digital tribute to the House of Dior. Elegant typography, heritage timeline, and interactive couture gallery.",
        image: "https://placehold.co/800x600/050505/FF5200/png?text=Maison+Dior",
        tags: ["React", "Framer Motion", "Tailwind"],
        link: "https://github.com/ChaosForCurio/Christian-Dior-"
    },
    {
        title: "PlayStation 5 UI",
        category: "Gaming / Interface",
        description: "Reimagining the console dashboard for the web. Fluid navigation, game library integration, and immersive soundscapes.",
        image: "https://placehold.co/800x600/050505/FF5200/png?text=PlayStation+5",
        tags: ["TypeScript", "Three.js", "CSS Modules"],
        link: "https://github.com/ChaosForCurio/Playstation"
    },
    {
        title: "Finance OS",
        category: "Fintech / Dashboard",
        description: "Personal finance dashboard with real-time analytics. Dark mode first, data visualization, and budget tracking.",
        image: "https://placehold.co/800x600/050505/FF5200/png?text=Finance+OS",
        tags: ["Next.js", "Supabase", "Recharts"],
        link: "https://github.com/ChaosForCurio/Expense-Tracker"
    }
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = sectionRef.current!.offsetWidth;
            const amountToScroll = totalWidth - window.innerWidth;

            gsap.to(sectionRef.current, {
                id: 'projectsTween', // Linked to parallax
                x: -amountToScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: `+=${amountToScroll + 500}`,
                    pin: true,
                    scrub: 1.5, // Smoother inertia
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            // Parallax for images
            gsap.utils.toArray('.project-image-container img').forEach((img: any) => {
                gsap.to(img, {
                    xPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.parentElement,
                        containerAnimation: gsap.getById('projectsTween'), // Needs ID if we name the tween, but basic scrub works too if linked to horizontal scroll
                        // Actually, for horizontal, we usually link to the main scroll or use a separate loop linked to horizontal progress.
                        // Simplified parallax:
                        start: 'left right',
                        end: 'right left',
                        scrub: true,
                        horizontal: true // key for horizontal scroll trigger if using that plugin, but here we are fake horizontal.
                        // Since we are fake horizontal scrolling (transforming x), standard ScrollTrigger won't catch it easily without containerAnimation.
                    }
                });
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box className="projects-wrapper-safe"> {/* Safe wrapper for React */}
            <Box ref={triggerRef} sx={{ overflow: 'hidden', height: '100vh' }}>
                {/* Header stays pinned visually or moves with natural scroll? 
                For horizontal, usually the header is part of the first slide or fixed.
                Let's put a header before the horizontal track if desired, but here we'll integrate it.
            */}

                <Box
                    ref={sectionRef}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        height: '100%',
                        width: 'fit-content', // Important for horizontal layout
                        backgroundColor: 'background.default'
                    }}
                >
                    {/* Intro Slide */}
                    <Box
                        sx={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 0,
                            borderRight: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h2" color="primary" sx={{ mb: 2 }}>
                                SELECTED<br />
                                <span style={{ color: '#FF5200' }}>WORKS</span>
                            </Typography>
                            <Typography variant="body1" sx={{ maxWidth: 400, opacity: 0.7 }}>
                                A collection of digital products crafted with precision and passion.
                                <br /><br />
                                &larr; SCROLL TO EXPLORE
                            </Typography>
                        </Box>
                    </Box>

                    {/* Project Slides */}
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '80vw', // Making cards wide
                                height: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                position: 'relative',
                                borderRight: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <Container maxWidth="lg">
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
                                    {/* Image */}
                                    <Box
                                        className="project-image-container"
                                        sx={{
                                            width: { xs: '100%', md: '60%' },
                                            height: { xs: '300px', md: '60vh' },
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            className="project-image-img" // Added class for selection
                                            src={project.image}
                                            alt={project.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                // Removed hover scale from here to let GSAP handle transform, or keep it careful
                                                // transition: 'transform 0.5s ease', 
                                                // '&:hover': { transform: 'scale(1.05)' } // Conflict with parallax? Let's rely on GSAP parallax for motion.
                                            }}
                                        />
                                    </Box>

                                    {/* details */}
                                    <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                                        <Typography variant="overline" color="secondary" sx={{ letterSpacing: '0.2em' }}>
                                            {project.category}
                                        </Typography>
                                        <Typography variant="h3" sx={{ my: 2, fontWeight: 700 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
                                            {project.description}
                                        </Typography>

                                        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                                            {project.tags.map(tag => (
                                                <Chip key={tag} label={tag} variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }} />
                                            ))}
                                        </Stack>

                                        <Button variant="outlined" sx={{ color: '#FF5200', borderColor: '#FF5200', '&:hover': { bgcolor: '#FF5200', color: '#000' } }}>
                                            View Case Study
                                        </Button>
                                    </Box>
                                </Stack>
                            </Container>
                        </Box>
                    ))}

                    {/* Footer/CTA Slide */}
                    <Box
                        sx={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Typography variant="h1" sx={{ opacity: 0.1 }}>
                            FIN.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box> // Close wrapper
    );
}
