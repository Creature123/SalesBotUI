import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public dealername: any;
  fileTransfer: FileTransferObject;
  imageURI:any;
  imageFileName:any;
  imgSrc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser,
    private transfer: FileTransfer, private file: File,  private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public http:HttpClient) 
    {
      this.fileTransfer = this.transfer.create();

    }
    // loadImage() {
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //     correctOrientation: true,
    //     allowEdit: false
    //   };
   
    //   this.camera.getPicture(options).then(imageData => {
    //     let base64data = 'data:image/jpeg;base64,' + imageData;
    //     this.bigImg = base64data;
    //     this.bigSize = this.getImageSize(this.bigImg);

    //     this.imageURI = imageData;
    //   this.presentToast(this.imageURI + '<<<<>>>>' + JSON.stringify(this.imageURI));
    //   }, err => {
    //     console.log('gallery error: ', err);
    //   });
    // }
   
    // createThumbnail() {
    //   this.generateFromImage(this.bigImg, 200, 200, 0.5, data => {
    //     this.smallImg = data;
    //     this.smallSize = this.getImageSize(this.smallImg);
    //   });
    // }
   
    // generateFromImage(img, MAX_WIDTH: number = 700, MAX_HEIGHT: number = 700, quality: number = 1, callback) {
    //   var canvas: any = document.createElement("canvas");
    //   var image = new Image();
   
    //   image.onload = () => {
    //     var width = image.width;
    //     var height = image.height;
   
    //     if (width > height) {
    //       if (width > MAX_WIDTH) {
    //         height *= MAX_WIDTH / width;
    //         width = MAX_WIDTH;
    //       }
    //     } else {
    //       if (height > MAX_HEIGHT) {
    //         width *= MAX_HEIGHT / height;
    //         height = MAX_HEIGHT;
    //       }
    //     }
    //     canvas.width = width;
    //     canvas.height = height;
    //     var ctx = canvas.getContext("2d");
   
    //     ctx.drawImage(image, 0, 0, width, height);
   
    //     // IMPORTANT: 'jpeg' NOT 'jpg'
    //     var dataUrl = canvas.toDataURL('image/jpeg', quality);
   
    //     callback(dataUrl)
    //   }
    //   image.src = img;
    // }
   
    // getImageSize(data_url) {
    //   var head = 'data:image/jpeg;base64,';
    //   return ((data_url.length - head.length) * 3 / 4 / (1024*1024)).toFixed(4);
    // }
    
    //UploadFromGalleryStart
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      allowEdit: false
    }
  
    this.camera.getPicture(options).then((imageData) => {
      let base64data = 'data:image/jpeg;base64,' + imageData;
      this.imgSrc = base64data;
      this.imageURI=imageData;
       //this.presentToast(this.imageURI + '<<<<>>>>' + JSON.stringify(this.imageURI));
        this.presentToast('Uploaded Successfully');
      }, (err) => {
      // console.log(err);
       this.presentToast(err);
      console.log('gallery error: ', err);

    });
  }
    //UploadFromGalleryEnd
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: any = {
 "method": "POST",
 "hostname": [
   "southcentralus",
   "api",
   "cognitive",
   "microsoft",
   "com"
 ],
 "path": [
   "customvision",
   "v2.0",
   "Prediction",
   "acf08827-f11e-42a6-89d3-b0d90777e29d",
   "image"
 ],
 "headers": {
   "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
   "Prediction-Key": "612d1b14e671426ba726f8d2dad25393",
   "Content-Type": "application/octet-stream",
   "Cache-Control": "no-cache",
   "Postman-Token": "55af43ca-144f-4083-ac78-b02950c22074"
 }
    };
  
    fileTransfer.upload(this.imgSrc, 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/acf08827-f11e-42a6-89d3-b0d90777e29d/image?projectId=acf08827-f11e-42a6-89d3-b0d90777e29d', options)
      .then((data) => {
       // this.presentToast(JSON.stringify(data) + " Uploaded Successfully" + data.response + 'data.responseCode>>>' + data.responseCode);
      this.imageFileName = "https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/acf08827-f11e-42a6-89d3-b0d90777e29d/image?projectId=acf08827-f11e-42a6-89d3-b0d90777e29d/a.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
      this.http.get('https://imageclassificationapi.azurewebsites.net/api/get/' + data).subscribe(result => {
          this.presentToast(JSON.stringify(result) + '<<<<<<<<<<<<<<<<<<');
      }, err => {
          console.log(err);
      });
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    this.dealername = this.navParams.get('param1');
  }

  //CameraPartStart
  takePicture() {
    let options : CameraOptions ={
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      targetHeight: 400,
      targetWidth: 400,
      saveToPhotoAlbum:true
    };
    this.camera.getPicture(options).then((imageData)  => {
      let base64data = 'data:image/jpeg;base64,' + imageData;
      this.imgSrc= base64data;
      this.imageURI=imageData;
    }, (err) => {
      //console.log(err);
      this.presentToast(err);
      console.log('Camera error: ', err);
    });
  }
  //CameraPartEnd
}
