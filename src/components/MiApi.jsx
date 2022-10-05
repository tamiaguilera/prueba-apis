import { Card, CardContent, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const MiApi = () => {

  const [api, setApi] = useState([]);
  const [rows, setRows] = useState([]);
  const [orden, setOrden] = useState('');

  useEffect(() => {
    llamarServicio();
  }, [])

  useEffect(() => {
    ordenarDatos();
  }, [orden])

  const llamarServicio = () => {
    fetch('/index.php/ws/getLocalesTurnos')
    .then(res => res.json())
    .then(res => {
      setApi(res);
      setRows(res);
    });
  }

  const ordenarDatos = () => {
    const filas = [...rows];
    let resultado = [];
    if(orden === 'asc'){
      resultado = filas.sort( (a, b) => a.comuna_nombre.toLowerCase().localeCompare(b.comuna_nombre.toLowerCase()));
    }else{
      resultado = filas.sort( (a, b) => b.comuna_nombre.toLowerCase().localeCompare(a.comuna_nombre.toLowerCase()));
    }
    setRows(resultado);
  }

  const handleBuscar = (e) => {
    const buscar = e.target.value.toLowerCase();
    const filtrar = api.filter( (row) => {
      const comuna = row.comuna_nombre.toLowerCase();
      return comuna.includes(buscar);
    })
    setRows(filtrar);
  }

  const handleOrdenar = (e) => {
    setOrden(e.target.value);
  }
  
  return (
    <main>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <TextField 
                    id="outlined-basic" 
                    label="Buscar Comuna"  
                    variant="filled"
                    size="small"
                    color="secondary"
                    onChange={handleBuscar}
                    sx={{ mr: 4}} />
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
            </CardContent>
        </Card>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Nombre Local</TableCell>
                    <TableCell align="center">Comuna</TableCell>
                    <TableCell align="center">Dirección</TableCell>
                    <TableCell align="center">Horarios</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.local_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.local_nombre}
                    </TableCell>
                    <TableCell align="center">{row.comuna_nombre}</TableCell>
                    <TableCell align="center">{row.local_direccion}</TableCell>
                    <TableCell align="center">{`${row.funcionamiento_hora_apertura} - ${row.funcionamiento_hora_cierre}`}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </main>
  )
}
