import { Component, Input , input} from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {

   image =  input.required<{src: string, alt: string}>();
   title = input.required<string>();
}
