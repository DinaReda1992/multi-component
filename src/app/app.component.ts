import { Component } from '@angular/core';
import { HeaderComponent } from "./Header/header.component";
import { ServerStatusComponent } from "./Dashboard/Server-status/server-status.component";
import { TrafficComponent } from "./Dashboard/Traffic/traffic.component";
import { TicketsComponent } from './Dashboard/Tickets/TicketsComponent/tickets.component';
import { DashboardItemComponent } from './Dashboard/Dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
 
}
