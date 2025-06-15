import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  activeTab: string = 'home';

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }
  handleNavClick(tab: string) {
    this.activeTab = tab;
    this.router.navigate([tab])
  }
}

