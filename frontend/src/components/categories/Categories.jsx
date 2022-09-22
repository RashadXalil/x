import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios.instance";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query'

const Categories = () => {

    const { isLoading, error, data } = useQuery('repoData', () =>
        axiosInstance.get('/categories')
        .then(res => res.data)
    ) 
   if (isLoading) return 'Loading...' 
   if (error) return 'An error has occurred: ' + error.message    

    return(
        <>
        <Box sx={{ bgcolor: '#cfe8fc', p: "5rem"}} align="center">            
            <Typography sx={{color: '#f542ec'}} align="center" variant="h3" gutterBottom>
                Categories
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>                        
                        <TableCell sx={{fontSize:"32px"}} align="left">ID</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Category Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>                    
                    {
                                    
                        data.map(item => ( 
                            <TableRow key={item.id}>
                                <>
                                    <TableCell sx={{fontSize:"24px"}}>{item?.id}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.name}</TableCell>                                       
                                </>                        
                            </TableRow>))                        
                    }
                
                </TableBody>
            </Table>
        </Box>
        </>
    )
}

export default Categories;