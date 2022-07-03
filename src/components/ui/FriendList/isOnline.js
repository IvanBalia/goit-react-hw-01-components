import styled from "styled-components";

export const Online = styled.div`
width:20px;
height:20px;
border-radius:${({ theme }) => theme.radii.round};
background-color:green;
`

export const Offline = styled.div`
width:20px;
height:20px;
border-radius:${({ theme }) => theme.radii.round};
background-color:yellow;
`