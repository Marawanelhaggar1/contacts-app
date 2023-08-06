import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [ContactsComponent, AllContactsComponent, AddContactComponent],
  imports: [CommonModule, ContactsRoutingModule, FormsModule],
})
export class ContactsModule {}
