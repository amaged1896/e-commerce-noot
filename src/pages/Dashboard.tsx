import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Create from '../components/Create';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/products';





export default function Dashboard() {
    const { data } = useQuery(['products'], fetchProducts);
    console.log(data?.data);
    return (
        <Container sx={{ marginTop: "50px" }}>
            <Create />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Description</TableCell>
                            <TableCell >Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data?.results.map((row: any) => (
                            <TableRow key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name.map((ele: { text: string; }) => ele.text)}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.description.map((ele: { text: string; }) => ele.text)}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.created_at}
                                </TableCell>
                                {/* <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
