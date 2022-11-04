import * as yup from "yup";
import YupPassword from 'yup-password';

YupPassword(yup)
const validarRegistro = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(3, "O nome deve ter mais de 3 letras"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
    .min(8,'A senha deve conter 8 caracteres e pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caracter especial.')
    .minLowercase(1, 'A senha deve conter pelo menos 1 letra minúscula')
    .minUppercase(1, 'A senha deve conter pelo menos 1 letra maiúscula')
    .minNumbers(1, 'A senha deve conter pelo menos um número')
    .minSymbols(1, 'A senha deve conter pelo menos um caracter especial'),
    confirmPass: yup.string().oneOf([yup.ref('password'), null],'As senhas precisam combinar').required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório").min(8, "O contato deve ter pelo menos 8 números"),
});

export default validarRegistro;