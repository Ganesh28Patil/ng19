import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './component/nav-bar/nav-bar';
import { SideBar } from './component/side-bar/side-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar, SideBar],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styles: ''
})
export class App {
  protected readonly title = signal('workshop-csbs');
}
