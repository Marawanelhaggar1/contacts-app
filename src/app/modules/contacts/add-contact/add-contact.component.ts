import { Component } from '@angular/core';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  name: string = '';
  phone: string = '';

  constructor(private _contactservice: ContactsService) {}

  addContact() {
    return this._contactservice.addContacts({
      name: this.name,
      phone: this.phone,
    });
  }
}
