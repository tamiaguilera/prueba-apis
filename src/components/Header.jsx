import { AppBar, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <h2>Farmacias de Turno</h2>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </header>
  )
}
