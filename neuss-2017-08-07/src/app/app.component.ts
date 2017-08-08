import { Component, OnInit } from '@angular/core';
import { Book } from './book/book';
import { ViewType } from "./book/view-type";

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeView = ViewType.Kachel;
  view = ViewType;
  books: Book[];

  ngOnInit() {
    this.books = [
      // tslint:disable-next-line:max-line-length
      new Book('Ng-Book', 'The complete Guide to Angular 4', '1546376232', '/assets/img/book-covers/angular-ng-book.png', [ 'Nathan Murray',  'Ari Lerner', 'Felipe Coury', 'Carlos Taborda'], 'What if you could master the entire framework – with solid foundations – in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools. Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research.'),
      new Book('Angular', 'Das umfassende Handbuch zum JavaScript-Framework', '3836239140', '/assets/img/book-covers/angular-rheinwerk.png', [ 'Nathan Murray',  'Ari Lerner', 'Felipe Coury', 'Carlos Taborda'], 'Angular ist das JavaScript-Framework für professionelle Webapplikationen – hier lernen Sie es umfassend kennen! Christoph Höller macht Sie mit allen relevanten Technologien, Standards und Kernbestandteilen des Angular-Frameworks vertraut. Am Praxisbeispiel einer Projektverwaltung führt Ihnen der Webprofi die Komponenten und Konzepte von Angular praxisnah vor. Formulare, Routing, HTTP-Anbindung und Testing – hier lernen Sie Schritt für Schritt, wie Sie eigene Angular-Webapplikationen erstellen. Inkl. einer umfassenden Zusammenstellung der Features von TypeScript und ECMAScript 2015 im Anhang.'),
      // tslint:disable-next-line:max-line-length
      new Book('Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript', '3864903572', '/assets/img/book-covers/angular-dpunkt.png', [ 'Johannes Hoppe', 'Ferdinand Malcher', 'Danny Koppenhagen', 'Gregor Woiwode'], 'Egal, ob Sie schon Erfahrung mit AngularJS 1.x haben oder nicht – mit diesem Buch gelingt Ihnen der schnelle Einstieg in das neue Angular-Framework ab Version 4. Anhand eines anspruchsvollen Beispielprojekts lernen Sie Schritt für Schritt, wie Sie strukturierte und modularisierte Single-Page-Anwendungen entwickeln. Praktisch: Der Programmcode zu jeder einzelnen Entwicklungsphase ist auf GitHub verfügbar. So können Sie einsteigen, wo Sie wollen, und nach Wunsch Entwicklungsschritte überspringen. In einem kompakten Schnellstart-Kapitel erstellen Sie zunächst eine erste funktionierende Anwendung. Danach machen Sie sich mit grundlegenden Angular-Konzepten und Techniken vertraut: Angular CLI, Komponenten und Template-Syntax, HTTP-Anbindung, Routing, Formulare (Reactive Forms & Template Driven Forms).'),
      new Book('Written in the Future', 'tbd.', 'tbd.', '', ['No One'], 'tbd.')
    ];
  }

  activateView(type: ViewType) {
    this.activeView = type;
  }
}
