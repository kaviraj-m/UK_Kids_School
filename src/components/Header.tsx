import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { School, Stars, Menu, Close } from '@mui/icons-material';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // Close mobile menu after navigation
  };

  const navigationItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'Contact', id: 'contact' },
  ];

  const mobileMenu = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img 
            src="/UK Logo-01.jpg" 
            alt="UK Kids Logo" 
            style={{ 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid white'
            }} 
          />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            UK KIDS
          </Typography>
        </Box>
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>
      <List sx={{ mt: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton 
              onClick={() => scrollToSection(item.id)}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255,107,107,0.1)',
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#333'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,107,107,0.7) 0%, rgba(78,205,196,0.7) 50%, rgba(69,183,209,0.7) 100%)',
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 0.5, md: 1 } }}>
          <Toolbar sx={{ justifyContent: 'space-between', py: 0, px: 0, minHeight: '48px !important' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 1.5 } }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/UK Logo-01.jpg" 
                  alt="UK Kids International Play School Logo" 
                  style={{ 
                    width: isMobile ? '40px' : '50px', 
                    height: isMobile ? '40px' : '50px', 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }} 
                />
                <Stars 
                  sx={{ 
                    fontSize: { xs: 14, md: 16 }, 
                    color: '#FFEAA7', 
                    position: 'absolute', 
                    top: { xs: -2, md: -3 }, 
                    right: { xs: -2, md: -3 },
                    animation: 'twinkle 2s infinite'
                  }} 
                />
              </Box>
              <Box>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
                    letterSpacing: '-0.02em',
                    fontFamily: '"Inter", "Roboto", sans-serif'
                  }}
                >
                  UK KIDS
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 500,
                    fontSize: { xs: '0.7rem', md: '0.85rem' },
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: { xs: 'none', sm: 'block' },
                    fontFamily: '"Inter", "Roboto", sans-serif'
                  }}
                >
                  International Play School
                </Typography>
              </Box>
            </Box>
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navigationItems.map((item) => (
                <Button 
                  key={item.id}
                  color="inherit" 
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    fontWeight: 500,
                    color: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    minWidth: 'auto',
                    px: { md: 1.8, lg: 2.2 },
                    py: { md: 0.6, lg: 0.9 },
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    letterSpacing: '0.01em',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontFamily: '"Inter", "Roboto", sans-serif',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.16)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                width: '44px',
                height: '44px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': { 
                  backgroundColor: 'rgba(255,255,255,0.16)',
                  transform: 'scale(1.05)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }
              }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
        
        <style>
          {`
            @keyframes twinkle {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.2); }
            }
          `}
        </style>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        {mobileMenu}
      </Drawer>
    </>
  );
};

export default Header; 