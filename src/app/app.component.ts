import { RouterLink } from '@angular/router/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> An Updated Angular CI Example for Noobies and others! </h1>
    <nav>
      <a routerLink="/red">RED</a>
      <a routerLink="/blue">BLUE</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}