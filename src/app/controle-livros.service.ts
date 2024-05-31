import { Injectable } from '@angular/core';
import { Livro } from './livro'

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 1, 'Livro A', 'Resumo do Livro A', ['Autor A1', 'Autor A2']),
      new Livro(2, 2, 'Livro B', 'Resumo do Livro B', ['Autor B1']),
      new Livro(3, 3, 'Livro C', 'Resumo do Livro C', ['Autor C1', 'Autor C2', 'Autor C3'])
    ]
  }
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
