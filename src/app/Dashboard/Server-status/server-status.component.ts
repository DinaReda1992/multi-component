import { Component, signal, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host:{
    class: 'status'
  }
})
export class ServerStatusComponent  implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  constructor(){
  }
  ngOnInit(){
        setInterval(()=>{
      const timer = Math.random();
      if (timer < 0.5 )
      this.currentStatus.set('online');
    else if ( timer < 0.9)
      this.currentStatus.set('offline'); 
    else
      this.currentStatus.set('unknown');
    }, 5000);
  }
}
