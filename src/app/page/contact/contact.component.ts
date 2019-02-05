import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public formWhats: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formWhats = this.formBuilder.group({
      textWhats: this.formBuilder.control('', [])
    })
  }
}
