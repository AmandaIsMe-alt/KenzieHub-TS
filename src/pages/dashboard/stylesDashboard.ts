import styled from "styled-components";

export const HeaderDashboard = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const MainDashboard = styled.main`

  section {
    border-top: 1px solid var(--grey3);
    padding-top: 40px;
    padding-bottom: 40px;
  }

`;

export const Tecnologias = styled.main`
  background: var(--grey3);
  border-radius: 4px;
  padding: 24px 32px;
  margin-top: 40px;

  li {
    list-style-type: none;
    background: var(--grey4);
    border-radius: 4px;
    padding: 12px 22px;

    margin-top: 24px;

    &:first-child {
      margin-top: 0px;
    }

    figure {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 767px) {
        h3 {
          width: 50%;
        }
      }

      figcaption {
        display: flex;
        align-items: center;
        gap: 24px;

        @media (max-width: 767px) {
            width: 50%;
            gap: 8px;
            justify-content: end;
            flex-wrap: wrap;
        }
      }
    }
  }
`;