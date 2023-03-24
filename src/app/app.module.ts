import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { DataComponent } from './data/data.component';
import { ItemStatComponent } from './item.stat/item.stat.component';
import { ItemDetailsComponent } from './item.details/item.details.component';
import { AboutGuard } from './about.guard';
import { ExitAboutGuard } from './exit.about.guard';
import { FormatPipe } from './format.pipe';
import { JoinPipe } from './join.pipe';

const itemRoutes: Routes = [
  { path: 'details', component: ItemDetailsComponent },
  { path: 'stat', component: ItemStatComponent },
];

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AboutGuard], canDeactivate: [ExitAboutGuard] },
  { path: 'item/:id', component: ItemComponent, children: itemRoutes },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent,
    DataComponent,
    ItemStatComponent,
    ItemDetailsComponent,
    FormatPipe,
    JoinPipe
  ],
  bootstrap: [AppComponent],
  providers: [AboutGuard, ExitAboutGuard],
})
export class AppModule {}
