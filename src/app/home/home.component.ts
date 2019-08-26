import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ng-uikit-pro-standard'
import Glide from '@glidejs/glide';
import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {
  
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }



  constructor(config: CarouselConfig, private fb: FormBuilder, private connectionService: ConnectionService) {
    config.interval = 10000;
    config.noWrap = false;
    config.keyboard = false;
    config.noPause = false;

 
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });

  }

  ngOnInit() {
    
    new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()

    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
      ];
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  



}
