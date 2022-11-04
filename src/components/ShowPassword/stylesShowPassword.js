import styled from "styled-components";

export const DivInputPassword = styled.div`
    position: relative;

    span {
        position: absolute;
        right: 16px;
        top: 11px;
        cursor: pointer;

        svg {
            width: 24px;
            height: 24px;
            fill: #fff;
        }

        &:hover {
            svg {
                fill: var(--primary);
            }
        }
    }
`;