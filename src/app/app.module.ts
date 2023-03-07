import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DataComponent } from './data.component';
import { DataService } from './data.service';
import { LogService } from './log.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DataComponent],
  bootstrap: [AppComponent],
  providers: [DataService, LogService]
})
export class AppModule {}