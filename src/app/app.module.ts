import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PapersComponent } from './papers/papers.component';
import { QueriesComponent } from './queries/queries.component';
import { PaperTypesComponent } from './paper-types/paper-types.component';
import { QueryTypesComponent } from './query-types/query-types.component';
import { PaperTypesTableComponent } from './paper-types-table/paper-types-table.component';
import { CreatePaperTypeModalComponent } from './create-paper-type-modal/create-paper-type-modal.component';
import { EditPaperTypeModalComponent } from './edit-paper-type-modal/edit-paper-type-modal.component';
import { QueryTypesTableComponent } from './query-types-table/query-types-table.component';
import { CreateQueryTypeModalComponent } from './create-query-type-modal/create-query-type-modal.component';
import { EditQueryTypeModalComponent } from './edit-query-type-modal/edit-query-type-modal.component';
import { CreateQueryModalComponent } from './create-query-modal/create-query-modal.component';
import { CreatePaperModalComponent } from './create-paper-modal/create-paper-modal.component';
import { ManagePaperComponent } from './manage-paper/manage-paper.component';
import { EditPaperModalComponent } from './edit-paper-modal/edit-paper-modal.component';
import { EditQueryModalComponent } from './edit-query-modal/edit-query-modal.component';
import { PapersTableComponent } from './papers-table/papers-table.component';
import { QueriesTableComponent } from './queries-table/queries-table.component';

import { QueryTypeService } from './services/query-type-service';
import { PaperTypeService } from './services/paper-type-service';
import { QueryService } from './services/query-service';
import { PaperService } from './services/paper-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    PapersComponent,
    QueriesComponent,
    PaperTypesComponent,
    QueryTypesComponent,
    PaperTypesTableComponent,
    CreatePaperTypeModalComponent,
    EditPaperTypeModalComponent,
    QueryTypesTableComponent,
    CreateQueryTypeModalComponent,
    EditQueryTypeModalComponent,
    CreateQueryModalComponent,
    CreatePaperModalComponent,
    ManagePaperComponent,
    EditPaperModalComponent,
    EditQueryModalComponent,
    PapersTableComponent,
    QueriesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    QueryTypeService,
    PaperTypeService,
    QueryService,
    PaperService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreatePaperTypeModalComponent,
    EditPaperTypeModalComponent,
    CreateQueryTypeModalComponent,
    EditQueryTypeModalComponent,
    CreateQueryModalComponent,
    CreatePaperModalComponent,
    EditPaperModalComponent,
    EditQueryModalComponent
  ]
})
export class AppModule { }
