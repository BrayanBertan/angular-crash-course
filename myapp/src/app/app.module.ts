import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TruncatePipe } from './truncate.pipe';
import { HttpClientModule} from '@angular/common/http';
import { HttpService } from './http.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TruncatePipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
