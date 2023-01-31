import { StatusCooperado } from "../enums";
import { CooperadoContaBancaria } from "./cooperado-conta-bancaria";

export class Cooperado {
  id!: number;
  nome!: string;
  documento!: string;
  status!: StatusCooperado;
  contaAplicacao!: CooperadoContaBancaria;
  contaCorrente!: CooperadoContaBancaria;
}
