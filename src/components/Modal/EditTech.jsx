import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { TechContext } from "../../context/TechContext";
import { Label, Title3, BtnPrimary, BtnDisabled } from "../../styles";
import { FormModal } from "./stylesModal";

export const EditTech = () => {
  const { register, handleSubmit } = useForm();

  const {
    handlePathTech,
    isOpenTech,
    onCloseTech,
    handleDeleteTeach,
    getId,
  } = useContext(TechContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenTech}
        onClose={onCloseTech}
      >
        <ModalOverlay 
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <ModalContent w={370} top="100" bg='#212529'>
          <ModalHeader
            bg="#343B41"
            color="#F8F9FA"
            fontSize={15}
            borderTopRadius="5"
          >
            <Title3>Editar Tecnologia</Title3>
          </ModalHeader>
          <ModalCloseButton color="#F8F9FA" />
          <FormModal onSubmit={handleSubmit(handlePathTech)}>
            <ModalBody pb={6} bg="#212529">
                <Label>
                  Selecionar status
                </Label>
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
              display="flex"
              justifyContent="center"
              gap="10px"
              bg="#212529"
              borderBottomRadius="5"
            >
              <BtnPrimary
                type="submit"
                onClick={() => handleSubmit(getId)}
                className="w-100"
              >
                Editar
              </BtnPrimary>

              <BtnDisabled
                onClick={() => handleDeleteTeach(getId)}
              >
                Deletar
              </BtnDisabled>
            </ModalFooter>
          </FormModal>
        </ModalContent>
      </Modal>
    </>
  );
};
