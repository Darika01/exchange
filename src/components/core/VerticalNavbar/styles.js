import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import setIconSize from 'utils/themeConfig/setIconSize';

export const StyledNav = styled.div`
    background-color: ${({ theme }) => theme.commonColor.primaryNormal};
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8.4rem;
`;

export const StyledIcon = styled.svg`
    color: ${({ theme }) => theme.commonColor.white};
    ${setIconSize(6)};
    padding: 0.4rem 1.4rem;
    cursor: pointer;
`;

export const LogoImg = styled.img`
    width: 16.4rem;
    height: 4rem;
`;

export const StyledMenu = styled.div`
    width: 25.4rem;
    position: fixed;
    top: 8.4rem;
    border-top: 0.08rem solid ${({ theme }) => theme.commonColor.greyLight};
    transition: 0.2s;
    transform: translateX(-25.4rem);
    ${({ open }) =>
        open &&
        css`
            transform: translateZ(0px);
        `}
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        left: 0;
        height: 100%;
        z-index: 1000;
        overflow: hidden;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        ${({ open }) =>
            open &&
            css`
                transform: translateZ(0px);
            `}
    }
    z-index: 100;
    height: 100vh;
    background-color: ${({ theme }) => theme.commonColor.primaryLight};
`;
export const StyledList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        min-width: ${props => props.windowWidth}px;
    }
`;
export const StyledLink = styled(NavLink)`
    padding: 3rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.commonColor.greyLight};

    transition: box-shadow 0.2s;
    &.active {
        color: ${({ theme }) => theme.commonColor.secondaryNormal};
        pointer-events: none;
        font-weight: 500;
    }
    &:hover:not(.active) {
        color: ${({ theme }) => theme.commonColor.white};
    }
`;
