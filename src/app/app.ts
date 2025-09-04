import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar';
import { Hero } from '../component/hero/hero';
import { SliderComponent } from '../component/slider/slider';
import { Products } from '../component/products/products';
import { CallToAction } from '../component/call-to-action/call-to-action';
import { Blog } from '../component/blog/blog';
import { Contact } from '../component/contact/contact';
import { Footer } from '../component/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,Hero, SliderComponent , Products , CallToAction , Blog , Contact , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Pratice');
}
