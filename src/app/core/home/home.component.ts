import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
declare function title():any
declare function dashboard():any
declare function logo():any
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    title();
    dashboard();
    logo();
  }

}
