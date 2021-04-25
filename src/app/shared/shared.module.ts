import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbAccordionModule,NbLayoutModule, NbListModule, NbInputModule, NbSelectModule, NbAutocompleteModule, NbTreeGridModule, NbDialogService, NbDialogModule,} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { AdminService } from './services/admin.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbLayoutModule,
    NbListModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbAutocompleteModule,
    FormsModule,
    NbTreeGridModule,
    NbDialogModule.forRoot() 
  ],
  exports:[
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbLayoutModule,
    NbListModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbAutocompleteModule,
    FormsModule,
    NbTreeGridModule,
  ],
  providers:[CommonService,AdminService]
})
export class SharedModule { }
