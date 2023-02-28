import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DataModule } from './data/data.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DataModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
