import { faMap } from '@fortawesome/free-regular-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faTimes = faTimes
  faPhone = faPhone
  faMap = faMap
  faEnvelope = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
