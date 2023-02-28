import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent, AnotherChildComponent],
    bootstrap: [ AppComponent]
})

export class AppModule {};  