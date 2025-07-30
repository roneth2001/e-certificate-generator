import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ourservices } from '../ourservices/ourservices';

@Component({
  selector: 'app-header',
  imports: [RouterLink,Ourservices],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

