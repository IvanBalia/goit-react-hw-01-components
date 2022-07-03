import styled from "styled-components";
import data from 'data.json';

export const StatisticsItem = styled.li`
display:flex;
flex-direction:column;
text-align:center;
border:1px solid ${({ theme }) => theme.colors.additional};
width:calc(100%/${data.length});
`