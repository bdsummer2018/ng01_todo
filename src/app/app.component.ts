import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="panel">
        <app-todo-list></app-todo-list>
      </div>
      <div class="panel">
        <app-note></app-note>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng01';
}
