import {Component, Inject, OnInit} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpService} from '../../../services/http/http.service';
import {IdUserService} from '../../../services/data-global/id-user.service';
import * as $ from 'jquery';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-modal-upload-panel',
  templateUrl: './modal-upload-panel.component.html',
  styleUrls: ['./modal-upload-panel.component.css']
})
export class ModalUploadPanelComponent implements OnInit {
  filePanel;
  files: UploadFile[] = [];

  constructor(private dialogRef: MatDialogRef<ModalUploadPanelComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private http: HttpService, private userSer: IdUserService, private notifier: NotifierService) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  dropped(event: UploadEvent) {
    this.files = event.files;
    const tempImg = event.files[0].relativePath.split('.');
    const exFile = tempImg[tempImg.length - 1];
    if(exFile.toLocaleLowerCase() === 'png' || exFile.toLocaleLowerCase() === 'jpg') {
      for (const droppedFile of event.files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
              this.filePanel = file;
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
    } else {
      this.notifier.notify('error', 'Please chose image has .png or .jpg');
    }
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
      avaCompany: null,
      panelCompany: this.filePanel,
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
    const tempImg = files[0].name.split('.');
    const exFile = tempImg[tempImg.length - 1];
    if(exFile.toLocaleLowerCase() === 'png' || exFile.toLocaleLowerCase() === 'jpg') {
      this.filePanel = files.item(0);
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
    } else {
      this.notifier.notify('error', 'Please chose image has .png or .jpg');
    }

  }

}
