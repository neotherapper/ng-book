import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'Neotherapper',
        'http://angular.io',
        10
      ),
      new Article(
        'Angelos',
        'http://angular.io',
        4
      ),
      new Article(
        'Giannis',
        'http://angular.io',
        8
      )
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(
      new Article(
        title.value,
        link.value
      )
    );
    title.value = '';
    link.value = '';
    return false;
  }

}
