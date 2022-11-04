import "./style.css";
import logo from "../../assets/img/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YupPassword from 'yup-password';
import { Formulario, Label, HelperText, Title1, Headline, BtnPrimary, BtnGrey3 } from "../../styles";

function FormRegister() {

  YupPassword(yup)
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(3, "O nome deve ter mais de 3 letras"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
    .min(8,'A senha deve conter 8 caracteres e pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caracter especial.')
    .minLowercase(1, 'A senha deve conter pelo menos 1 letra minúscula')
    .minUppercase(1, 'A senha deve conter pelo menos 1 letra maiúscula')
    .minNumbers(1, 'A senha deve conter pelo menos um número')
    .minSymbols(1, 'A senha deve conter pelo menos um caracter especial'),
    confirmarPassword: yup.string().oneOf([yup.ref('password'), null],'As senhas precisam combinar').required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório").min(8, "O dado de contato deve ter pelo menos 8 números")
  });
 
  const navigate = useNavigate();

  const success = () => {

    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: "🚀",
      theme: "dark",
    });

    return setTimeout(function(){ window.location.href="/" }, 1500);
  };

  const otherRegister = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const register = { email, password, name, bio, contact, course_module };

    Api.post("/users", register)
      .then((res) => {
        success();
        navigate.push("/");
      })
      .catch((res) => {
        if(res.name === 'AxiosError') {
          toast.error("Ops, algo deu errado!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  return (
    <main className="text-center">
      <div id="headerCadastro" className="mt-72">
        <img src={logo} alt="" />
          <BtnGrey3 className="btn-small">
            <Link to="/">Voltar</Link>
          </BtnGrey3>
      </div>

      <Formulario  onSubmit={handleSubmit(otherRegister)}>
        <Title1>Crie sua conta</Title1>
        <Headline className="mt-24">Rápido e grátis, bora lá</Headline>

        <Label>Nome</Label>
        <input
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <HelperText>{errors.name?.message}</HelperText>

        <Label>E-mail</Label>
        <input
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <HelperText>{errors.email?.message}</HelperText>

        <Label>Senha</Label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <HelperText>{errors.password?.message}</HelperText>

        <Label>Confirmar sua senha</Label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirmarPassword")}
        />
        <HelperText>{errors.confirmarPassword?.message}</HelperText>

        <Label>Bio</Label>
        <input
          placeholder="Fale sobre você"
          {...register("bio")}
        />

        <Label>Contato</Label>
        <input
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <HelperText>{errors.contact?.message}</HelperText>

        <Label>Selecionar Módulo</Label>
        <select {...register("course_module")}>
          <option>Primeiro Módulo (Introdução ao Frontend) </option>
          <option>Segundo Módulo (Aprimorando JS Vanilla)</option>
          <option>Terceiro Módulo (React, CSS e TypeScript)</option>
          <option>Quarto Módulo (Introdução ao Backend)</option>
          <option>Quinto Módulo (Linguagens de Programação)</option>
        </select>

       <BtnPrimary type="submit" className="d-block w-100">Cadastrar</BtnPrimary> 
      </Formulario>
    </main>
  );
}
export default FormRegister;
