import * as yup from "yup";

const ValidarAddTech = yup.object().shape({
    title: yup
      .string()
      .required("Nome da tecnologia obrigatório"),
});

export default ValidarAddTech;