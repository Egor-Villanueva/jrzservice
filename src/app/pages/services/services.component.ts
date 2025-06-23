import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  activeModal: string | null = null;

  openModal(serviceId: string) {
    this.activeModal = serviceId;
  }
}
