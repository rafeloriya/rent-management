import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tenantName = "Rent Management System";
  socialMediaUrl ="https://www.youtube.com"
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

}
