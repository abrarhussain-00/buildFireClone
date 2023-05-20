import React from 'react'
import { Stack, Button, ToggleButton, ToggleButtonGroup, Typography, colors, Box, IconButton, Drawer, Popover, FormControl, MenuItem, InputLabel, Select, Menu, Grid } from '@mui/material'
import { useState } from 'react';
import { blue } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link, useParams } from 'react-router-dom'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';



export const Main = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({
        formats,
    })

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
    }
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack>
            <Stack direction='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ marginLeft: '5%' }}>
                    <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small' color='success' exclusive>
                        <ToggleButton value='bold' style={formats === 'bold' ? { backgroundColor: blue[500], color: 'white' } : {}}>App Development Platform</ToggleButton>
                        <ToggleButton value='italic' style={formats === 'italic' ? { backgroundColor: blue[500], color: 'white' } : {}}>BuildFire Plus</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div style={{ marginLeft: 'auto', marginRight: '5%' }}>
                    <a href="/login">Sign in</a>
                </div>
            </Stack>


            <Stack>
                <Stack spacing={5} direction='row' justifyContent='center'>
                    <Button>
                        <img width='150px' src='https://apmyztgbko.cloudimg.io/s/width/300/https://s3-us-west-2.amazonaws.com/imageserver.prod/1717/70d99d60-bba1-11ea-afeb-9b24b15f2961.png' />
                    </Button>
                    {/*{/* TODO: Drop Down! */}
                    <div>
                        <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        >
                        Solutions &#8964;
                        </Button>
                        <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>BuildFire</MenuItem>
                                    <MenuItem onClick={handleClose}>Custom App Development</MenuItem>
                                    <MenuItem onClick={handleClose}>App Launch Kit</MenuItem>
                                    <MenuItem onClick={handleClose}>Conceirge Service</MenuItem>
                                    <MenuItem onClick={handleClose}>App Launch Kit</MenuItem>
                                    <MenuItem onClick={handleClose}>App Developement Platform</MenuItem>
                                    <MenuItem onClick={handleClose}>BuildFire Reseller</MenuItem>
                                    <MenuItem onClick={handleClose}>Ecommerce App</MenuItem>
                                    <MenuItem onClick={handleClose}>Employee Communication</MenuItem>
                                    <MenuItem onClick={handleClose}>Content/Podcasts/Media</MenuItem>
                                    <MenuItem onClick={handleClose}>Schools and Universities</MenuItem>
                                    <MenuItem onClick={handleClose}>Mobile Apps for Events</MenuItem>
                                    <MenuItem onClick={handleClose}>Religous Organizations</MenuItem>
                                    <MenuItem onClick={handleClose}>Fitness & Wellness Apps</MenuItem>
                                    <MenuItem onClick={handleClose}>Workflow App Builder</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div>
                    <Button>Features &#8964;</Button>

                    {/*================================= Feautures Dropdown================================= */}

                    {/* <div>
                        <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        >
                        Features
                        </Button>
                        <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div> */}
                    {/*================================= Feautures Dropdown Done================================= */}



                    <Button>Reseller</Button>
                    <Button>Pricing</Button>
                    <Button>Customer Stories</Button>
                    <Button>Resources &#8964;</Button>

                    {/*================================= Resources Dropdown================================= */}
                    {/* <div>
                        <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        >
                        Resources
                        </Button>
                        <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div> */}
                    {/*================================= Resources Dropdown Done================================= */}

                    <Link to='/get-started'><Button variant='contained'>Build an app</Button></Link>
                </Stack>
            </Stack>

            <Box bgcolor="rgb(12,31,65)" p={2}>
                <Stack m='5%'>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: 'rgb(12,31,65)',
                        p: 2
                    }}
                >
                    <Stack sx={{ flexGrow: 1 }}>
                        <Typography variant='h6' component='h1' style={{ textAlign: 'left', color: 'blue', fontWeight: 'bold' }}>FOR THOSE THAT DEMAND THE BEST</Typography>
                        <Typography variant='h4' component='h1' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Custom Mobile App Development</Typography>
                        <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                            However big or small your need, we’ll build you a beautiful mobile app that’s tailored specifically to your business needs.
                        </Typography>
                    </Stack>
                        <img src='topbg.png' style={{ width: '500px' }} />
                </Stack>
                <Stack direction='row' justifyContent='flex-start'>

                <Link to='/demo'><Button variant='contained'>Book an App Strategy Session</Button></Link>
                </Stack>
                </Stack>

            </Box>
            <Box bgcolor="rgb(248,250,252)" p={2}>
                <Stack direction='row' justifyContent='center'>
                    <img src='pepsi.png' style={{ width: '150px' }} />
                    <img src='paypal.png' style={{ width: '150px' }} />
                    <img src='praxair.png' style={{ width: '150px' }} />
                    <img src='cisco.png' style={{ width: '150px' }} />
                    <p>Powering Over 10,000 Apps With Our App Maker</p>
                    <img src='pandora.png' style={{ width: '150px' }} />
                    <img src='aon.png' style={{ width: '150px' }} />
                    <img src='travelers.png' style={{ width: '150px' }} />
                    <img src='laphil.png' style={{ width: '150px' }} />
                </Stack>
            </Box>
            <Stack><h1>Our Core Services</h1></Stack>
            <Stack m='5%'>
                <Box display="flex" justifyContent="space-between" gap='5%'>
                    <Box bgcolor="rgb(12,31,65)" p={3} flex={1}>
                        <Stack>
                            <img src='development.svg' style={{ width: '50px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Mobile</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Our team of highly capable developers have a breadth of experience developing apps for many industries and can build any type of functionality for your app.
                            </Typography>
                        </Stack>
                    </Box>
                    <Box bgcolor="rgb(12,31,65)" p={3} flex={1}>
                        <Stack>
                            <img src='design.svg' style={{ width: '50px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>UI/UX App Design</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Design is not just what it looks like and feels like. Design is how it works. We pride ourselves in designing apps that are both visually stunning and highly intuitive.                        </Typography>
                        </Stack>
                    </Box>
                    <Box bgcolor="rgb(12,31,65)" p={3} flex={1}>
                        <Stack>
                            <img src='cadconsulting.svg' style={{ width: '50px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Strategic Consulting</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Not only do you get a team of developers with BuildFire, we’re your team of strategic app consultants that are tightly aligned with your businesses objectives.                        </Typography>
                        </Stack>
                    </Box>
                    <Box bgcolor="rgb(12,31,65)" p={3} flex={1}>
                        <Stack>
                            <img src='cloud.svg' style={{ width: '50px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Cloud Based Infrastructure</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Building apps for massive scale is right in our wheelhouse, with over 25M+ users on the BuildFire Platform rest assured we can handle any challenge your app presents.                        </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
            <Stack>
                <h1>You Know Your Business.<span style={{ color: "blue" }}> We know our mobile apps.</span></h1>
            </Stack>
            <Stack>
                <p>Don’t waste valuable time and resources trying to figure it out on your own. Mobile apps are hard, but with BuildFire they don’t need to be.</p>
                <center><img src="video.jpeg" style={{ width: '850px' }} /></center>
            </Stack>
            <Stack m='5%'>
                <Box display="flex" justifyContent="space-between" gap='5%'>
                    <Box p={0.5} flex={1}>
                        <Stack>
                            <img src='more-money.png' style={{ width: '50px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>More App For Your Money</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
                                Because you can take advantage of features and infrastructure we’ve already built.</Typography>
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack>
                            <img src='faster-timelines.png' style={{ width: '50px' }} />
                            <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Faster Timelines</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
                                Because we can focus on just the components unique to your app.
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box p={0.5} flex={1} justifyContent='center'>
                            <Stack>
                                <img src='tradeoffs.png' style={{ width: '50px' }} />
                                <Typography variant='h4' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Fewer Tradeoffs</Typography>
                                <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
                                    Between quality, speed, and price.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'3%' }}>
                    <Link to='/demo'><Button variant='contained' size='large'>Request a Quote</Button></Link>
                </Box>
            </Stack>

            {/* =============================Leverage ============================= */}
            <Stack m='5%'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h4' component='h3' style={{ textAlign: 'left', fontWeight: 'bold', marginTop: '50px' }}>Leverage Our Experience Building<span style={{ color: "blue" }}> Over 10,000 Apps</span></Typography>
                        <h3 style={{ textAlign: 'left' }}>You’re looking for a partner, not just a robot on the keyboard. With our immense level of experience building mobile apps in nearly every industry, rest assured we’ll be able to guide you down the right path.</h3>
                        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Link to='/demo'><Button variant='contained' size='large'>Get Started</Button></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='plus-design.png' style={{ width: '500px', marginTop: '50px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Stack>

            {/* =============================Scale ============================= */}
            <Stack m='5%'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='plus-development.png' style={{ width: '500px', marginTop: '50px' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h4' component='h3' style={{ textAlign: 'left', fontWeight: 'bold', marginTop: '50px' }}>Scale Without Worry With<span style={{ color: "blue" }}> Battle Tested Infrastructure</span></Typography>
                        <h3 style={{ textAlign: 'left' }}>You’re looking for a partner, not just a robot on the keyboard. With our immense level of experience building mobile apps in nearly every industry, rest assured we’ll be able to guide you down the right path.</h3>
                        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Link to='/demo'><Button variant='contained' size='large'>Get Started</Button></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Stack>

            {/* =============================Top Notch ============================= */}

            <Stack m='5%'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h4' component='h3' style={{ textAlign: 'left', fontWeight: 'bold', marginTop: '50px' }}>Top Notch<span style={{ color: "blue" }}> Engineers Working On Your Project</span></Typography>
                        <h3 style={{ textAlign: 'left' }}>Since we’re able to save considerable time and cost by building on top of existing features with the BuildFire Platform, we’re able to put your development budget towards world className engineers.</h3>
                        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Link to='/demo'><Button variant='contained' size='large'>Get Started</Button></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='plus-grow.png' style={{ width: '500px', marginTop: '50px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Stack>

            {/* =============================Limitless Integration ============================= */}

            <Stack >
                <Typography variant='h4' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '50px' }}>Limitless Integrations</Typography>
                <h3 style={{ textAlign: 'center' }}>Just because your app is built in the BuildFire ecosystem, doesn’t mean you don’t have all the flexibility and customization that an app built from scratch would have.</h3>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}></Box>
            </Stack>

            <Stack >
                <Box display="flex" justifyContent="space-between" gap='10px' marginTop='50px' marginBottom=''>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='thrid-party-api.svg' />
                            Third Party APIs
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='custom-databases.svg' />
                            Custom Database
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='iBeacon.svg' />
                            iBeacon
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='bluetooth.svg' />
                            Bluetooth
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='iot.svg' />
                            loT Integrations
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <img style={{ backgroundColor: "rgb(12,31,65)", width: '100px', borderRadius: '50%' }} src='health-kit.svg' />
                            Health Kit
                        </Stack>
                    </Box>
                </Box>
            </Stack>
            {/* ===============================END ===============================*/}
            <Stack>
                <Typography variant='h4' component='h3' style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '50px', marginTop:'50px' }}>What Some Of Our Cliets Say About Us</Typography>
            </Stack>
            <Stack m='5%'>
                <Box display="flex" justifyContent="space-between" gap='5%'>
                    <Box bgcolor="rgb(12,31,65)" p={0.5} flex={1}>
                        <Stack>
                            <img src='311-logo-png-transparent.png' style={{ width: '100px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                “We’ve never done anything like this. So having somebody walk us through every step was really great. If I had any questions, I could always call or email, and my answer was always there within a couple of hours.”                        </Typography>
                            <br />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Jake Allard
                                <br />
                                Marketing Manager, 311
                            </Typography>
                        </Stack>
                    </Box>

                    <Box bgcolor="rgb(12,31,65)" p={0.5} flex={1}>
                        <Stack>
                            <img src='olive-you-logos.png' style={{ width: '100px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                “I’m not a developer. I’m not someone who knows code fluently. So I needed something that was just user-friendly and that I would be able to manage on my own. BuildFire was for sure that for me.”
                            </Typography>
                            <br />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Caroline Fausel
                                <br />
                                Owner, Olive You Whole
                            </Typography>
                        </Stack>
                    </Box>
                    <Box bgcolor="rgb(12,31,65)" p={0.5} flex={1}>
                        <Stack>
                            <img src='mc-logo.png' style={{ width: '100px', marginTop: '25px', marginBottom: '25px' }} />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                The app that BuildFire built for the Pebble Beach car rally was fantastic! It’s been a powerful tool to make our events more engaging and was a great resource for everyone who attended.
                            </Typography>
                            <br />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Andy Thomas
                                <br />
                                VP Marketing and Communications
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Stack>

            <Box bgcolor="rgb(31,126,249)" p={2} style={{ marginTop: '25px' }}>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}

                >
                    <Stack sx={{ flexGrow: 1 }} style={{ marginTop: '' }} m='5%'>
                        <Typography variant='h4' component='h1' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Curious how much money you could save using BuildFire for custom app development?</Typography>
                    </Stack>
                    <Stack m='5%'>
                    <img src='calculator.svg' style={{ width: '250px' }} />
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='flex-start' marginTop='0%' marginRight='5%'>
                    <Button variant='contained' style={{marginRight:'5%'}}>Try our App Cost Calculator</Button>
                </Stack>
            </Box>
            <Stack style={{ marginTop: '25px' }}>
                <h1>“Great things in business are never done by one person. They’re done by a TEAM of people.”</h1>
                <h4>- Steve Jobs</h4>
                <center><img src='team-img.png' width='1300px' /></center>
            </Stack>
            <Stack m='5%'>
                <Box display="flex" justifyContent="space-between" gap='5%'>
                    <Box p={0.5} flex={1}>
                        <Stack>
                            <Typography variant='h5' component='h4' style={{ textAlign: 'left', color: '', fontWeight: 'bold', marginTop: '25px', marginBottom: '15px' }}>Aligned With Your Business</Typography>
                            <Typography variant='h6' component='h4' style={{ textAlign: 'left', color: '', fontWeight: '' }}>
                                One of our most important core values is make our customers win and that’s why we take a highly consultative approach to app developement. Our number one priority is to make sure you get the outcome that you’re looking for with your app.
                            </Typography>
                            <br />
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                                Jake Allard
                                <br />
                                Marketing Manager, 311
                            </Typography>
                        </Stack>
                    </Box>

                    <Box p={0.5} flex={1}>
                        <Stack>
                            <Typography variant='h5' component='h4' style={{ textAlign: 'left', color: '', fontWeight: 'bold', marginTop: '25px', marginBottom: '15px' }}>Experience Matters</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: '', fontWeight: '' }}>
                                There are very few companies in the world that have built and published as many apps as BuildFire. Our team has extensive experience solving challenges in nearly every industry. As a result we’re able to bring a wealth of information to your project that only comes with experience.
                            </Typography>
                            <br />
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack>
                            <Typography variant='h5' component='h4' style={{ textAlign: 'left', color: '', fontWeight: 'bold', marginTop: '25px', marginBottom: '15px' }}>A Friendly Touch</Typography>
                            <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: '', fontWeight: '' }}>
                                As much as business is about driving an outcome, we’re all human too. Working with us is meant to feel like we’re an extension of your team.
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
            <Stack>
                <Box bgcolor="rgb(248,250,252)" p={2} display="flex" justifyContent="center">
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center" >
                            <Box bgcolor="white" display="inline-block" p={1}>
                                <img style={{ width: '50px' }} src='app-builder.svg' />
                            </Box>
                            <br />
                            Powerful app builder
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <Box bgcolor="white" display="inline-block" p={1}>
                                <img style={{ width: '50px' }} src='ios-and-android.svg' />
                            </Box>
                            <br />
                            iOS and Android Support
                        </Stack>
                    </Box>
                    <Box p={0.5} flex={1}>
                        <Stack alignItems="center">
                            <Box bgcolor="white" display="inline-block" p={1}>
                                <img style={{ width: '50px' }} src='unlimited-customization.svg' />
                            </Box>
                            <br />
                            Unlimited Customization
                        </Stack>
                    </Box>
                </Box>
            </Stack>

            <Stack>
                <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', zIndex: 1 }}>
                    <Box p={2} display="flex" justifyContent='space-between' style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <img src='reviews.png' width='300px' style={{ marginTop: '10px' }} />
                    </div>
                    <div style={{ flex: 1, marginLeft: '5%', marginRight: '5%',  marginTop: '10px' }}>
                        Trust the experts. We've built <b>over 10,000 mobile apps!</b>
                    </div>
                    <div style={{ marginLeft: '5%', marginRight: '5%',  marginTop: '10px' }}>
                        <Link to='/demo'><Button variant='contained'>Schedule a consultation</Button></Link>
                    </div>
                    </Box>
                </footer>
            </Stack>




            <Stack style={{zIndex: 2}} m='5%'>
                <footer>
                    <Box p={2} display="flex" justifyContent='space-between'>
                        <div>
                            <h3>Features</h3>
                            <ul>
                                <li><a href="#">Platform</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Customer Apps</a></li>
                                <li><a href="#">BuildFire</a></li>
                                <li><a href="#">Alternatives</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#">How To Create a Mobile App</a></li>
                                <li><a href="#">App Development Costs</a></li>
                                <li><a href="#">Difference</a></li>
                                <li><a href="#">Profitable Mobile App 101</a></li>
                                <li><a href="#">BuildFire SDK API Docs</a></li>
                                <li><a href="#">Mobile App Cost Calculator</a></li>
                                <li><a href="#">Customer Stories</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">E-books</a></li>
                                <li><a href="#">Webinars</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Security Policies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Customer</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">DSAR</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Suggestions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Solutions</h3>
                            <ul>
                                <li><a href="#">Custom Mobile App</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">BuildFire Reseller</a></li>
                                <li><a href="#">Ecommerce App</a></li>
                                <li><a href="#">Schools and Universities</a></li>
                                <li><a href="#">Event Mobile Apps</a></li>
                                <li><a href="#">Content/Podcasts/Media</a></li>
                                <li><a href="#">Religious</a></li>
                                <li><a href="#">Organizations</a></li>
                            </ul>
                        </div>
                        <Stack>
                            <img src="drata-soc2-light.png" width='100px' height='100px' style={{ marginTop: '20px' }} />
                            <img src="medal-2.png" width='75px' height='100px' style={{ marginTop: '50px', marginRight: '25px' }} />
                        </Stack>
                        <Stack>
                            <img src="best-app.png" width='100px' height='100px' style={{ marginTop: '20px' }} />
                            <img src="medal-3.png" width='75px' height='100px' style={{ marginTop: '50px' }} />
                        </Stack>
                    </Box>
                </footer>
            </Stack>
        </Stack>
    )
}

