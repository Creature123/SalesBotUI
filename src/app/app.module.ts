import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CameraPage } from '../pages/camera/camera';
import { DealerassessmentPage } from '../pages/dealerassessment/dealerassessment';
import { MaproutingPage } from '../pages/maprouting/maprouting';
import { QuestionanswerPage } from '../pages/questionanswer/questionanswer';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HeaderColor } from '@ionic-native/header-color';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { RatingPage } from '../pages/rating/rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CameraPage,
    DealerassessmentPage,
    MaproutingPage,
    QuestionanswerPage,
    RatingPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CameraPage,
    DealerassessmentPage,
    RatingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    FileTransferObject,
    File,
    Camera,
    FileTransfer,
    HeaderColor,
    HTTP
  ]
})
export class AppModule {}
