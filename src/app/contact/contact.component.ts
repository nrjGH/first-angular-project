import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''), 
  });
}
