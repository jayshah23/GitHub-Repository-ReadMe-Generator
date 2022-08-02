import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent implements OnInit {

  code: string;
  username: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private sharedService: SharedService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.username = this.sharedService.getUsername();
    this.code = this.sharedService.parseMarkdown(this.data);
  }

}
