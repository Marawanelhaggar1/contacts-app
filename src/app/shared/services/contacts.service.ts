import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from 'src/models/ContactsModel';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts = new BehaviorSubject<Contact[]>([
    {
      phone: '(433) 866-4025',
      name: 'Elmo Pratt',
    },
    {
      phone: '1-651-874-5256',
      name: 'Idona Guerrero',
    },
    {
      phone: '1-578-313-5073',
      name: 'Sasha Tyson',
    },
    {
      name: 'Zeus Brock',
      phone: '(867) 856-6484',
    },
    {
      name: 'Paula Oneal',
      phone: '1-878-122-6048',
    },

    {
      name: 'Brian Owens',
      phone: '(946) 555-1525',
    },
    {
      name: 'Samantha Hinton',
      phone: '(175) 973-7948',
    },
    {
      name: 'Thor Johns',
      phone: '1-680-867-9987',
    },
    {
      name: 'Yuri Maynard',
      phone: '1-532-821-7257',
    },
    {
      name: 'Oleg Harmon',
      phone: '(412) 394-4729',
    },
  ]);
  constructor() {}

  getContacts() {
    return this.contacts.value;
  }

  deleteContacts(contact: Contact) {
    return this.contacts.next(
      this.contacts.value.filter((c) => c.name !== contact.name)
    );
  }

  searchContact(name: string) {
    let searchValues = [...this.contacts.value];

    return this.contacts.next(
      this.contacts.value.filter((c) => {
        c.name = c.name.toUpperCase();
        return c.name.includes(name);
      })
    );
  }

  addContacts(contact: Contact) {
    console.log(this.contacts);
    console.log(contact);
    return this.contacts.next([...this.contacts.value, contact]);
  }
}
