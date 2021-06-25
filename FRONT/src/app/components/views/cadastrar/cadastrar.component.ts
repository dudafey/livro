import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LivroService } from "src/app/services/livros.service";
import { Livro } from "src/app/models/Livro";



@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  colunasCredito = ["nome", "valor"];
  colunasDebito = ["nome","valor","status"];

  data!: string;
  isbn!: string;
  preco!: number;
  nome!: string;

  nomeCredito!: string;
  valorCredito!: string;
  //creditos = new MatTableDataSource<Credito>();

  nomeDebito!: string;
  valorDebito!: string;
  statusDebito!: string;
  //debitos = new MatTableDataSource<Debito>();

  constructor(private service: LivroService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void { 
    // Caso de edição de registro
    // Verificar se existe um id na url
    // Buscar o registro no backend
    // Atribuir para a variável global os valores do objeto que retornou do backend
   }

  cadastrar(): void {
    let livro = new Livro();
    livro.criadoEm = new Date(this.data);
    livro.isbn = this.isbn;
    livro.nome = this.nome;
    livro.preco = this.preco;
    console.log("livro =>", livro);
    this.service.cadastrar(livro).subscribe(livro => {
      console.log(livro);
      this.snack.open("Livro cadastrado", "Livro", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      }) ;
      this.router.navigate([""]);
    });
  }

   
  
}