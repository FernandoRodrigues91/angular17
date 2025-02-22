import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    NewComponentComponent, 
    TemplateBindingComponent, 
    TemplateVariablesComponent, 
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent
  ],
  template: `
    <!--<router-outlet></router-outlet>-->
    <!--app-new-component/>-->
    <!-- <app-template-binding/> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <h1>Curso de Angular 17</h1>
    <app-template-deferrable-views/>





  `
})
export class AppComponent {
  title = 'angular17';
}
