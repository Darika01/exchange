import styled from 'styled-components';
import breakpoints from 'utils/themeConfig/breakpoints';

const setTypographyStyle = (theme, typography) => {
    return `
        font-weight: ${theme.typography[typography].fontWeight};
        font-size: ${theme.typography[typography].fontSize};
        line-height: ${theme.typography[typography].lineHeight};
        letter-spacing: ${theme.typography[typography].letterSpacing};
    `;
};

export const FullHeightHeaderImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    @media (max-width: ${breakpoints.sm}px) {
        height: 100%;
    }
    opacity: 0.6;
`;
export const TitleH1 = styled.h1`
    ${props => setTypographyStyle(props.theme, 'h1')}
    color: ${props => props.theme.text.primaryColor};
    text-transform: uppercase;
    text-shadow: 0px 0px 1px #fff, 0px 0px 1px #ccc;
    text-align: center;
`;
export const TitleH2 = styled.h2`
    ${props => setTypographyStyle(props.theme, 'h2')}
    color: ${props => props.theme.text.primaryColor};
    text-transform: uppercase;
    text-shadow: 0px 0px 1px #fff, 0px 0px 1px #ccc;
    text-align: center;
`;
export const TextH3 = styled.h3`
    ${props => setTypographyStyle(props.theme, 'h2')}
    color: ${props => props.theme.text.primaryColor};
    text-transform: uppercase;
    text-align: center;
`;
export const TextBody1 = styled.p`
    ${props => setTypographyStyle(props.theme, 'body1')}
    color: ${props => props.theme.text.primaryColor};
    text-align: center;
`;
export const TextBody2 = styled.p`
    ${props => setTypographyStyle(props.theme, 'body2')}
    color: ${props => props.theme.text.primaryColor};
    text-align: center;
`;
export const Layout = styled.div`
    margin: 0 auto 10.6rem;
    max-width: 120rem;
    @media (max-width: ${props => props.theme.breakpoints.xl}) {
        max-width: 95%;
    }
    &:first-child {
        margin-top: 8.4rem;
    }
`;
