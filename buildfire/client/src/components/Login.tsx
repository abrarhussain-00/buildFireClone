import React, { FormEvent } from 'react'
import { Stack, Button, Typography, Box, MenuItem, TextField, Grid } from '@mui/material'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios'


export const Login = () => {
    const navigate = useNavigate();
    const [businessEmail, setBusinessEmail] = useState("");
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        businessEmail: "",
        password: "",
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/login/users", {
            businessEmail,
            password,
        }).then(res => navigate('/login')).catch(err => console.error(err));
    }

    return (
        <Stack style={{backgroundColor: 'rgb(239, 240, 240)' }}>

        <Stack style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Stack style={{ width: '35%',  padding: '10px', margin: '0 auto' }}>
                <Stack style={{ backgroundColor: 'white', border: '0.5px solid lightGrey', padding: '10px' }}>
                    {/* <Stack><h4><span style={{ color: 'blue' }}>build</span>fire</h4></Stack> */}
                    <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'25px' }}>
                        <img width='250px' src='https://apmyztgbko.cloudimg.io/s/width/300/https://s3-us-west-2.amazonaws.com/imageserver.prod/1717/70d99d60-bba1-11ea-afeb-9b24b15f2961.png' />                        
                    </Stack>
                        <form onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2}>
                            <Grid>
                                <Grid>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        value={businessEmail}
                                        required
                                        onChange={(e) => setBusinessEmail(e.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Stack>
                        <Button type='submit' variant='contained' style={{ marginTop: '25px', marginBottom: '10px' }}>Submit</Button>
                    </form>
                    <Link to='/reset'>I can't access my account</Link>
                </Stack>
            </Stack>
        </Stack>
        </Stack>

    )
}

