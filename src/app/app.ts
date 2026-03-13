import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";
import { Carousel } from "./carousel/carousel";
import { Home } from "./home/home";
import { Course } from "./course/course";
import { Contact } from "./contact/contact";
//import { RouterOutlet } from "../../node_modules/@angular/router/types/_router_module-chunk";


@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
