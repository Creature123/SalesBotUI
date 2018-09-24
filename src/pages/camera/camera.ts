import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';

//import angular from 'angular';

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
  imageURI: any;
  imageFileName: any;
  imgSrc: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser,
    private transfer: FileTransfer, private file: File, private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public http: HttpClient) {
    this.fileTransfer = this.transfer.create();

  }

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
      this.imageURI = imageData;
      //this.presentToast(this.imageURI + '<<<<>>>>' + JSON.stringify(this.imageURI));
      this.presentToast('Uploaded Successfully');
    }, (err) => {
      // console.log(err);
      this.presentToast(err);
      console.log('gallery error: ', err);

    });
  }
  //UploadFromGalleryEnd


  //CameraPartStart
  takePicture() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      targetHeight: 400,
      targetWidth: 400,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(options).then((imageData) => {
      let base64data = 'data:image/jpeg;base64,' + imageData;
      this.imgSrc = base64data;
      this.imageURI = imageData;
    }, (err) => {
      //console.log(err);
      this.presentToast(err);
      console.log('Camera error: ', err);
    });
  }
  //CameraPartEnd



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
    this.presentToast(JSON.stringify(this.imgSrc));
    fileTransfer.upload(this.imageURI, 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/acf08827-f11e-42a6-89d3-b0d90777e29d/image?projectId=acf08827-f11e-42a6-89d3-b0d90777e29d', options)
      .then((data) => {
        this.presentToast("JSON Data got succ");
        // this.presentToast(JSON.stringify(data) + " Uploaded Successfully" + data.response + 'data.responseCode>>>' + data.responseCode);

        // var counter = 0;
        // this.presentToast("Counyter : "+counter);
        // let dataVal = Array.of(data['predictions']);
        // this.presentToast("dataVal : "+JSON.stringify(dataVal));
        // this.presentToast("dataVal : "+dataVal.length);
        // for(let i=0; i< dataVal.length; i++) {
        // if(dataVal[i].tagName === 'Cocacola') {
        //   this.presentToast("dataVal[i].tagName"+dataVal[i].tagName);
        //   counter++;
        // }
        //}
        //  var result = ((counter/ dataVal.length)*100).toFixed(2);
        //  this.presentToast("Result : "+result);
        var index = 0;
        //let json_key = Object.keys(data);
        let data1 = [{
          "probability": 0.0264889,
          "tagId": "5bca3311-b118-4001-8208-a9b797a9cf6e",
          "tagName": "CocaCola",
          "boundingBox": {
            "left": 0.905169368,
            "top": 0.07830317,
            "width": 0.02973032,
            "height": 0.0839854
          }
        },
        {
          "probability": 0.01059846,
          "tagId": "5bca3311-b118-4001-8208-a9b797a9cf6e",
          "tagName": "CocaCola",
          "boundingBox": {
            "left": 0.9096768,
            "top": 0.179937065,
            "width": 0.0361274481,
            "height": 0.139657438
          }
        },
        {
          "probability": 0.160402477,
          "tagId": "5bca3311-b118-4001-8208-a9b797a9cf6e",
          "tagName": "CocaCola",
          "boundingBox": {
            "left": 0.970741451,
            "top": 0.149869949,
            "width": 0.0201371312,
            "height": 0.221095413
          }
        },
        {
          "probability": 0.04840527,
          "tagId": "5bca3311-b118-4001-8208-a9b797a9cf6e",
          "tagName": "Limca",
          "boundingBox": {
            "left": 0.80793786,
            "top": 0.6347105,
            "width": 0.0366870165,
            "height": 0.112727582
          }
        },
        {
          "probability": 0.0265493952,
          "tagId": "5bca3311-b118-4001-8208-a9b797a9cf6e",
          "tagName": "Pepsi",
          "boundingBox": {
            "left": 0.6381625,
            "top": 0.668990254,
            "width": 0.0320073366,
            "height": 0.157803714
          }
        }];

        var totalCount = 0;
        var clientCount = 0;

        // var counter = 0;
        // let dataVal1 = Array.of(data['predictions'].dataVal);
        // for (let i = 0; i < data1.length; i++) {
        //   if (data1[i].tagName === "CocaCola") {
        //     counter++;
        //   }
        // }
        // this.presentToast("Client Visibility : " + ((counter / data1.length) * 100).toFixed(2));


          for(var i = 0; i < data1.length; i++)
          {
            totalCount++;
            this.presentToast("Hello : " +data1[i].tagName);
            if(data1[i].tagName === "CocaCola")
            {
              clientCount++;
            }
          }
      
          this.presentToast("Client Visibility : " +((clientCount / totalCount)*100).toFixed(3));

        loader.dismiss();

        // var Total = data.response.predictions.Select(x => x.tagId.Count()).Count();

        //     int TagCount = objectvalue.predictions.Where(x => x.tagName == "CocaCola")
        //                    .Select(x => x.tagId.Count()).Count();

        //     decimal result = Math.Round((decimal)TagCount / Total * 100, 2);



      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(JSON.stringify(err));
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


}
