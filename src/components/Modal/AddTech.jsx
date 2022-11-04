import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import ValidarAddTech from "../../components/Validators/ValidateAddTech";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { TechContext } from "../../context/TechContext";
import { Label, HelperText, Title3, BtnPrimary } from "../../styles";
import { FormModal } from "./stylesModal";

export const AddTech = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidarAddTech),
  });

  const { handleFormTech, isOpenAdd, onCloseAdd } =
    useContext(TechContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <ModalContent w={370} top="100" bg='#212529'>
          <ModalHeader
            bg="#343B41"
            borderTopRadius="5"
          >
            <Title3>Cadastrar Tecnologia</Title3>
          </ModalHeader>
          <ModalCloseButton color="#F8F9FA" />

          <FormModal onSubmit={handleSubmit(handleFormTech)}>
            <ModalBody pb={6} bg="#212529">
                <Label>Nome</Label>
                <input
                  ref={initialRef}
                  placeholder="Digite uma tecnologia"
                  {...register("title")}
                />
                <HelperText>{errors.title?.message}</HelperText>

                <Label>Selecionar status</Label>
                <select
                  placeholder="Selecione seu nível"
                  {...register("status")}
                >
                  <option>Básico</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
            </ModalBody>

            <ModalFooter
              bg="#212529"
              borderBottomRadius="5"
            >
              <BtnPrimary
                type="submit"
                className="w-100"
              >
                Cadastrar Tecnologia
              </BtnPrimary>
            </ModalFooter>
          </FormModal>
        </ModalContent>
      </Modal>
    </>
  );
};
