import React from 'react';
import {Box, Text, Image} from '@chakra-ui/react'
import Link from "next/link"
 

const Navbar = () => {
    return (
        <Box height={"100px"} backgroundColor={"black"} display={"flex"} borderBottom={"1px solid black"} justifyContent={"space-between"} alignItems="center">
        <Box display={"flex"} gap="10px">
        <Link href={"/"}><Text color={"white"}>Gaurav Sharma</Text></Link>
        <Link href={"/project"}><Text color={"white"}>Projects</Text></Link>
        <Link href={""}><Text color={"white"}>Experience</Text></Link>    
        </Box>
        <Box>
            <  Image  src="https://avatars.githubusercontent.com/u/107983384?v=4" alt="avat" width={"20%"} borderRadius="50%"/>
            </Box>    
        </Box>
    );
};

export default Navbar;