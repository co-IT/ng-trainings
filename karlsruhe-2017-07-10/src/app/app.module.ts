import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookModule } from './book/book.module'
import { AppComponent } from './app.component';
import { ToggleViewModeComponent } from './toggle-view-mode/toggle-view-mode.component';
import { UtilitiesModule } from './utilities/utilities.module';

@NgModule({
  declarations: [
    AppComponent,
    ToggleViewModeComponent
  ],
  imports: [
    BrowserModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ToggleViewModeComponent, UtilitiesModule]
})
export class AppModule { }
