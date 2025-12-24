import { Component } from '@angular/core';
import { NewTicketComponent } from '../New-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host:{
    class: 'tickets'
  }
})
export class TicketsComponent {

}
