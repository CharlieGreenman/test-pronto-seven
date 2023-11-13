import { Component } from '@angular/core';

@Component({
  selector: 'test-pronto-seven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-pronto-seven';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
