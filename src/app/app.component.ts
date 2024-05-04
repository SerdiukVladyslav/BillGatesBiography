// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component } from "@angular/core";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
  template: `
    <h1>Bill Gates</h1>
    <img src="/assets/images.jpg" alt="Bill Gates" style="width: 300px; height: 300px;">
    <bill-gates-bio></bill-gates-bio>
    <bill-gates-quotes [quotes]="quotes"></bill-gates-quotes>
    <bill-gates-links [links]="links"></bill-gates-links>
    <div>
      <h2>Add Quote:</h2>
      <input type="text" [(ngModel)]="newQuote">
      <button (click)="addQuote()">Add Quote</button>
    </div>
    <div>
      <h2>Add Link:</h2>
      <input type="text" [(ngModel)]="newLink">
      <button (click)="addLink()">Add Link</button>
    </div>
  `,
  styles: [`
    h1, h2 {
      color: navy;
    }
    p {
      font-size: 14px;
      font-family: Verdana;
    }
    :host {
      font-style: italic;
    }
  `]
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
  newQuote: string = "";
  newLink: string = "";
  quotes: string[] = [
    "«Patience is a key element of success»",
    "«If you think your teacher is tough, wait till you get a boss»",
    "«Life is not fair — get used to it! »",
    "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»",
    "«Be nice to nerds. Chances are you’ll end up working for one»"
  ];
  links: string[] = [
    "https://en.wikipedia.org/wiki/Bill_Gates",
    "https://www.gatesfoundation.org/",
    "https://www.gatesnotes.com/",
    "https://twitter.com/billgates"
  ];

  addQuote() {
    if (this.newQuote.trim() !== "") {
      this.quotes.push(this.newQuote);
      this.newQuote = "";
    }
  }

  addLink() {
    if (this.newLink.trim() !== "") {
      this.links.push(this.newLink);
      this.newLink = "";
    }
  }
}

