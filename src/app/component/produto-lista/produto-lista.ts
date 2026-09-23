import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../service/lista.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  selector: 'app-produto-lista',
  styleUrl: './produto-lista.css',
  templateUrl: './produto-lista.html',
})
export class ProdutoLista implements OnInit {
  constructor(private listaService: ListaService) { }

  sugestoes: any[] = [];

  formItem = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  ngOnInit(): void {
    this.listaService.buscarSugestoes().subscribe({
      next: (data: any[]) => this.sugestoes = data,
      error: (error) => console.error('Deu ruim:', error),
    });
  }

  enviar(){
    if (this.formItem.valid) {
      this.listaService.adicionarItem(
        this.formItem.value.nome!,
        this.formItem.value.quantidade!
      );
      this.formItem.reset({ nome: '', quantidade: 1 });
    }

  }
}
