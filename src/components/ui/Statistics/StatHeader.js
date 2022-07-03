import styled from "styled-components";

export const StatHeader = styled.h2`
color:${({ theme }) => theme.colors.additional};
background-color:${({ theme }) => theme.colors.white};
font-size:${({ theme }) => theme.fontSizes[4]}px;
text-align:center;
`