import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" sx={{ overflowX: 'hidden' }}>
      <Hero />
      <Projects />
      <About />
      <Contact />

      {/* Footer */}
      <Box sx={{ py: 3, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', bgcolor: '#050505' }}>
        <p style={{ color: '#666' }}>© {new Date().getFullYear()} Anshu Nayak. All rights reserved.</p>
      </Box>
    </Box>
  );
}
