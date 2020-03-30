import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path : '' , redirectTo : 'red', pathMatch: 'full'
  },
  {
    path : 'red', component: RedComponent
  },
  {
    path : 'test', component: TestComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
