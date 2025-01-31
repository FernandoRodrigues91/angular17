import { Component } from '@angular/core';
import { NewComponentComponent } from "../../new-component/new-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponentComponent,CommonModule],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
public isTrue = true;
}
