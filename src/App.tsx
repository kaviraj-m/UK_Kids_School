import React from 'react';
// Enhanced for June 16, 2025 - Added Material-UI theme configuration
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Create a vibrant, kid-friendly theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B', // Bright coral red
      light: '#FF8E8E',
      dark: '#E55A5A',
    },
    secondary: {
      main: '#4ECDC4', // Turquoise
      light: '#7FD8D2',
      dark: '#3BA99F',
    },
    info: {
      main: '#45B7D1', // Sky blue
    },
    success: {
      main: '#96CEB4', // Mint green
    },
    warning: {
      main: '#FFEAA7', // Sunny yellow
    },
    error: {
      main: '#FF7675', // Soft red
    },
  },
  typography: {
    fontFamily: '"Poppins", "Comic Sans MS", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 30px',
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
