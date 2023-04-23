import React, { useEffect, useState} from "react";
import './HomePage.css';
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Margin } from "@mui/icons-material";
// import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SingleBlog = ({post}) => {
    const navigate=useNavigate();
    const [user, setUser] = useState(null);
    
    useEffect( ()=> {
        const getUser = async () =>{
            const resp = await fetch(`https://dummyjson.com/user/${post.userId}`);
            const response = await resp.json();
            setUser(response)
        }
        getUser()
    }, [])

    

    return <>
            <div style={{cursor:"pointer"}} onClick={()=>navigate(`/post/${post.id}`)} >
            <div className="profile-section">
                <Avatar><img  src={user?.image} style={{ width: 50, height: 50, borderRadius: 50}}/></Avatar>
                <p>{user?.firstName + " " + user?.lastName  }</p>
            </div>

            <div className="tags">{
                post.tags.map( (tag, index) => {return <span key={index}>&nbsp;&#x2022;{tag}</span>})
            }</div>

            <div className="topic-sec">
                <p className="topic">{post.title}</p>
                <p className="discription">{post.body.substr(0, 100) + " ...click to read"}</p>
            </div>

            <span style={{display:"flex", alignItems:"center", marginBottom:"30px"}}>
            <FavoriteBorderIcon color="grey"/> <p style={{marginLeft:"2px"}}>{post.reactions} likes</p>
            </span>
            </div>
            <h1 style={{textAlign:'center',color:'#FA9884'}}>. . . .</h1>
    </>
};

export default SingleBlog;

{/* <p className="movie-genres">
                    {detail.show.genres.map((item,index)=>{
                        return <span key={index}>&#x2022;{item}&nbsp;</span>
                    })}
                </p> */}