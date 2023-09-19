import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent  {
  @Input() pageNumber: number = 0; // Propriedade de entrada para o número da página
  @Output() pageChanged = new EventEmitter<number>(); // Evento que emite o número da página quando o botão é clicado
  @Input() label:string ='';

  constructor() { }

  onPageButtonClick() {
    // Emita o evento com o número da página quando o botão é clicado
    this.pageChanged.emit(this.pageNumber);
  }
}
