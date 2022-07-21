import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  username: string = "";
  inputForm: FormGroup;
  outputForm: FormGroup;

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.username = this.shared.getUsername();

    this.inputForm = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      demoText: new FormControl(""),
      demoHyperLink: new FormControl(""),
      demoLink: new FormControl(""),
      featuresDescription: new FormControl(""),
      features: new FormArray([
        new FormControl("")
      ]),
      setup: new FormArray([
        new FormGroup({
          description: new FormControl(""),
          code: new FormControl("")
        })
      ])
    })

    this.outputForm = new FormGroup({
      output: new FormControl("")
    })
  }

  save() {
    var title = this.title(),
    description = this.description(),
    demo = this.demo(),
    features = this.features(),
    setup = this.setup();

    // console.log("Title: "+title, "dsc: "+description, "demo: "+demo, "ft: "+features, "steps: "+ setup);

    // this.outputForm.get('output').setValue
    this.outputForm.controls['output'].setValue(title + description + demo + features + setup);
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

  demo() {
    var demoText = this.inputForm.get('demoText').value,
    demoHyperLink = this.inputForm.get('demoHyperLink').value,
    demoLink = this.inputForm.get('demoLink').value,
    demo = "",
    demoIntro = "## 🚀 Demo\n";

    if(demoLink == undefined || demoLink.trim() == "") demoLink = "", demoHyperLink = "";
    else {
      if(demoHyperLink == undefined || demoHyperLink.trim() == "") demoHyperLink = demoLink;
      else demoHyperLink = demoHyperLink.trim();
      demo = `[${demoHyperLink.trim()}]` + `(${demoLink.trim()})`;
    }

    if(demoText == undefined || demoText.trim() == "") {
      demoText = "";
      if(demoHyperLink == "" && demoLink == "") return "";
    } else {
      demoText = demoText.trim();
      demo = demoText + " " + demo;
    }
    
    return demoIntro + demo + "\n\n";
  }

  features() {
    var featuresDescription = this.inputForm.get('featuresDescription').value,
    features = "",
    featureIntro = " ## 🧐 Features\n";

    (<FormArray>this.inputForm.get('features')).controls.forEach((feature, index) => {
      // console.log(index, feature.value);
      if(feature.value.trim() != "") {
        features = features + "- " + feature.value.trim() + "\n";
      }
    })

    if(featuresDescription == undefined || featuresDescription.trim() == "") {
      featuresDescription = "";
      if(features == "") return "";
    } else {
      featuresDescription = featuresDescription.trim();
      features = featuresDescription + "\n" + features;
    }

    return featureIntro + features;
  }

  setup() {
    var setup = "",
    setupIntro = " ## 🛠️ Installation Steps\n\n",
    setupOutro = "🌟 You are all set!";

    (<FormArray>this.inputForm.get('setup')).controls.forEach((steps, index: number) => {
      // console.log(index, feature.value);
      if(steps.value.description.trim() != "") {
        var i = parseInt(index.toString())+1;
        setup = setup + i + ". " + steps.value.description.trim() + "\n\n";
      }
      if(steps.value.code.trim() != "") {
        setup = setup + "```bash\n" + steps.value.code.trim() + "\n```\n\n";
      }
    })

    if(setup == "") return "";

    return setupIntro + setup + setupOutro;
  }

  
  // Features
  addFeature() {
    (<FormArray>this.inputForm.get('features')).push(new FormControl(""));
  }

  removeFeature(i) {
    (<FormArray>this.inputForm.get('features')).removeAt(i);
  }

  addStep() {
    (<FormArray>this.inputForm.get('setup')).push(new FormGroup({
      description: new FormControl(""),
      code: new FormControl("")
    }))
  }

  removeStep(i) {
    (<FormArray>this.inputForm.get('setup')).removeAt(i);
  }

}
