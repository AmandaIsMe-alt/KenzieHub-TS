import { useContext } from "react";
import { Link } from "react-router-dom";

//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validarRegistro from "../../components/Validators/ValidateRegister";

//logo
import logo from "../../assets/img/Logo.svg";

//feedback usuário
import "react-toastify/dist/ReactToastify.css";

// context
import { UserContext } from "../../context/UserContext";

//styles
import { Container, Formulario, Label, HelperText, Title1, Headline, BtnPrimary, BtnGrey3 } from "../../styles";
import { HeaderCadastro } from "./stylesRegister";


type FormFields = {
  name: string;
  email: string;
  contact: string;
  bio: string;
  password: string;
  course_module: string;
  confirmPass: string;
};

export const FormRegister = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(validarRegistro),
  });


  const { onSubmit } = useContext(UserContext);

  return (
    <Container>
      <HeaderCadastro className="mt-72">
        <img src={logo} alt="" />
          <BtnGrey3 className="btn-small">
            <Link to="/">Voltar</Link>
          </BtnGrey3>
      </HeaderCadastro>

      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <Title1>Crie sua conta</Title1>
        <Headline className="mt-24">Rápido e grátis, bora lá!</Headline>

        <Label>Nome</Label>
        <input
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <HelperText>{errors.name?.message}</HelperText>


        <Label>E-mail</Label>
        <input
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <HelperText>{errors.email?.message}</HelperText>


        <Label>Senha</Label>
        <input
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
        <HelperText>{errors.password?.message}</HelperText>

        <Label>Confirmar senha</Label>
        <input
          placeholder="Confirme a senha"
          type="password"
          {...register("confirmPass")}
        />
        <HelperText>{errors.confirmPass?.message}</HelperText>

        <Label>Bio</Label>
        <input
          placeholder="Conte sobre você"
          {...register("bio")}
        />
        <HelperText>{errors.bio?.message}</HelperText>

        <Label>Contato</Label>
        <input
          placeholder="Contato"
          {...register("contact")}
        />
        <HelperText>{errors.contact?.message}</HelperText>

        <Label>Selecionar módulo</Label>
        <select
          id=""
          {...register("course_module")}
        >
          <option>Selecione um módulo</option>
          <option>Primeiro módulo(Introdução ao HTML, JS e CSS)</option>
          <option>Segundo módulo(JS Vanilla e CSS)</option>
          <option>Terceiro módulo(ReactJS, TypeScript e NextJS)</option>
          <option>Quarto módulo(Introdução ao Backend)</option>
          <option>Quinto módulo(Avançando com Python)</option>
          <option>Sexto módulo(Linguagens de Programação)</option>
        </select>
        <HelperText>{errors.course_module?.message}</HelperText>

        <BtnPrimary type="submit" className="w-100 mt-24">Cadastrar</BtnPrimary>
      </Formulario>
    </Container>
  );
};
