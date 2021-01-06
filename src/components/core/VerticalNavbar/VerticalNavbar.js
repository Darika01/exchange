//@flow
import useWindowDimensions from 'components/commonHooks/WindowDimensions';
import React, { useState } from 'react';
import { Menu } from 'styled-icons/boxicons-regular';
import { Close } from 'styled-icons/evaicons-solid';
import linksList from './linksList';
import { StyledNav, StyledIcon, LogoImg, StyledMenu, StyledList, StyledLink } from './styles';
import LogoText from 'assets/logo/logo_text_white_200x200.png';

type Props = {
    setIsMobileMenuOpen: (isOpen: boolean) => {}
};

export default function VerticalNavbar({ setIsMobileMenuOpen }: Props) {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const { width } = useWindowDimensions();

    const changeMenuOpen = () => {
        setIsMenuOpen(!IsMenuOpen);
        setIsMobileMenuOpen(!IsMenuOpen);
    };
    return (
        <>
            <StyledNav>
                <StyledIcon as={IsMenuOpen ? Close : Menu} onClick={changeMenuOpen} />
                <LogoImg src={LogoText} alt="logo" />
            </StyledNav>
            <StyledMenu open={IsMenuOpen}>
                <StyledList windowWidth={width}>
                    {linksList.map(el => {
                        return (
                            <StyledLink key={el.title} exact activeClassName="active" to={el.linkTo}>
                                {el.title}
                            </StyledLink>
                        );
                    })}
                </StyledList>
            </StyledMenu>
        </>
    );
}
