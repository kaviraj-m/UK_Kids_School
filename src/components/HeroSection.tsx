import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
} from '@mui/material';
import { 
  Star, 
  Celebration, 
  Groups, 
  Favorite,
  EmojiEvents,
  Palette,
  LocalLibrary
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: '100vh', md: '100vh' },
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 25%, #45B7D1 50%, #96CEB4 75%, #FFEAA7 100%)',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 8 },
        pb: { xs: 4, md: 4 },
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          left: '8%',
          animation: 'float 3s ease-in-out infinite',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Star sx={{ fontSize: 70, color: '#FFEAA7', opacity: 0.8 }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '12%',
          animation: 'float 2.5s ease-in-out infinite reverse',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Celebration sx={{ fontSize: 60, color: '#FF7675', opacity: 0.7 }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '12%',
          left: '3%',
          animation: 'float 3.5s ease-in-out infinite',
          display: { xs: 'none', lg: 'block' }
        }}
      >
        <Palette sx={{ fontSize: 55, color: '#96CEB4', opacity: 0.8 }} />
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4, lg: 6 }} alignItems="center">
          
          {/* Left Column: Hero Text */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ 
              textAlign: { xs: 'center', lg: 'left' },
              mb: { xs: 4, lg: 0 }
            }}>
              <Chip
                label="🌟 Best in Karaikudi City"
                sx={{
                  backgroundColor: '#FFEAA7',
                  color: '#333',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  mb: { xs: 2, md: 3 },
                  px: { xs: 2, md: 3 },
                  py: 1.2,
                  boxShadow: '0 4px 15px rgba(255,234,167,0.5)',
                }}
              />
              
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #fff, #FFEAA7)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem', lg: '4.5rem' },
                  lineHeight: 1.1,
                  mb: { xs: 2, md: 3 }
                }}
              >
                UK KIDS
              </Typography>
              
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  mb: { xs: 3, md: 4 }, 
                  fontWeight: 700,
                  color: '#fff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem', lg: '2.5rem' }
                }}
              >
                International Play School ✨
              </Typography>
              
              <Typography 
                variant="h6" 
                paragraph 
                sx={{ 
                  lineHeight: 1.8, 
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem', lg: '1.4rem' },
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                  mb: { xs: 4, md: 5 },
                  px: { xs: 1, lg: 0 },
                  maxWidth: { lg: '90%' }
                }}
              >
                🎓 Well Trained teaching Staff and skills based curriculum Provides Every child 
                With an immersive and engaging learning experience that's fun and colorful!
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 2, md: 3 }, 
                flexDirection: { xs: 'column', sm: 'row' }, 
                alignItems: { xs: 'stretch', sm: 'center' },
                px: { xs: 1, lg: 0 },
                justifyContent: { xs: 'center', lg: 'flex-start' }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '1.05rem', md: '1.3rem' },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.8, md: 2.2 },
                    boxShadow: '0 8px 25px rgba(255,107,107,0.4)',
                    borderRadius: '30px',
                    '&:hover': { 
                      background: 'linear-gradient(45deg, #E55A5A, #FF6B6B)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(255,107,107,0.6)',
                    }
                  }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🌈 Discover More
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '1.05rem', md: '1.3rem' },
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.8, md: 2.2 },
                    borderWidth: 3,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '30px',
                    '&:hover': { 
                      borderColor: '#FFEAA7',
                      backgroundColor: 'rgba(255,234,167,0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(255,234,167,0.3)'
                    }
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  📞 Contact Us
                </Button>
              </Box>
            </Box>
          </Grid>
          
          {/* Right Column: Feature Cards */}
          <Grid item xs={12} lg={6}>
            {/* Desktop Grid Layout */}
            <Box sx={{ 
              display: { xs: 'none', lg: 'grid' },
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 3,
              mt: { lg: 2 }
            }}>
              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  gridColumn: '1 / -1',
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: '0 15px 40px rgba(255,234,167,0.3)',
                  }
                }}
              >
                <EmojiEvents sx={{ color: '#FFEAA7', fontSize: 45, flexShrink: 0 }} />
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: '1.3rem',
                    mb: 0.5
                  }}>
                    Excellence in Education ⭐
                  </Typography>
                  <Typography sx={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '1rem', 
                    lineHeight: 1.5 
                  }}>
                    Individual care and identity development for every child with love and attention! 💖
                  </Typography>
                </Box>
              </Paper>
              
              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: '0 15px 40px rgba(150,206,180,0.3)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Groups sx={{ color: '#96CEB4', fontSize: 35, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: '1.2rem'
                  }}>
                    Global Citizens 🌍
                  </Typography>
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '0.95rem', 
                  lineHeight: 1.5 
                }}>
                  Think globally and act locally for a bright, sustainable future! 🌱
                </Typography>
              </Paper>

              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: '0 15px 40px rgba(69,183,209,0.3)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <LocalLibrary sx={{ color: '#45B7D1', fontSize: 35, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: '1.2rem'
                  }}>
                    Fun Learning 🎨
                  </Typography>
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '0.95rem', 
                  lineHeight: 1.5 
                }}>
                  Innovative and creative teaching methods that make learning exciting! 🎉
                </Typography>
              </Paper>
            </Box>

            {/* Mobile Card Layout */}
            <Box sx={{ 
              display: { xs: 'flex', lg: 'none' },
              flexDirection: 'column',
              gap: { xs: 2.5, sm: 3 },
              mt: { xs: 2, sm: 3 },
              px: { xs: 1, sm: 0 }
            }}>
              <Paper
                elevation={8}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: { xs: '16px', sm: '20px' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 30px rgba(255,234,167,0.4)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <EmojiEvents sx={{ color: '#FFEAA7', fontSize: { xs: 32, sm: 36 }, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: { xs: '1.15rem', sm: '1.3rem' },
                    lineHeight: 1.2
                  }}>
                    Excellence in Education ⭐
                  </Typography>
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: { xs: '1rem', sm: '1.05rem' }, 
                  lineHeight: 1.6 
                }}>
                  Individual care and identity development for every child with love and attention! 💖
                </Typography>
              </Paper>
              
              <Paper
                elevation={8}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: { xs: '16px', sm: '20px' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 30px rgba(150,206,180,0.4)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Groups sx={{ color: '#96CEB4', fontSize: { xs: 32, sm: 36 }, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: { xs: '1.15rem', sm: '1.3rem' },
                    lineHeight: 1.2
                  }}>
                    Global Citizens 🌍
                  </Typography>
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: { xs: '1rem', sm: '1.05rem' }, 
                  lineHeight: 1.6 
                }}>
                  Think globally and act locally for a bright, sustainable future! 🌱
                </Typography>
              </Paper>

              <Paper
                elevation={8}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: { xs: '16px', sm: '20px' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 30px rgba(69,183,209,0.4)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <LocalLibrary sx={{ color: '#45B7D1', fontSize: { xs: 32, sm: 36 }, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 800, 
                    color: '#fff',
                    fontSize: { xs: '1.15rem', sm: '1.3rem' },
                    lineHeight: 1.2
                  }}>
                    Fun Learning 🎨
                  </Typography>
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: { xs: '1rem', sm: '1.05rem' }, 
                  lineHeight: 1.6 
                }}>
                  Innovative and creative teaching methods that make learning exciting! 🎉
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(15deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection; 