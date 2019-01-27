import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { PapaParseModule } from 'ngx-papaparse';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BuildingViolationsComponent } from './building-violations/building-violations.component';

//Services
import { ViolationService } from './services/violation.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingViolationsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    PapaParseModule,
    MatTableModule
  ],
  providers: [
    ViolationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
