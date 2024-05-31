import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes'; 
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), 
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: []
})
export class AppModule {}
