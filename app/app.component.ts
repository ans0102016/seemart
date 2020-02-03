import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  styles: ['app.component.scss'],
  template: `
    <div class="app">
      <nav> </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/contact-us',
      name: 'Contact Us',
      exact: true
    }
  ]
}
