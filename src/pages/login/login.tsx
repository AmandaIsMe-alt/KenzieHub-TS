import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import validarlogin from "../../components/Validators/ValidateLogin";

import logo from "../../assets/img/Logo.svg";
import { Container, Formulario, Label, HelperText, Title1, Headline, BtnPrimary, BtnDisabled } from "../../styles";
import { DivInputPassword } from "./stylesLogin";

import { UserContext } from "../../context/UserContext";
import { Link, Navigate } from "react-router-dom";

type FormFields = {
  email: string;
  password: string;
};

export const Login = () => {

  const token = localStorage.getItem("KenzieHub:token");
  const { handleForm } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const clickToShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(validarlogin),
  });

  return (
    <>
      {!token ? (
      <Container className="text-center mt-64">
        <img src={logo} alt="" style={{margin: "0 auto"}}/>

        <Formulario onSubmit={handleSubmit(handleForm)}>

            <Title1>Login</Title1>

            <Label>E-mail</Label>
            <input
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <HelperText>{errors.email?.message}</HelperText>


            <Label>Senha</Label>
            <DivInputPassword>
                <input
                    placeholder="Digite sua senha"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                />

                <span onClick={clickToShowPassword}>
                    {showPassword ? (
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                        </svg>
                    ) : (
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                        </svg>
                    )}
                </span>
            </DivInputPassword>
            <HelperText>{errors.password?.message}</HelperText>

            <BtnPrimary type="submit" className="w-100 mt-24">Entrar</BtnPrimary>


          <Headline className="bold mt-24 mb-16">Ainda não possui uma conta?</Headline>
          <BtnDisabled type="button" className="w-100">
            <Link to={"/register"}>
              Cadastre-se
            </Link>
          </BtnDisabled>
        </Formulario>
      </Container>
      ) : (
        <Navigate to="/dashboard" replace />
      )}
    </>
  );
};
