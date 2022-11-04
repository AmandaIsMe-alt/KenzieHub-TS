import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";

import  Api from "../Api";
import { UserContext } from "./UserContext";

interface iTechContextProps{
  children: React.ReactNode;
}

interface iNewTech {
  title: string;
  status: string;
}

interface iPatchTech {
  status: string;
}

interface iTechContext{
  handleFormTech: (data: iNewTech) => Promise<void>;
  handleDeleteTeach: (id: string) => Promise<void>;
  handlePathTech: (data: iPatchTech) => void;

  getId: string;
  setGetId: React.Dispatch<React.SetStateAction<string>>;

  isOpenAdd: boolean;
  onOpenAdd: () => void;
  onCloseAdd: () => void;
  isOpenTech: boolean;
  onOpenTech: () => void;
  onCloseTech: () => void;
}

export const TechContext = createContext({} as iTechContext);

export const TechProvider = ({ children }: iTechContextProps) => {
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();

  const {
    isOpen: isOpenTech,
    onOpen: onOpenTech,
    onClose: onCloseTech,
  } = useDisclosure();

  const [getId, setGetId] = useState("");
  const { getTechs, setGetTechs } = useContext(UserContext);

  const handleFormTech = async (data: iNewTech) => {
    try {
      const response = await Api.post("/users/techs", data);
      toast.success("Tecnologia inserida!", {
        icon: "🦄",
      });

      setGetTechs([...getTechs, response.data]);

    } catch (error) {
      console.log(error);

      toast.error(
        "Ops, não conseguimos cadastrar, verifique os campos e tente novamente!",
        {
          icon: "🆘",
        }
      );
    }
  };

  const handleDeleteTeach = async (id: string) => {
    try {
      await Api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia removida!", {
        icon: "🚀",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (error) {
      toast.error(
        "Ops, não conseguimos deletar!",
        {
          icon: "🆘",
        }
      );
      console.log(error);
    }
  };

  const handlePathTech = async (data: iPatchTech) => {
    try {
      await Api.put(`/users/techs/${getId}`, data);
      toast.success("Nível editado!", {
        icon: "🚀",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (error) {
      toast.error(
        "Ops, não conseguimos editar!",
        {
          icon: "😳",
        }
      );
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        handleFormTech,
        isOpenAdd,
        onOpenAdd,
        onCloseAdd,
        handleDeleteTeach,
        isOpenTech,
        onOpenTech,
        onCloseTech,
        setGetId,
        getId,
        handlePathTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
