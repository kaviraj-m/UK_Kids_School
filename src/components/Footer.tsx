import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from '@mui/material';
import {
  School,
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)', 
      color: 'white', 
      pt: { xs: 4, md: 6 }, 
      pb: { xs: 2, md: 3 } 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, md: 1 }, 
              mb: { xs: 2, md: 3 },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <School sx={{ fontSize: { xs: 28, md: 32 } }} />
              <Typography variant="h6" sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}>
                UK KIDS International School
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                lineHeight: 1.8, 
                opacity: 0.9,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            >
              The best international school in Karaikudi city, dedicated to providing 
              exceptional education and nurturing global citizens for a sustainable future! 🌟
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 1,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)'
                  },
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 }
                }}
              >
                <Facebook sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)'
                  },
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 }
                }}
              >
                <Twitter sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)'
                  },
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 }
                }}
              >
                <Instagram sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)'
                  },
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 }
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1.5, md: 2 }
              }}
            >
              🔗 Quick Links
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 0.5, md: 1 },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Link
                href="#home"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.9, 
                  '&:hover': { opacity: 1, transform: 'translateX(5px)' },
                  transition: 'all 0.3s ease',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.9, 
                  '&:hover': { opacity: 1, transform: 'translateX(5px)' },
                  transition: 'all 0.3s ease',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                About Us
              </Link>
              <Link
                href="#features"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.9, 
                  '&:hover': { opacity: 1, transform: 'translateX(5px)' },
                  transition: 'all 0.3s ease',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Features
              </Link>
              <Link
                href="#contact"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.9, 
                  '&:hover': { opacity: 1, transform: 'translateX(5px)' },
                  transition: 'all 0.3s ease',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1.5, md: 2 }
              }}
            >
              📚 Programs
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 0.5, md: 1 },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                🌱 Early Childhood Education
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                📖 Primary Education
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                🎓 Secondary Education
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                🌍 International Curriculum
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                🎨 Extracurricular Activities
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1.5, md: 2 }
              }}
            >
              📞 Contact Info
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 1, md: 2 },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <LocationOn sx={{ fontSize: { xs: 16, md: 18 }, color: '#FFEAA7' }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Karaikudi City, Tamil Nadu, India
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <Phone sx={{ fontSize: { xs: 16, md: 18 }, color: '#96CEB4' }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  +91 XXX XXX XXXX
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <Email sx={{ fontSize: { xs: 16, md: 18 }, color: '#45B7D1' }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  info@ukkidsschool.edu.in
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 3, md: 4 }, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.8,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            >
              © 2024 UK KIDS International School. All rights reserved. ✨
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 2, md: 3 }, 
              justifyContent: { xs: 'center', md: 'flex-end' },
              flexWrap: 'wrap'
            }}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.8, 
                  fontSize: { xs: '0.8rem', md: '0.875rem' },
                  '&:hover': { opacity: 1 }
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.8, 
                  fontSize: { xs: '0.8rem', md: '0.875rem' },
                  '&:hover': { opacity: 1 }
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  opacity: 0.8, 
                  fontSize: { xs: '0.8rem', md: '0.875rem' },
                  '&:hover': { opacity: 1 }
                }}
              >
                Admissions
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 