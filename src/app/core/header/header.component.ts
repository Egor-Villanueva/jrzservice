import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // animations: [
  //   trigger('slideInMenu', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(-20%)', opacity: 0 }),
  //       animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({ transform: 'translateY(-10%)', opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class HeaderComponent {
  showMenu = false;

  // showMenu = false;
  //   toggleMenu() {
  //     this.showMenu = !this.showMenu;
  //   }
}
