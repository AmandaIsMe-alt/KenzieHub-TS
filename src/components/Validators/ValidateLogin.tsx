import * as yup from "yup";
import YupPassword from 'yup-password';

YupPassword(yup)
const validarLogin = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido."),
    password: yup
      .string()
      .required("Senha obrigatória"),
  });

export default validarLogin;