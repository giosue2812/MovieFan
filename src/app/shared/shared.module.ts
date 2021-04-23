import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbAccordionModule,NbLayoutModule, NbListModule, NbInputModule, NbSelectModule, NbAutocompleteModule, NbTreeGridModule,} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';



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
    NbTreeGridModule
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
  providers:[CommonService]
})
export class SharedModule { }
