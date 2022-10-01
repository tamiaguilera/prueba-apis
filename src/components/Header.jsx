import { AppBar, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = ({handleBuscar, orden, handleOrdenar}) => {
  return (
    <header>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Farmacias de Turno
                    </Typography>
                    <TextField 
                        id="outlined-basic" 
                        label="Buscar Comuna"  
                        variant="filled"
                        size="small"
                        color="secondary"
                        onChange={handleBuscar}
                        sx={{ mr: 4}} />
                    <Box sx={{ flexGrow: 1}} />
                    <FormControl size="small" sx={{m: 1, minWidth: 120}}>
                        <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={orden}
                            label="Ordenar"
                            onChange={handleOrdenar}
                        >
                            <MenuItem value={'asc'}>A - Z</MenuItem>
                            <MenuItem value={'des'}>Z - A</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    </header>
  )
}
