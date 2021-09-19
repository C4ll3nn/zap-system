import * as yup from "yup";

const Schema = yup.object().shape({
    trigger: yup
      .string()
      .required("Campo gatilho é obrigatório")
      .min(4, "Gatilho é muito curto"),
    channel: yup
      .string()
      .required("Campo é canal obrigatório")
      .min(3, "Canal é muito curto"),
    timer: yup
      .string()
      .required("Campo timer é obrigatório")
      .min(5, "Utilize o formato 00:00"),
    message: yup
      .string()
      .required("Campo mensagem é obrigatório")
      .min(5, "Mensagem é muito curta"),
  });

export default Schema;