import { Injectable } from '@angular/core';
import { Editora } from './editora'

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      new Editora(1, 'Editora A'),
      new Editora(2, 'Editora B'),
      new Editora(3, 'Editora C')
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}
