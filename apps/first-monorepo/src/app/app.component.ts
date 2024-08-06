import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from '../../../../libs/features/counter/counter.component';

@Component({
  standalone: true,
  imports: [RouterModule, CounterComponent],
  selector: 'app-root',
  template: '<app-counter/>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first-monorepo';
}
