// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from "@angular/core";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'bill-gates-quotes',
  template: `
    <h2>Quotes:</h2>
    <ul>
      <li *ngFor="let quote of quotes">{{ quote }}</li>
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
export class QuotesComponent {
  @Input() quotes: string[] = [];
}
