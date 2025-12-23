import { Component } from '@angular/core';
import { ButtonComponent } from "../../../Shared/Button/button.component";
import { ControlComponent } from "../../../Shared/Control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {

}
