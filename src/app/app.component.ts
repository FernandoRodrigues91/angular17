import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,NewComponentComponent, TemplateBindingComponent],
  template: `
    <!--<router-outlet></router-outlet>-->
    <!--app-new-component/>-->
    <h1>Curso de Angular 17</h1>
    <app-template-binding/>



  `
})
export class AppComponent {
  title = 'angular17';
}
