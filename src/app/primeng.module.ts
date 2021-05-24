import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { InplaceModule } from 'primeng/inplace';
import { TabMenuModule } from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [
    ToastModule,
    MenuModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    TabViewModule,
    TooltipModule,
    CheckboxModule,
    AutoCompleteModule,
    ChipsModule,
    EditorModule,
    FileUploadModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    RadioButtonModule,
    MessageModule,
    MessagesModule,
    ProgressBarModule,
    InplaceModule,
    TabMenuModule,
    ProgressBarModule,
    CardModule
  ]
})
export class PrimengModule {

}