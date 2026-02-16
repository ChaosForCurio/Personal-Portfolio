import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" sx={{ overflowX: 'hidden' }}>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}
