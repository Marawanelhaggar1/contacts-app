import { Component } from '@angular/core';
import { Contact } from 'src/models/ContactsModel';
import { Observable } from 'rxjs';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss'],
})
export class AllContactsComponent {
  data: Observable<Contact[]> = this._contactService.contacts;
  values = '';

  constructor(private _contactService: ContactsService) {}

  deleteContact(contact: Contact) {
    return this._contactService.deleteContacts(contact);
  }

  searchByName(event: any) {
    this.values = event.target.value.toUpperCase();
    return this._contactService.searchContact(this.values);
  }
}
