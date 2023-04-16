import React from "react";
import {Box} from "@mui/material";
import {Link, Outlet, useParams} from "react-router-dom";
import styled from "styled-components";

const MyLink = styled.button`
        font-size: 1.5rem;
        text-align: center;
        background-color: #3aea62;
       &:hover{
            transition: .3s ease-in-out;
            background-color: #c3e6cb;
       }
       border-color: transparent;
        
       cursor: pointer;
       margin-top: 20px; 
    `;

const MyBox = styled.div`
        margin-bottom: 20px;
    `;

export const Header = () => {
    const {category} = useParams();

    return (
        <>
            <MyBox>
                <Box sx={{display: "flex", alignItems: "center", textAlign: "center"}}>
                    <Link to="/" sx={{minWidth: 100}}><MyLink>Home</MyLink></Link>
                    {
                        category && <MyLink disabled>{category}</MyLink>
                    }
                </Box>
            </MyBox>
            <Outlet/>
        </>
    );
};