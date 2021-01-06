import React from 'react';
import styled from 'styled-components';

const StyledNotFoundText = styled.h1`
    font-size: 7.8rem;
    color: ${({ theme }) => theme.commonColor.primaryNormal};
    text-align: center;
`;
const StyledContainer = styled.div`
    height: calc(100vh - 8.4rem);
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function NotFound() {
    return (
        <StyledContainer>
            <StyledNotFoundText>Page Not Found</StyledNotFoundText>
        </StyledContainer>
    );
}
