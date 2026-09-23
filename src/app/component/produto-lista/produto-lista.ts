import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-lista',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.css'
})
export class ProdutoLista implements OnInit {
  constructor(public listaService: ProdutoService) { }

  sugestoes: any[] = [];

  formItem = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  ngOnInit(): void {
    this.listaService.buscarSugestoes().subscribe({
      next: (data) => this.sugestoes = data,
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