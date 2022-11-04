import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  Api from "../Api";

interface iUserContextProps {
  children: React.ReactNode;
}

/*OBJETO DO LOGIN PARA EVITAR USAR ANY*/
interface iLogin {
  email: string;
  password: string;
}

/*OBJETO DO PERFIL PARA EVITAR USAR ANY*/
interface iProfile {
  id: string;
  name: string;
  contact: string;
  email: string;
  course_module: string;
  token: string;
  bio: string;
  title: string;
  description: string;
  deploy_url: string;
  works?: React.SetStateAction<iProfile[]>;
}

/*OBJETO DO RESGITRO PARA EVITAR USAR ANY*/
interface iRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

/*OBJETO PARA TECHS PARA EVITAR USAR ANY*/
interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iUserContext{
  handleForm: (data: iLogin) => Promise<void>;
  onSubmit: (data: iRegister) => Promise<void>;

  newUser: null | iLogin[];

  getProfile: iProfile[];
  setGetProfile: React.Dispatch<React.SetStateAction<iProfile[]>>

  getTechs: iTechs[];
  setGetTechs: React.Dispatch<React.SetStateAction<iTechs[]>>
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [newUser, setNewUser] = useState(null);
  const [getProfile, setGetProfile] = useState<iProfile[]>([]);
  const [getTechs, setGetTechs] = useState<iTechs[]>([]);

  const navigate = useNavigate();

  const handleForm = async (data: iLogin) => {
    try {
      const response = await Api.post("/sessions", data);
      window.localStorage.clear();

      localStorage.setItem("KenzieHub:token",response.data.token);
      localStorage.setItem("KenzieHub:ID",response.data.user.id);

      toast.success("Login realizado!", {
        icon: "🎉",
      });

      navigate("/dashboard", { replace: true });

      const user = response.data;

      console.log(user)
      setNewUser(user);
      setGetProfile([user.user]);
      setGetTechs(user.user.techs);

    } catch (error) {
      toast.error(
        "Ops, algo deu errado, confira seus dados e tente novamente!",
        {
          icon: "🚫",
        }
      );
      console.log(error);
    }
  };

  const onSubmit = async (data: iRegister) => {
    try {
      await Api.post("/users", data);
      toast.success("Conta criada com sucesso!", {
        icon: "🎉"
      });
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(
        "Ops, algo deu errado, confira seus dados e tente novamente!",
        {
          icon: "🚫",
        }
      );
      console.log(error);
    }
  };

  useEffect(() => {
    async function profile() {
      const token = localStorage.getItem("KenzieHub:token");

      if (token) {
        try {
          const res = await Api.get("/profile");

          setGetProfile([res.data]);
          setGetTechs(res.data.techs);

        } catch (error) {
          console.log(error);
        }
      }
    }
    profile();
  }, []);

  return (
    <UserContext.Provider
      value={{
        handleForm,
        newUser,
        onSubmit,
        getProfile,
        setGetProfile,
        getTechs,
        setGetTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/* useEffect (() => {
  function profile () = {
         Api.get("/profile")
         .then((res) => {
                 console.log(res)
                 setGetProfile([res.data]);
                 setGetTechs(res.data.techs);
         })
          .catch ((error) { =>
                   console.log(error)
         });
    }
    profile();
  }, []);
          */

