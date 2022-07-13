import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  inputForm: FormGroup;
  outputForm: FormGroup;
  data: DataModel = new DataModel();

  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      demoText: new FormControl("", [Validators.required]),
      demoHyperLink: new FormControl("", [Validators.required]),
      demoLink: new FormControl("", [Validators.required])
    })
    this.outputForm = new FormGroup({
      output: new FormControl("")
    })
  }

  save() {
    var title = this.title(),
    description = this.description(),
    demo = this.demo();
//     demo = this.demoText() + this.demoHyperLink() + this.demoLink();
//     demo = demo == "" ? "" : `## 🚀 Demo
// ${demo}`

    console.log(this.data);
    console.log(title, description, demo);

    // this.outputForm.get('output').setValue
    this.outputForm.controls['output'].setValue(title + description + demo);
  }

  // https://stackoverflow.com/questions/32049527/using-typescript-to-create-html-using-template
  title(): string {
    var title = this.inputForm.get('title').value;
    return title == undefined || title.trim() == "" ? "" : `<h1 align="center">${title.trim()}</h1>\n`
  }

  description(): string {
    var description = this.inputForm.get('description').value;
    return description == undefined || description.trim() == "" ? "" : `${description.trim()}\n\n`
  }

  // demoText(): string {
  //   var demoText = this.inputForm.get('demoText').value;
  //   return demoText == undefined || demoText.trim() == "" ? "" : `${demoText.trim()} `
  // }

  // demoHyperLink(): string {
  //   var demoHyperLink = this.inputForm.get('demoHyperLink').value;
  //   return demoHyperLink == undefined || demoHyperLink.trim() == "" ? "" : `[${demoHyperLink.trim()}]`
  // }

  // demoLink(): string {
  //   var demoLink = this.inputForm.get('demoLink').value;
  //   return demoLink == undefined || demoLink.trim() == "" ? "" : `(${demoLink.trim()})`
  // }

  demo() {
    var demoText = this.inputForm.get('demoText').value,
    demoHyperLink = this.inputForm.get('demoHyperLink').value,
    demoLink = this.inputForm.get('demoLink').value,
    demo = "## 🚀 Demo\n";

    demoText = demoText == undefined || demoText.trim() == "" ? "" : demoText.trim();
    demo = demoText == "" ? "" : demo + demoText + " ";

    demoLink = demoLink == undefined || demoLink.trim() == "" ? "" : demoLink.trim();
    demoHyperLink = demoHyperLink == undefined || demoHyperLink.trim() == "" ? demoLink : demoHyperLink.trim();

    return demoLink != "" ? demo + `[${demoHyperLink.trim()}]` + `(${demoLink.trim()})` : demo;
  }



  // urlExists(url) {
  //   return fetch(url, {mode: "no-cors"})
  //     .then(res => true)
  //     .catch(err => false)
  // }

}
