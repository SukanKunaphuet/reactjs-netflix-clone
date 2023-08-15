import { styled } from "styled-components";

export const FooterCon = styled.footer`
    padding: 20px 0px;
    margin: 0px 32px;
    color: rgba(255,255,255,0.7);
`

export const FooterList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 0px;

    ul {
        padding: 12px 0px;
        list-style: none;

        li {
            margin: 1rem 0;

            a {
                font-size: 0.875rem;
                color: rgba(255,255,255,0.7);
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`