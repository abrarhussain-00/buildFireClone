import React from 'react'
import { Stack, Button, ToggleButton, ToggleButtonGroup, Typography, colors, Box, IconButton, Drawer, Popover, FormControl, MenuItem, InputLabel, Select, Menu, Grid} from '@mui/material'
import { useState } from 'react';
import { blue } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link, useParams } from 'react-router-dom'

export const GetStarted = () => {
  return (
    <Stack style={{ background: `url(https://buildfire.com/wp-content/themes/buildfire/assets/images/gsf-hero-sm.jpg) center center no-repeat`, backgroundSize: 'cover', height: '100vh' }}>
        <Stack>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <p style={{ backgroundColor: '', margin: '0 0 0 10%'  }}>
                    <a href='/'>
                    <p style={{ backgroundColor: '', padding: '' }}>
                        <img width='150px' src='https://buildfire.com/wp-content/themes/buildfire/assets/images/bf-logo-white.svg' />
                    </p>
                    </a>
                </p>
            </div>
            <Stack>
                <Typography variant='h6' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '75px', color:'white' }}>Turn your app idea into reality</Typography>
                <Typography variant='h3' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '25px', color:'white' }}>How would you like your app built?</Typography>
            </Stack>
        </Stack>
        <Stack style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction='row' gap='10px'>
                    <Stack style={{ justifyContent: 'center', alignItems: 'center', marginTop:'25px'}}>
                        <Stack style={{ height:'500px' , width: '50%', padding: '10px', margin: '0 auto' }}>
                            <Stack style={{ backgroundColor: 'white', border: '0.5px solid lightGrey', padding: '10px' }}>
                                <div style={{ borderRadius:'50%'}}>
                                    <Typography variant='h5' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', borderRadius:'50%', marginBottom:'15px'}}>I want my app built for me</Typography>
                                </div>
                                <Link to='/demo'><Button variant='contained'>Build it for me --&gt;</Button></Link>
                            </Stack>
                            <Stack style={{ backgroundColor: 'rgb(244,244,244)', border: '0.5px solid lightGrey', padding: '10px' }}>
                                <div style={{ borderRadius:'50%'}}>
                                    <Typography style={{ textAlign: 'center', fontWeight: '', borderRadius:'50%', marginBottom:'15px'}}>Get a world-class app built by our talented design and development team </Typography>
                                </div>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack style={{ justifyContent: 'center', alignItems: 'center', marginTop:'25px'}}>
                        <Stack style={{ height:'500px' , width: '50%', padding: '10px', margin: '0 auto' }}>
                            <Stack style={{ backgroundColor: 'white', border: '0.5px solid lightGrey', padding: '10px' }}>
                                <div style={{ borderRadius:'50%'}}>
                                    <Typography variant='h5' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', borderRadius:'50%', marginBottom:'15px'}}>I want to build it myself</Typography>
                                </div>
                                <Link to='/'><Button variant='contained'>Build it myself --&gt;</Button></Link>
                            </Stack>
                            <Stack style={{ backgroundColor: 'rgb(244,244,244)', border: '0.5px solid lightGrey', padding: '10px' }}>
                                <div style={{ borderRadius:'50%'}}>
                                    <Typography style={{ textAlign: 'center', fontWeight: '', borderRadius:'50%', marginBottom:'15px'}}>Simple intuitive app builder. No coding skills required. Unlimited customization</Typography>
                                </div>
                            </Stack>
                        </Stack>
                    </Stack>
            </Stack>
        </Stack>
    </Stack>

  )
}
