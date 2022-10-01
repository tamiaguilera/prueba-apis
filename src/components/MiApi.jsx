import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const MiApi = ({rows}) => {

  return (
    <main>
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
