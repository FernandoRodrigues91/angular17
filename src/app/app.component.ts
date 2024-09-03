import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,NewComponentComponent],
  template: `
    <!--<router-outlet></router-outlet>-->
    <h1>Curso de Angular 17</h1>
    <div class="theme-red">
      <app-new-component />

    </div>


  `
})
export class AppComponent {
  title = 'angular17';
}
