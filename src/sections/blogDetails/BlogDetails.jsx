import React, { useEffect, useState } from "react";
import './BlogDetails.css';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/Card'
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loarder/Loader";
import { SiGmail } from "react-icons/si";


const BlogDetails = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [suggestedPosts, setSuggestedPosts]=useState("");

    const { postId } = useParams();
    const getUser = async (userId) =>{
        const resp = await fetch(`https://dummyjson.com/users/${userId}`);
        const response = await resp.json();
        setUser(response)
        console.log(response);
    }
    const getPost = async () =>{
        const resp = await fetch(`https://dummyjson.com/posts/${postId}`);
        const response = await resp.json();
        console.log(response)
        setPost(response)
        await getUser(response.userId)
        await getUserPosts(response.userId)
    }

    const getUserPosts=async(userId)=>{
        const resp =await fetch(`https://dummyjson.com/users/${userId}/posts`)
        const response=await resp.json();
        setSuggestedPosts(response.posts)

    }

    useEffect( ()=>{
        getPost();
    }, [postId])

    return (
        user&&post&&suggestedPosts?<Card>
        <div className="blog-page">
    
        {/* here I had to display two different components. one containing info like topic-name, full-story,etc and other containing some other contents by the same user that's I had to use extra-div to wrap it. */}
                <div className="content">
                    <div className="tags">{
                    post?.tags.map( (tag, index) => {return <span key={index}>&nbsp;&#x2022;{tag}</span>})
                    }   </div>
                    <p className="topic">{post?.title}</p>
                    <div className="profile-section">
                        <Avatar><img  src={user?.image} style={{ width: 50, height: 50, borderRadius: 50}}/></Avatar>
                        <p><em>{user?.firstName + " " + user?.lastName  } @{user.username}</em></p>
                    </div>
                    <p className="full-story">{post?.body}</p>
    
                </div>
    
                <div className="related-content">
                    <div style={{paddingBottom:"30px",borderBottom: "solid rgba(190, 189, 189, 0.349)", borderWidth:"1px"}}>
                        <p style={{color:"#243763"}}>Some other contents by:</p>
                        <p style={{fontSize:"1.3rem", marginTop:"15px", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}><strong>{user?.firstName + " " + user?.lastName  }</strong></p>
                        <p style={{marginBottom:"10px"}}>@{user.username}</p>
                        <p style={{display:"inline", fontSize:"13px"}}>email: {user.email}</p>
                    </div>
                    {suggestedPosts.map(item=> <p className="other-posts" onClick={()=>navigate(`/post/${item.id}`)} key={item.id} style={{margin:"20px 0px"}}>{item?.title}</p>)}
                    {suggestedPosts.map(item=> <p className="other-posts" onClick={()=>navigate(`/post/${item.id}`)} key={item.id} style={{margin:"20px 0px"}}>{item?.title}</p>)}
                    
                </div>
        </div>
        </Card>:<Loader />
    )
}

export default BlogDetails;