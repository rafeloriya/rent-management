import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './Features/records/records.component';
import { AdvnaceComponent } from './Features/advnace/advnace.component';


const routes: Routes = [
  { path: "records", component: RecordsComponent },
  { path: "advance", component: AdvnaceComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
