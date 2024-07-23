import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.contactForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			name: ['', [Validators.required]]
		});
	}

	onSubmit() {
		if (this.contactForm.valid) {
			console.log('Form submitted:', this.contactForm.value);
		}
	}


  

}
