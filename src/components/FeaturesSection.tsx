import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  School,
  Language,
  Science,
  Sports,
  Palette,
  Computer,
  MenuBook,
  Group,
  Star,
  Toys
} from '@mui/icons-material';

const FeaturesSection: React.FC = () => {
  const coreValues = [
    {
      icon: <School />,
      title: 'Individual Care',
      subtitle: '💖',
      description: 'Observing each child with individual attention and developing their unique identity',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea'
    },
    {
      icon: <Language />,
      title: 'Global Citizens',
      subtitle: '🌍',
      description: 'Enabling children to think globally and act locally for a sustainable future',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      icon: <MenuBook />,
      title: 'Lifelong Learners',
      subtitle: '📚',
      description: 'Holistic curriculum developing all aspects of learner\'s personality',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      icon: <Group />,
      title: 'Collaborative Learning',
      subtitle: '🤝',
      description: 'Promoting deep inquiry and self-reflection through cooperative learning',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
  ];

  const features = [
    {
      icon: <Science />,
      title: 'Innovative Methods',
      subtitle: '💡',
      description: 'Using cutting-edge teaching methods and personalized attention',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      progress: 95,
      color: '#fa709a'
    },
    {
      icon: <Star />,
      title: 'Passionate Educators',
      subtitle: '🌟',
      description: 'Dedicated team committed to challenging every student to reach their best',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      progress: 98,
      color: '#a8edea'
    },
    {
      icon: <Computer />,
      title: 'STEM Education',
      subtitle: '🔬',
      description: 'Strong focus on Science, Technology, Engineering, and Mathematics',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      progress: 88,
      color: '#ffecd2'
    },
    {
      icon: <Sports />,
      title: 'Physical Development',
      subtitle: '⚽',
      description: 'Comprehensive sports and physical education programs for overall development',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      progress: 85,
      color: '#a18cd1'
    },
    {
      icon: <Palette />,
      title: 'Creative Arts',
      subtitle: '🎨',
      description: 'Nurturing creativity through music, arts, and cultural activities',
      gradient: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
      progress: 87,
      color: '#fad0c4'
    },
    {
      icon: <Computer />,
      title: 'Digital Literacy',
      subtitle: '💻',
      description: 'Modern technology integration and computer education',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      progress: 92,
      color: '#a1c4fd'
    },
    {
      icon: <MenuBook />,
      title: 'Immersive Learning',
      subtitle: '📖',
      description: 'Engaging and interactive learning experiences for better understanding',
      gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      progress: 93,
      color: '#d299c2'
    },
    {
      icon: <Group />,
      title: 'Social Skills',
      subtitle: '🤝',
      description: 'Developing communication, teamwork, and leadership abilities',
      gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      progress: 89,
      color: '#89f7fe'
    },
  ];

  return (
    <Box 
      id="features" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #FFF5F5 0%, #F0F8FF 25%, #F5FFFA 50%, #FFFACD 75%, #FFF0F5 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'auto'
      }}
    >
      {/* Floating decorative elements - simplified and hidden on smaller screens */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          animation: 'spin 10s linear infinite',
          opacity: 0.2,
          display: { xs: 'none', lg: 'block' }
        }}
      >
        <Star sx={{ fontSize: 60, color: '#FF6B6B' }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          animation: 'spin 8s linear infinite reverse',
          opacity: 0.2,
          display: { xs: 'none', lg: 'block' }
        }}
      >
        <Toys sx={{ fontSize: 50, color: '#4ECDC4' }} />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Chip
            label="Our Core Values"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', md: '1rem' },
              mb: { xs: 2, md: 3 },
              px: { xs: 3, md: 4 },
              py: 1,
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
            }}
          />
          
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              color: '#2c3e50',
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              px: { xs: 2, md: 0 },
              fontFamily: '"Inter", "Roboto", sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Nurturing Excellence Through Values
          </Typography>
          
          <Typography
            variant="h6"
            sx={{ 
              color: '#64748b', 
              mb: { xs: 4, md: 6 }, 
              maxWidth: '700px', 
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: { xs: 2, md: 0 },
              fontFamily: '"Inter", "Roboto", sans-serif'
            }}
          >
            Providing comprehensive education that develops every aspect of your child's personality
            and prepares them for future success.
          </Typography>
        </Box>

        {/* Core Values Section */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 3, md: 4, lg: 4, xl: 5 }} 
          sx={{ 
            mb: { xs: 8, md: 10 },
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: { 
                    xs: 'auto', 
                    sm: '300px', 
                    md: '320px', 
                    lg: '340px',
                    xl: '360px'
                  },
                  minHeight: { xs: '280px', sm: '300px', md: '320px' },
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  mx: 'auto',
                  maxWidth: { lg: '280px', xl: '300px' },
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    '& .value-icon': {
                      transform: 'scale(1.1)'
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: value.gradient,
                  }
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 }, 
                  textAlign: 'center', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Box sx={{ flex: '0 0 auto' }}>
                    <Box
                      className="value-icon"
                      sx={{
                        width: { xs: 60, sm: 65, md: 70, lg: 75 },
                        height: { xs: 60, sm: 65, md: 70, lg: 75 },
                        borderRadius: '16px',
                        background: value.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: { xs: 2.5, sm: 3, md: 3.5 },
                        color: 'white',
                        transition: 'transform 0.3s ease',
                        position: 'relative'
                      }}
                    >
                      {React.cloneElement(value.icon, { sx: { fontSize: { xs: 28, sm: 30, md: 35, lg: 38 } } })}
                      <Typography 
                        sx={{ 
                          position: 'absolute', 
                          top: '-8px', 
                          right: '-8px', 
                          fontSize: { xs: '18px', sm: '19px', md: '20px', lg: '22px' }
                        }}
                      >
                        {value.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ 
                        fontWeight: 600, 
                        color: '#2c3e50',
                        fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem', lg: '1.35rem' },
                        mb: { xs: 1.5, sm: 1.8, md: 2 },
                        fontFamily: '"Inter", "Roboto", sans-serif',
                        lineHeight: 1.3
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#64748b', 
                        lineHeight: 1.6,
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' },
                        fontFamily: '"Inter", "Roboto", sans-serif',
                        textAlign: 'center'
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Features Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Chip
            label="Educational Excellence"
            sx={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', md: '1rem' },
              mb: { xs: 2, md: 3 },
              px: { xs: 3, md: 4 },
              py: 1,
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 20px rgba(250, 112, 154, 0.3)'
            }}
          />
          
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              color: '#2c3e50',
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              px: { xs: 2, md: 0 },
              fontFamily: '"Inter", "Roboto", sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Our Educational Features
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 3, sm: 3, md: 4, lg: 4, xl: 5 }} 
          sx={{ 
            mb: { xs: 6, md: 8 },
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: { 
                    xs: 'auto', 
                    sm: '360px', 
                    md: '380px', 
                    lg: '400px',
                    xl: '420px'
                  },
                  minHeight: { xs: '320px', sm: '360px', md: '380px' },
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  mx: 'auto',
                  maxWidth: { lg: '280px', xl: '300px' },
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    '& .feature-icon': {
                      transform: 'scale(1.1) rotate(5deg)'
                    },
                    '& .progress-bar': {
                      transform: 'scaleX(1.02)'
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: feature.gradient,
                  }
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 }, 
                  textAlign: 'center', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Box sx={{ flex: '0 0 auto' }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        width: { xs: 65, sm: 75, md: 80, lg: 85 },
                        height: { xs: 65, sm: 75, md: 80, lg: 85 },
                        borderRadius: '18px',
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: { xs: 2.5, sm: 3, md: 3.5 },
                        color: 'white',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      {React.cloneElement(feature.icon, { sx: { fontSize: { xs: 32, sm: 37, md: 40, lg: 42 } } })}
                      <Typography 
                        sx={{ 
                          position: 'absolute', 
                          top: '-8px', 
                          right: '-8px', 
                          fontSize: { xs: '20px', sm: '22px', md: '24px', lg: '26px' },
                          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                        }}
                      >
                        {feature.subtitle}
                      </Typography>
                    </Box>
                    
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ 
                        fontWeight: 600, 
                        color: '#2c3e50',
                        fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem', lg: '1.35rem' },
                        mb: { xs: 1.5, sm: 1.8, md: 2 },
                        fontFamily: '"Inter", "Roboto", sans-serif',
                        lineHeight: 1.3
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#64748b', 
                        mb: { xs: 2.5, sm: 3, md: 3.5 }, 
                        lineHeight: 1.6,
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' },
                        fontFamily: '"Inter", "Roboto", sans-serif'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                            color: '#2c3e50',
                            fontFamily: '"Inter", "Roboto", sans-serif'
                          }}
                        >
                          Excellence
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 700, 
                            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                            color: feature.color,
                            fontFamily: '"Inter", "Roboto", sans-serif'
                          }}
                        >
                          {feature.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        className="progress-bar"
                        variant="determinate"
                        value={feature.progress}
                        sx={{
                          height: { xs: 5, sm: 6, md: 7 },
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          transition: 'transform 0.3s ease',
                          '& .MuiLinearProgress-bar': {
                            background: feature.gradient,
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                    
                    <Chip
                      label="Premium Quality"
                      size="small"
                      sx={{
                        background: feature.gradient,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem' },
                        borderRadius: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontFamily: '"Inter", "Roboto", sans-serif',
                        alignSelf: 'center',
                        '& .MuiChip-label': {
                          px: { xs: 1.2, sm: 1.5, md: 1.8, lg: 2 },
                          py: 0.5
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            textAlign: 'center', 
            p: { xs: 4, md: 6 }, 
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: '#2c3e50',
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontFamily: '"Inter", "Roboto", sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Why Choose UK KIDS International School?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#64748b', 
              maxWidth: '800px', 
              mx: 'auto', 
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: { xs: 2, md: 0 },
              fontFamily: '"Inter", "Roboto", sans-serif',
              fontWeight: 400
            }}
          >
            We provide an immersive and engaging learning experience that prepares students to excel 
            academically and beyond. Our holistic approach ensures that every child develops into a 
            compassionate, responsible global citizen ready to contribute to a sustainable future.
          </Typography>
        </Box>
      </Container>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default FeaturesSection; 