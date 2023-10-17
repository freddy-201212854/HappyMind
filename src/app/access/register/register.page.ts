import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { LocalfileService } from 'src/app/shared/localfile.service';
import { GeneralFiles } from 'src/app/shared/models/files';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  /************* Attributes *************/
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor(public localFile: LocalfileService) { }

  ngOnInit() {
    this.localFile.getLocalFileLocalizated(GeneralFiles.register).then(data => {
      this.fields = data;
    }, _ => { })
  }

  logIn() { }

  recoveryPass() { }

}
