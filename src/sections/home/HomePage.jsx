import React, { useState, useEffect } from "react";
import './HomePage.css';
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Card } from "@mui/material";
import SingleBlog from "./SingleBlog";
import PaginationControlled from "../pagination/PaginationControlled";
import BlogDetails from "../blogDetails/BlogDetails";
import Card from '../../components/card/Card';
import Loader from "../../components/loarder/Loader";


const HomePage = ({ search }) => {
    const [posts, setPosts] = useState("");
    const [page, setPage] = useState(1)

    const fetchPosts = async () => {
        let url="https://dummyjson.com/posts"
        if(search===""){
            url+=`?limit=10&skip=${(page - 1) * 10}`
        }
        const resp = await fetch(url);
        const response = await resp.json();
        if (search === "" || !search) {
            console.log(response)
            setPosts(response.posts);
            return;
        }
        const filteredResult = response?.posts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        setPosts(filteredResult)
    }
    useEffect(() => {
        fetchPosts();
    }, [page, search])

    

    return (
        posts?<Card>
        {console.log(posts,"bchjbc")}

        {posts.length==0?<p style={{textAlign:"center", fontSize:"20px"}}>Search result not found</p>:

        <p style={{ color: "#002B5B", fontWeight: "600", marginBottom: "30px" }}>Recommended by READit</p>}
        {
            posts.map((item) => <SingleBlog post={item} key={item.id} />)
        }


        {posts.length==0?"":<div style={{ bottom: 0, margin: "10px 9% 45px", position: 'relative' }}>

            <PaginationControlled page={page} setPage={setPage} />
        </div>
}
    </Card>:<Loader />
    
    )


};

export default HomePage;