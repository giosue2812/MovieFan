import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbAccordionModule,NbLayoutModule, NbListModule, NbInputModule, NbSelectModule, NbAutocompleteModule, NbTreeGridModule, NbDialogService, NbDialogModule, NbMenuModule, NbActionsModule, NbCheckboxModule, NbToggleModule, NbDatepickerModule,} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { AdminService } from './services/admin.service';
import { IsAdminPipe } from './pipe/is-admin.pipe';



@NgModule({
  declarations: [
    IsAdminPipe
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
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbToggleModule,
    NbDatepickerModule.forRoot()
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
    NbMenuModule,
    IsAdminPipe,
    NbActionsModule,
    NbToggleModule,
    NbDatepickerModule
  ],
  providers:[CommonService,AdminService]
})
export class SharedModule { }
