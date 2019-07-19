import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigncomComponent } from './signcom/signcom.component';
import { TestserviceService } from './service/testservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SigncomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
