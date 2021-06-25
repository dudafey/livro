import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Livro } from "src/app/models/Livro";
import { LivroService } from "src/app/services/livros.service";


@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  livros!: MatTableDataSource<Livro>;
  displayedColumns: string[] = ['id', 'data','nome','isbn', 'criadoEm', 'preco'];

  constructor(private service: LivroService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((livro) => {
      this.livros = new MatTableDataSource<Livro>(livro);
    });
  }
}