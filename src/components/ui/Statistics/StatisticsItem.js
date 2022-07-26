import styled from "styled-components";


export const StatisticsItem = styled.li`
padding:20px auto;
display:flex;
flex-direction:column;
text-align:center;
border:1px solid ${({ theme }) => theme.colors.additional};
`