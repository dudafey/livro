import { model, Schema } from "mongoose";

const classeSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome é obrigatório!"],
    },
    isbn: {
      type: String,
      required: [true, "O campo isbn é obrigatório!"],
    },
    preco: {
      type: Number,
      required: [true, "O campo preco é obrigatório!"],
    },
    criadoEm: {
      type: Date 
    },
  },
  {
    timestamps: true,
  }
);

export default model("livro", classeSchema);
