import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-spinner
      name="main"
      bdColor="rgba(255,255,255,0.9)"
      size="medium"
      color="#183884"
      type="ball-circus"
      [fullScreen]="true">
      
      <p style="color: white">Carregando...</p>
    </ngx-spinner>
    <router-outlet></router-outlet>
    <ngx-spinner></ngx-spinner>
  `,
})
export class AppComponent {
  title = 'biblioteca';
}
