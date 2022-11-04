import styledComponents, { StyledComponent } from 'styled-components';

/*Tipografia*/
export const Title1 = styledComponents.h1`
    font-family: var(--fontFamily);
    font-size: var(--title1Size);
    font-weight: var(--title1Weight);
`;

export const Title2 = styledComponents.h2`
    font-family: var(--fontFamily);
    font-size: var(--title2Size);
    font-weight: var(--title2Weight);
`;

export const Title3 = styledComponents.h3`
    font-family: var(--fontFamily);
    font-size: var(--title2Size);
    font-weight: var(--title2Weight);
`;

export const Headline = styledComponents.p`
    font-family: var(--fontFamily);
    font-size: var(--headlineSize);
    font-weight: var(--headlineWeightNormal);
    color: var(--grey1);
`;

/*Buttons*/
export const Btn = styledComponents.button`
    padding: 16px 22px;
    font-weight: 500;
    font-size: 16px;
    border: none;
    outline: none;
    box-shadow: none;
    font-family: var(--fontFamily);
    background: transparent;
    border-radius: 4px;
    transition: all 300ms ease-out;
    color: var(--generalColor);
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    * {
        color: var(--generalColor);
    }

    &.btn-small {
        font-weight: 600;
        font-size: 12px;
        padding: 12px 16px;
    }

    a {
        text-decoration: none;
    }
`;

export const BtnPrimary = styledComponents(Btn)`
    background-color: var(--primary);
    border: 1.2182px solid var(--primary);
    color: #fff;

    &:hover,
    &:focus {
        background-color: var(--primaryFocus);
    }
`;

export const BtnPrimaryDisabled = styledComponents(Btn)`
    background-color: var(--primaryNegative);
    border: 1.2182px solid var(--primaryNegative);
    color: #fff;
    cursor: not-allowed;
`;

export const BtnDisabled = styledComponents(Btn)`
    background-color: var(--grey1);
    border: 1.2182px solid var(--grey1);
    color: #fff;

    &:hover,
    &:focus {
        background-color: var(--grey2);
        border: 1.2182px solid var(--grey2);
    }
`;

export const BtnGrey3 = styledComponents(Btn)`
    background-color: var(--grey3);
    color: #fff;

    &:hover,
    &:focus {
        background-color: var(--grey2);
    }
`;

export const BtnGrey4 = styledComponents(Btn)`
    background-color: var(--grey4);
    color: #fff;

    &:hover,
    &:focus {
        background-color: var(--grey2);
    }
`;

export const BtnGroup = styledComponents.div`
    display: flex;
    gap: 8px;
`;

/* Formulário */
export const Formulario = styledComponents.form`
    background: var(--grey3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 32px 22px;
    text-align: center;
    margin: 32px auto;

    @media (min-width: 768px) {
        max-width: 444px;
    }
      
    @media (max-width: 767px) {
        margin: 32px 16px;
    }

    input,
    select,
    textarea {
        background: var(--grey2);
        border: 1.2182px solid var(--grey2);
        border-radius: 4px;
        font-family: var(--fontFamily);
        font-weight: 400;
        font-size: 16.2426px;
        padding: 10px 16px;
        transition: all 300ms ease-out;
        margin-bottom: 8px;
        width: -webkit-fill-available;
        color: var(--grey0);

        &::placeholder {
            color: var(--grey1);
            font-family: var(--fontFamily);
        }
    
        &:focus {
            background: var(--grey2);  
            border: 1.2182px solid var(--grey0);
            box-shadow: none;
            outline: none;
            color: var(--grey0);
    
            &::placeholder {
                color: var(--grey0);
            }
        }
    }
`;

export const Label = styledComponents.label`
    display: block;
    margin-bottom: 16px;
    font-size: var(--headlineSize);
    font-weight: var(--headlineWeightNormal);
    text-align: left;
    margin-top: 24px;
`;

export const HelperText = styledComponents.span`
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey1);
    text-align: left;
    margin: 0;
    padding: 0;
`;

/* Posicionando conteudo no centro */
export const Container = styledComponents.div`
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 768px) {
        max-width: 60%;
        margin: 0 auto;
    }
`;