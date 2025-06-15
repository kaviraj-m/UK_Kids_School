import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
} from '@mui/material';
import { 
  Psychology, 
  Public, 
  EmojiObjects, 
  Favorite,
  AutoStories,
  Groups3,
  Celebration,
  ColorLens
} from '@mui/icons-material';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Psychology />,
      title: 'Individual Care 💖',
      description: 'Observing each child with individual attention and developing their unique identity',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
      bgColor: '#FFF0F0'
    },
    {
      icon: <Public />,
      title: 'Global Citizens 🌍',
      description: 'Enabling children to think globally and act locally for a sustainable future',
      gradient: 'linear-gradient(135deg, #4ECDC4, #7FD8D2)',
      bgColor: '#F0FFFE'
    },
    {
      icon: <AutoStories />,
      title: 'Lifelong Learners 📚',
      description: 'Holistic curriculum developing all aspects of learner\'s personality',
      gradient: 'linear-gradient(135deg, #FFEAA7, #FFE066)',
      bgColor: '#FFFEF0'
    },
    {
      icon: <Groups3 />,
      title: 'Collaborative Learning 🤝',
      description: 'Promoting deep inquiry and self-reflection through cooperative learning',
      gradient: 'linear-gradient(135deg, #96CEB4, #B8E6D1)',
      bgColor: '#F0FFF8'
    },
    {
      icon: <EmojiObjects />,
      title: 'Innovative Methods 💡',
      description: 'Using cutting-edge teaching methods and personalized attention',
      gradient: 'linear-gradient(135deg, #45B7D1, #74C7E3)',
      bgColor: '#F0F9FF'
    },
    {
      icon: <Favorite />,
      title: 'Passionate Educators 🌟',
      description: 'Dedicated team committed to challenging every student to reach their best',
      gradient: 'linear-gradient(135deg, #FF7675, #FF9999)',
      bgColor: '#FFF0F0'
    }
  ];

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F3E5F5 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          animation: 'bounce 2s infinite',
          opacity: 0.3
        }}
      >
        <Celebration sx={{ fontSize: 80, color: '#FF6B6B' }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          animation: 'bounce 3s infinite reverse',
          opacity: 0.3
        }}
      >
        <ColorLens sx={{ fontSize: 70, color: '#4ECDC4' }} />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="🌈 Our Special Approach"
            sx={{
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              mb: 3,
              px: 3,
              py: 1,
            }}
          />
          
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 800, 
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3rem' }
            }}
          >
            The UK KIDS Difference ✨
          </Typography>
        </Box>
        
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(78,205,196,0.1))',
                border: '3px solid rgba(255,107,107,0.3)',
                height: '100%'
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: '#FF6B6B', 
                  fontWeight: 800,
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                🎯 Our Philosophy
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 2, 
                  color: '#333',
                  fontSize: '1.15rem',
                  textAlign: 'center'
                }}
              >
                The UK KIDS Difference is observing the kids with individual care and develop 
                the identity. We aim to enable Children to become Compassionate and responsible 
                global Citizens, to think globally and act locally Contributing towards a 
                Sustainable Future! 🌍
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 2, 
                  color: '#333',
                  fontSize: '1.15rem',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}
              >
                The holistic curriculum develops all aspects of learner's Personality, 
                Empowering them to become Lifelong Learners. 📖✨
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(78,205,196,0.1), rgba(69,183,209,0.1))',
                border: '3px solid rgba(78,205,196,0.3)',
                height: '100%'
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: '#4ECDC4', 
                  fontWeight: 800,
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                🚀 Our Approach
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 2, 
                  color: '#333',
                  fontSize: '1.15rem',
                  textAlign: 'center'
                }}
              >
                The Collaborative, Cooperative Learning Promotes deep inquiry, self reflection 
                and enable students to healthy relationship with themselves and the world at large! 🤝
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 2, 
                  color: '#333',
                  fontSize: '1.15rem',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}
              >
                Our Dedicated team of passionate educators is committed to Challenging Every 
                student to reach for their personal best. Through innovative teaching methods 
                and personalized Attention, we Prepare Students to Excel Academically and beyond! 🎓
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: feature.bgColor,
                  border: '2px solid transparent',
                  background: `${feature.bgColor} padding-box, ${feature.gradient} border-box`,
                  transition: 'all 0.4s ease',
                  '&:hover': { 
                    transform: 'translateY(-10px) scale(1.02)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  {React.cloneElement(feature.icon, { sx: { fontSize: 40 } })}
                </Box>
                
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#333',
                    fontSize: '1.3rem',
                    mb: 2
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#555', 
                    lineHeight: 1.8,
                    fontSize: '1rem'
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}
      </style>
    </Box>
  );
};

export default AboutSection; 