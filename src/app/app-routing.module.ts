import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FromComponent } from './components/from/from.component';


const routes: Routes = [
    {
        path: 'Location',
        component: ListComponent
    },
    {
      path: 'create-location',
      component: FromComponent
    },
    {
      path: 'create-location/:id',
      component: FromComponent
    },
    {
      path: '',
      redirectTo: 'Location',
      pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
