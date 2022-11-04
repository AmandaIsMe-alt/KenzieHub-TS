import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Api from "../../Api";
import logo from "../../assets/img/Logo.svg";
import { toast } from "react-toastify";
import { Formulario, Label, HelperText, Title1, Headline, BtnPrimary, BtnDisabled } from "../../styles";

function FormLogin({ setAutenticathed, setUser, setModule, setFile }) {
  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Campo obrigatório"),
  });

  const logar = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        const nome = res.data.user.name;
        const modulo = res.data.user.course_module;
        const tech = res.data.user.techs;
        const id = res.data.user.id;
        setFile(tech);
        setUser(nome);
        setModule(modulo);
        setAutenticathed(true);
        const token = JSON.stringify(res.data.token);
        localStorage.setItem("@kenziehub:token", token);
        sessionStorage.setItem("@id:user", id);
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

  const formLogin = (data) => {
    logar(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <main className="text-center">
      <img className="mt-72" src={logo} alt="" />
      <Formulario onSubmit={handleSubmit(formLogin)}>
        <Title1>Login</Title1>

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

        <BtnPrimary type="submit" className="mt-24 w-100 d-block">
          Entrar
        </BtnPrimary>

        <Headline className="bold mt-32 mb-24">Ainda não possui uma conta?</Headline>
        <BtnDisabled className="d-block w-100">
          <Link to="register">Cadastre-se</Link>
        </BtnDisabled>
      </Formulario>
    </main>
  );
}
export default FormLogin;
