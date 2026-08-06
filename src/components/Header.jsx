import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

  const aboutUsContent = `An AI Resume Builder suggests job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* app icon */}
            <img
              width={'50px'}
              height={'40px'}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10"
              alt="icon"
            />
          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none' >Ai Resume Builder</Link>
          </Typography>

          <Tooltip title={aboutUsContent} arrow>
            <Button color="inherit">About Us</Button>
          </Tooltip>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header