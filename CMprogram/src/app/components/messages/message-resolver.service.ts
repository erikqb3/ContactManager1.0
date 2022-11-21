import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ContactService } from "../contacts/contact.service";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Injectable({providedIn: 'root'})
export class MessageResolverService implements Resolve<Message[]>{
  constructor(
    private messageService: MessageService,
    private contactService: ContactService) {
    }
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
      const contacts = this.contactService.getContacts();
      return this.messageService.fetchMessages();
    
  }
}