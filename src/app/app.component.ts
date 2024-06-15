import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'meal-db-example';
  categories: any[] = [];
  url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      this.fetchMeals();
  }

  fetchMeals() {
    this.http.get(this.url).subscribe((response: any) => {
      this.categories = response.categories;
    });    
  }
}
