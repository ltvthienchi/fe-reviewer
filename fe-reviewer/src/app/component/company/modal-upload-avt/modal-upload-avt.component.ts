import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../services/http/http.service';
import {IdUserService} from '../../../services/data-global/id-user.service';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import * as $ from 'jquery';

@Component({
  selector: 'app-modal-upload-avt',
  templateUrl: './modal-upload-avt.component.html',
  styleUrls: ['./modal-upload-avt.component.css']
})
export class ModalUploadAvtComponent implements OnInit {

  fileAvt;
  files: UploadFile[] = [];

  constructor(private dialogRef: MatDialogRef<ModalUploadAvtComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private http: HttpService, private userSer: IdUserService) {
    // this.idUser = this.userSer.getId();
    // this.dataReview.idCompany = data.idCompany;
    // this.dataReview.idReviewer = this.idUser;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {

  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileAvt = file;
          var reader = new FileReader();
          var preview = document.querySelector("#imgDemo");
          reader.addEventListener("load", function () {
            preview['src'] = reader.result;
          }, false);
          reader.readAsDataURL(file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log('over', event);
  }

  public fileLeave(event){
    console.log('leave', event);
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }

  saveModal() {
    let data = {
      idCompany: this.data.idCompany,
      nameCompany: this.data.nameCompany,
      webCompany: this.data.webCompany,
      telCompany: this.data.telCompany,
      addrCompany: this.data.addrCompany,
      avaCompany: this.fileAvt,
      panelCompany: null,
    };
    this.http.updateInfoCompany(data).subscribe((res:any) => {
      if(res.status === 'SUCCESS') {
        this.dialogRef.close(true);
      }
    })
  }

  selectFile() {
    $('#inputFile').click();
  }

  handleFileInput(files: FileList, event) {
    this.fileAvt = files.item(0);
    if (event.target.files && event.target.files[0]) {
      setTimeout(function () {
        const file = event.target.files[0];
        var reader = new FileReader();
        var preview = document.querySelector("#imgDemo");
        reader.addEventListener("load", function () {
          preview['src'] = reader.result;
        }, false);
        reader.readAsDataURL(file);
      }, 0)
    }
  }

}
