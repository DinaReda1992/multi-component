import { Component , input} from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
title = input<string>();
icon = input<string>();
}
