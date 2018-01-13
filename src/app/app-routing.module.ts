import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PapersComponent } from './papers/papers.component';
import { PaperTypesComponent } from './paper-types/paper-types.component';
import { QueriesComponent } from './queries/queries.component';
import { QueryTypesComponent } from './query-types/query-types.component';
import { ManagePaperComponent } from './manage-paper/manage-paper.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'papers', component: PapersComponent },
  { path: 'paperTypes', component: PaperTypesComponent },
  { path: 'queries', component: QueriesComponent },
  { path: 'queryTypes', component: QueryTypesComponent },
  { path: 'managePaper/:id', component: ManagePaperComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
