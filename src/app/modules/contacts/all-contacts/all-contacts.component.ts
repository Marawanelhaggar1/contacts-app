import { Component } from '@angular/core';
import * as contacts from '../../../../assets/data.json';
import { Contact } from 'src/models/ContactsModel';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss'],
})
export class AllContactsComponent {
  data: Contact[];
  searchedData: Contact[];
  values = '';

  constructor() {
    this.data = Object.values(contacts);
    this.data.pop();
    this.data.pop();
    console.log(this.data);
    this.searchedData = [...this.data];
  }

  deleteContact(ev: Contact) {
    console.log(ev.name);
    this.data = this.data.filter((contact) => contact.name !== ev.name);
  }

  searchByName(event: any) {
    this.values = event.target.value.toUpperCase();
    this.searchedData = this.searchedData.filter((contact) => {
      contact.name = contact.name.toUpperCase();
      return contact.name.includes(this.values);
    });

    if (this.searchedData.length === 0) {
      this.searchedData = [...this.data];
    }

    console.log(this.searchedData);
  }
}
