import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./pages/header/header";
import { Verifypage } from "./pages/verifypage/verifypage";
import { Footer } from "./pages/footer/footer";
import { Ourservices } from "./pages/ourservices/ourservices";
import { Contactus } from "./pages/contactus/contactus";
import { Signup } from "./pages/signup/signup";
import { Login } from "./auth/login/login";
import { Admindashboard } from "./dashboard/admindashboard/admindashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Verifypage, Footer, Ourservices, Contactus, Signup, Login, Admindashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-certificate-generator');
}
