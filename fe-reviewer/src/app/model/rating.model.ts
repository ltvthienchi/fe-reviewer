export class rating {
  idProduct: string;
  idReviewer: string;
  dtCreated: Date;
  rtBattery: number;
  rtDisplay: number;
  rtPerformance: number;
  rtDesign: number;
  rtCamera: number;


  constructor(idProduct: string, idReviewer: string, dtCreated: Date, rtBattery: number, rtDisplay: number, rtPerformance: number, rtDesign: number, rtCamera: number) {
    this.idProduct = idProduct;
    this.idReviewer = idReviewer;
    this.dtCreated = dtCreated;
    this.rtBattery = rtBattery;
    this.rtDisplay = rtDisplay;
    this.rtPerformance = rtPerformance;
    this.rtDesign = rtDesign;
    this.rtCamera = rtCamera;
  }
}
