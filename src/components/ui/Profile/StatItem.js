import styled from "styled-components";

export const StatItem = styled.li`
padding:${({ theme }) => theme.space[1]};
display:flex;
flex-direction:column;
text-align:center;
width:100px;
&:not(:last-child) {
border-right: 1px solid ${({theme})=>theme.colors.additional}
}

`