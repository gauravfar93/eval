import React, {useEffect, useState} from "react";
import {Box, Text} from "@chakra-ui/react";
import Link from "next/link"

const username="gauravfar93"

const ProjectsData = () =>{
    const [data,setData] = useState([]);

    const getMydata = async() => {
        let res = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`);
        let data = await res.json();
        setData(data.items)
    }
    console.log(data)

    useEffect(()=>{
        getMydata()
    }, [])
    return (
<>
    <Text textAlign={"center"}>Projects</Text>
    <Box >
      {data.map((ele)=>(
        <Link key={ele.id} href={ele.html_url}><Box >
            <Text>{ele.name}</Text>
            <Text>{ele.description}</Text>
            <Text>{ele.forks_count}</Text>
            <Text>{ele.language}</Text>
        </Box></Link>
      ))}
    </Box>
    </>
    )
}
export default ProjectsData;