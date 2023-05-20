import React, { ChangeEvent, FormEvent } from 'react'
import { Stack, Button, Typography, Box, MenuItem, TextField, Grid} from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios'

export const Form = () => {
        const navigate = useNavigate();
        const [formats, setFormats] = useState<string | null>(null);
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [businessEmail, setBusinessEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");        
        const [companyName, setCompanyName] = useState('');
        const [jobRole, setJobRole] = useState('');
        const [companySize, setCompanySize] = useState('');
        const [website, setWebsite] = useState('');
        const [appType, setAppType] = useState('');
        const [appLaunchTime, setAppLaunchTime] = useState('');
        const [targetBudget, setTargetBudget] = useState('');
        const [projectType, setProjectType] = useState('');
        const [additinalComments, setAdditionalComments] = useState('');


        const [errors,setErrors]= useState({
            firstName: "",
            lastName: "",
            businessEmail: "",
            phoneNumber: "",
            companyName: "",
            jobRole: "",
            companySize: "",
            website: "",
            appType:"",
            appLaunchTime:"",
            targetBudget:"",
            projectType:"",
            additinalComments:"",
        })
        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            axios.post("http://localhost:8000/api/users", {
                firstName,
                lastName,
                businessEmail,
                phoneNumber,
                companyName,
                jobRole,
                companySize,
                website,
                appType,
                appLaunchTime,
                targetBudget,
                projectType,
                additinalComments,
            }).then(res=> navigate('/welcome')).catch(err => console.log(err));
        };
        
    return (
        <Stack>
            <Stack>
            <Box bgcolor="rgb(12,31,65)" p={2}>
                    <a href='/'><Typography variant='h6' component='h1' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>buildFire</Typography></a>
                    {/* <Stack>
                        <Button style={{ position: "relative", left: "5% !important" }}>
                            <img width='150px' src='https://apmyztgbko.cloudimg.io/s/width/300/https://s3-us-west-2.amazonaws.com/imageserver.prod/1717/70d99d60-bba1-11ea-afeb-9b24b15f2961.png' />
                        </Button>
                    </Stack> */}




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
                        <Typography variant='h3' component='h1' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold', marginBottom:'50px' }}>Book A Professional App Consultation</Typography>
                        <Typography variant='h6' component='h3' style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', paddingLeft: 0 }}>
                                <li><CheckIcon sx={{ backgroundColor: 'blue' ,color: 'white', borderRadius:'50%' }}/> See examples of apps we've built (There are over 10,000 of them!)</li>
                                <li><CheckIcon sx={{ backgroundColor: 'blue' ,color: 'white', borderRadius:'50%' }}/> Get a detailed roadmap that shows you how quickly we can launch your app</li>
                                <li><CheckIcon sx={{ backgroundColor: 'blue' ,color: 'white', borderRadius:'50%' }}/> See how an App Development Platform like BuildFire makes building an app easy</li>
                            </ul>
                        </Typography>
                    </Stack>
                    <Box sx={{ backgroundColor: 'white' }}>
                        <h1>Get a Free Consultation</h1>
                        <Stack sx={{ width: "90%" }}>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column" spacing={2}>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <TextField 
                                            label="First Name" 
                                            variant="outlined" 
                                            value={firstName}
                                            required
                                            onChange={(e) => setFirstName(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={6}>
                                        <TextField 
                                            label="Last Name" 
                                            variant="outlined" 
                                            value={lastName}
                                            required
                                            onChange={(e) => setLastName(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <TextField 
                                            label="Business Email" 
                                            variant="outlined" 
                                            value={businessEmail}
                                            required
                                            onChange={(e) => setBusinessEmail(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField 
                                            label="Phone Number" 
                                            variant="outlined" 
                                            value={phoneNumber}
                                            required
                                            type='number'
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                            <TextField 
                                                label="Company Name" 
                                                variant="outlined" 
                                                value={companyName}
                                                required
                                                type='text'
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                fullWidth
                                            />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                    {/* <InputLabel id="demo-simple-select-label">Job Role</InputLabel> */}
                                    <Box>
                                    <TextField 
                                        label='Job Role' 
                                        select 
                                        value={jobRole} 
                                        required
                                        onChange={(e) => setJobRole(e.target.value)}
                                        fullWidth>
                                        <MenuItem value='ceo'>CEO/Owner</MenuItem>
                                        <MenuItem value='executiveOfficer'>Executive Officer</MenuItem>
                                        <MenuItem value='middleManagement'>Middle Management</MenuItem>
                                        <MenuItem value='professional'>Professional</MenuItem>
                                        <MenuItem value='admin'>Admin/Support Staff</MenuItem>
                                        <MenuItem value='student'>Student</MenuItem>
                                        <MenuItem value='other'>Other</MenuItem>
                                    </TextField>
                                    </Box>
                                    </Grid>
                                </Grid>
                                

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                    {/* <InputLabel id="demo-simple-select-label">Job Role</InputLabel> */}
                                    <Box>
                                        <TextField 
                                            label="Company Size" 
                                            select 
                                            value={companySize} 
                                            required
                                            onChange={(e) => setCompanySize(e.target.value)}
                                            fullWidth>
                                            <MenuItem value='one'>1</MenuItem>
                                            <MenuItem value='twoToTen'>2-10</MenuItem>
                                            <MenuItem value='elevenToFifty'>11-50</MenuItem>
                                            <MenuItem value='fiftyOneToTwoHundred'>51-200</MenuItem>
                                            <MenuItem value='oneThousandToFiveThousand'>1000-5000</MenuItem>
                                            <MenuItem value='fiveThousandOneToTenThousand'>5001-10000</MenuItem>
                                            <MenuItem value='tenThousandPlus'>10000+</MenuItem>
                                        </TextField>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Website" value={website} onChange={(e)=>setWebsite(e.target.value)} variant="outlined" fullWidth required/>
                                    </Grid>
                                </Grid>


                                    <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                    {/* <InputLabel id="demo-simple-select-label">Job Role</InputLabel> */}
                                    <Box>
                                        <TextField 
                                            label="App Type" 
                                            select 
                                            value={appType} 
                                            required
                                            onChange={(e) => setAppType(e.target.value)}
                                            fullWidth>
                                            <MenuItem value='ecommerce'>E-Commerce</MenuItem>
                                            <MenuItem value='education'>education</MenuItem>
                                            <MenuItem value='entertainment'>Entertainment</MenuItem>
                                            <MenuItem value='eventConference'>Event/Conference</MenuItem>
                                            <MenuItem value='customerLoyalty'>Customer Loyalty</MenuItem>
                                            <MenuItem value='contentInformation'>Content Information (highly unique)</MenuItem>
                                            <MenuItem value='healthAndFitness'>Health & Fitness</MenuItem>
                                            <MenuItem value='internalBusinessApp'>Internal Business App</MenuItem>
                                            <MenuItem value='lifestyle'>Lifestyle</MenuItem>
                                            <MenuItem value='music'>Music</MenuItem>
                                            <MenuItem value='news'>News</MenuItem>
                                            <MenuItem value='onDemandService'>On Demand Service</MenuItem>
                                            <MenuItem value='productivityUtility'>Productivity/Utility</MenuItem>
                                            <MenuItem value='realEstate'>Real Estate</MenuItem>
                                            <MenuItem value='sports'>Sports</MenuItem>
                                            <MenuItem value='travel'>Travel</MenuItem>
                                            <MenuItem value='other'>Other</MenuItem>
                                        </TextField>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <Box>
                                        <TextField 
                                            label="App Launch Timeline" 
                                            select 
                                            value={appLaunchTime} 
                                            required
                                            onChange={(e) => setAppLaunchTime(e.target.value)}
                                            fullWidth>
                                            <MenuItem value='lessThanThirtyDays'>Less than 30 days</MenuItem>
                                            <MenuItem value='thirtyToNinetyDays'>30-90 Days</MenuItem>
                                            <MenuItem value='moreThanNinetyDays'>More than 90 Days</MenuItem>
                                        </TextField>                                        
                                    </Box>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                    {/* <InputLabel id="demo-simple-select-label">Job Role</InputLabel> */}
                                    <Box>
                                    <TextField 
                                            label="Target budget" 
                                            select 
                                            value={targetBudget} 
                                            required
                                            onChange={(e) => setTargetBudget(e.target.value)}
                                            fullWidth>
                                            <MenuItem value='zeroToFiveK'>$0-5k (DIY Platform)</MenuItem>
                                            <MenuItem value='fiveToTenK'>$5-10k (Pro-Services)</MenuItem>
                                            <MenuItem value='tenToTwentyK'>$10k-20k (Pro-Services)</MenuItem>
                                            <MenuItem value='twentyPlusK'>$20k+ (Custom Development) (Pro-Services)</MenuItem>
                                        </TextField>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <Box>
                                        <TextField 
                                            label="What kind of project is this?" 
                                            select 
                                            value={projectType} 
                                            required
                                            onChange={(e) => setProjectType(e.target.value)}
                                            fullWidth>
                                            <MenuItem value='company'>An app for my company</MenuItem>
                                            <MenuItem value='client'>An app for a client</MenuItem>
                                            <MenuItem value='myself'>An app for myself</MenuItem>
                                            <MenuItem value='other'>Other</MenuItem>
                                        </TextField>
                                    </Box>
                                    </Grid>
                                </Grid>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button type='submit' variant='contained' style={{ marginBottom: '25px' }}>Submit</Button>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Stack sx={{ textAlign: 'center' }}>
                                    By clicking “Submit” you agree to BuildFire{' '}
                                    <span style={{ display: 'inline-block' }}>
                                        <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                                    </span>
                                    </Stack>
                                </div>
                                </div>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            </Stack>
            <Stack>
                <Box>
                    <Typography variant='h4' component='h3' style={{ textAlign: 'center', color: 'black', marginTop:'50px' }}>Over 10,000 apps created with BuildFire.</Typography>
                </Box>
            </Stack>
        </Stack>
    )
}

