import styled from 'styled-components'

import HeaderBG from '../../assets/header-bg.jpg'

export const HeaderCon = styled.section`
    height: 720px;
    background: url(${HeaderBG});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    border-bottom: 8px solid #222;
    background-position: center;
    background-size: cover;
`

export const NavCon = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0px 32px;
    padding: 2rem 4rem;

    svg {
        width: 5.5625rem;
        height: 1.5rem;
        fill: red;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin: 0 2rem;

        a {
            color: white;
            text-decoration: none;
        }
    }
`