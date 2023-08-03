import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/models/ContactsModel';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss'],
})
export class SingleContactComponent {
  @Input() d!: Contact;
  @Output() deleteEvent = new EventEmitter();
  constructor() {
    // console.log(this.contact);
  }

  deleteContact() {
    this.deleteEvent.emit(this.d);
  }
}
