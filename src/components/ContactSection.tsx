import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
} from '@mui/icons-material';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Address',
      content: 'Karaikudi City, Tamil Nadu, India',
      color: '#FF6B6B',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+91 XXX XXX XXXX',
      color: '#4ECDC4',
    },
    {
      icon: <Email />,
      title: 'Email',
      content: 'info@ukkidsschool.edu.in',
      color: '#FFEAA7',
    },
    {
      icon: <AccessTime />,
      title: 'School Hours',
      content: 'Mon - Fri: 8:00 AM - 4:00 PM',
      color: '#96CEB4',
    },
  ];

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          opacity: 0.1,
          display: { xs: 'none', md: 'block' }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '3%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #96CEB4, #FFEAA7)',
          opacity: 0.1,
          display: { xs: 'none', md: 'block' }
        }}
      />

      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ 
            fontWeight: 800, 
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: { xs: 6, md: 8 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            px: { xs: 2, md: 0 },
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Get In Touch 📞
        </Typography>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="stretch">
          {/* Contact Information */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800, 
                  mb: { xs: 4, md: 5 },
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  textAlign: { xs: 'center', lg: 'left' },
                  color: '#333'
                }}
              >
                🌟 Contact Information
              </Typography>
              
              {/* Contact Cards Grid - Improved Centering */}
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: 3, md: 4 },
                mb: { xs: 4, md: 5 },
                justifyItems: 'center',
                width: '100%'
              }}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    elevation={6}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 280, sm: 240, md: 260 },
                      minHeight: { xs: 160, md: 180 },
                      borderRadius: { xs: 4, md: 5 },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: `2px solid ${info.color}20`,
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': { 
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 12px 40px ${info.color}30`,
                        border: `2px solid ${info.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${info.color}, ${info.color}80)`,
                        borderRadius: '5px 5px 0 0'
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      textAlign: 'center', 
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Box
                        sx={{
                          width: { xs: 60, md: 70 },
                          height: { xs: 60, md: 70 },
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${info.color}, ${info.color}CC)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, md: 2.5 },
                          color: 'white',
                          boxShadow: `0 8px 24px ${info.color}40`,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'rotate(10deg) scale(1.1)'
                          }
                        }}
                      >
                        {React.cloneElement(info.icon, { sx: { fontSize: { xs: 28, md: 32 } } })}
                      </Box>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 800,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          color: '#333',
                          mb: 1
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#666',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.5,
                          fontWeight: 500
                        }}
                      >
                        {info.content}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Why Join Section */}
              <Paper 
                elevation={8} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: { xs: 4, md: 5 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '2px solid rgba(255,107,107,0.1)',
                  mt: 'auto',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800, 
                    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: { xs: '1.3rem', md: '1.6rem' },
                    mb: 3
                  }}
                >
                  🎯 Why Join UK KIDS International School?
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: '#444',
                    mb: 3
                  }}
                >
                  Join the best international school in Karaikudi and give your child the opportunity 
                  to become a compassionate, responsible global citizen. Our dedicated team of passionate 
                  educators is ready to challenge every student to reach their personal best! 🌟
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8, 
                    fontStyle: 'italic',
                    color: '#666',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 500,
                    textAlign: 'center',
                    p: 2,
                    background: 'rgba(255,107,107,0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(255,107,107,0.1)'
                  }}
                >
                  "Empowering children to become lifelong learners through innovative teaching methods 
                  and personalized attention." ✨
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={6}>
            <Paper 
              elevation={12} 
              sx={{ 
                p: { xs: 4, md: 5 }, 
                borderRadius: { xs: 4, md: 5 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '2px solid rgba(78,205,196,0.1)',
                position: 'relative',
                overflow: 'hidden',
                height: 'fit-content',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4ECDC4, #FF6B6B)',
                }
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800, 
                  mb: { xs: 3, md: 4 },
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '1.6rem', md: '2rem' }
                }}
              >
                📝 Send Us a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: '#fafafa',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#FF6B6B',
                            }
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ECDC4',
                              borderWidth: 2,
                            }
                          }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#4ECDC4',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: '#fafafa',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#FF6B6B',
                            }
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ECDC4',
                              borderWidth: 2,
                            }
                          }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#4ECDC4',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: '#fafafa',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#FF6B6B',
                            }
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ECDC4',
                              borderWidth: 2,
                            }
                          }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#4ECDC4',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      placeholder="Tell us about your inquiry, admission requirements, or any questions about our school..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: '#fafafa',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#FF6B6B',
                            }
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ECDC4',
                              borderWidth: 2,
                            }
                          }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#4ECDC4',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                        color: '#fff',
                        py: { xs: 2, md: 2.5 },
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        fontWeight: 800,
                        borderRadius: 3,
                        boxShadow: '0 8px 32px rgba(255,107,107,0.3)',
                        textTransform: 'none',
                        '&:hover': { 
                          background: 'linear-gradient(45deg, #E55A5A, #3BA99F)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 40px rgba(255,107,107,0.4)',
                        },
                        '&:active': {
                          transform: 'translateY(-1px)',
                        }
                      }}
                    >
                      🚀 Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="success"
            sx={{ 
              width: '100%',
              borderRadius: 3,
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 600,
              '& .MuiAlert-icon': {
                fontSize: '1.5rem'
              }
            }}
          >
            🎉 Thank you for your message! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactSection; 