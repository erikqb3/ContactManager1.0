import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent
      .subscribe(
        (contactArray: Contact[]) => {
          this.contacts = contactArray;
        }
      )
  }

  onContactSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

}
