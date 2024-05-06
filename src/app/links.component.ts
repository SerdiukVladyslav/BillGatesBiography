// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from "@angular/core";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'bill-gates-links',
  template: `
    <h2>Useful Links:</h2>
    <ul>
      <li *ngFor="let link of links"><a [href]="link" target="_blank">{{ link }}</a></li>
    </ul>
  `,
  styles: [`
    h2 {
      color: navy;
    }
    ul {
      list-style-type: none;
    }
  `]
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class LinksComponent {
  @Input() links: string[] = [];

  updateLinks(links: string[]) : void {
    this.links = links;
  }
}
