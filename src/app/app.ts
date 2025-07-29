import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./pages/header/header";
import { Verifypage } from "./pages/verifypage/verifypage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Verifypage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-certificate-generator');
}
