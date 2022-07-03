import styled from "styled-components";

export const Box = styled.div`
width:300px;
padding-top:20px;
margin-right:auto;
margin-left:auto;
margin-top:80px;
border-radius:${({ theme }) => theme.radii.normal};
background-color:${({theme})=>theme.colors.lightBackground}

`