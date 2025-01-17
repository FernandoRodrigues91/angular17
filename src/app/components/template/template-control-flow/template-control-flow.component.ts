import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgFor ],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

  public isTrue = true; 

  public itens = [{name: 'Fernando Rodrigues'}];

  public loadingData$: Observable<string[]> = of([
    'item 1 ',
    'item 2 ',
    'item 3 ',
  ]).pipe(delay(3000));

  public trackByFn(index: number){
    return index;
  }

  public addNewName(value: string){
    return this.itens.push({ name: value});
  }
  
}
