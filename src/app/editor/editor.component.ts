import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  output: string;
  data: string;
  editForm: FormGroup;

  constructor(private sharedService: SharedService) { }

  ngOnInit(){
    this.editForm = new FormGroup({
      code: new FormControl()
    })

    this.data = this.sharedService.getCode();
    if(this.data != "") {
      this.editForm.controls['code'].setValue(this.data);
      this.onInputChange(this.data);
    }
  }

  onInputChange(data) {
    this.output = this.sharedService.parseMarkdown(data);
  }

}
