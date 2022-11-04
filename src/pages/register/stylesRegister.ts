import styled from "styled-components";

export const HeaderCadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin: 32px auto;

    @media (min-width: 768px) {
        max-width: 444px;
    }

    @media (max-width: 767px) {
        margin: 32px 16px;
    }
`;