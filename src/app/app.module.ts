import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Services
import { DataService } from './services/DataService/data.service';
import { LocalStorageService } from './services/LocalStorageService/localStroage.service';
import { ModalService } from './services/ModalService/modal.service';
import { EventService } from './services/EventService/event.service';
import { BusyIndicatorService } from './services/BusyIndicatorService/busyIndicator.service';

// NG-Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Routes
import { routes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { TestingComponent } from './components/testing/testing.component';
import { BusyIndicatorComponent } from './components/busy-indicator/busy-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    ToDoListComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    QuizComponent,
    ModalContentComponent,
    TestingComponent,
    BusyIndicatorComponent,
  ],
  imports: [
    routes,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  entryComponents: [ModalContentComponent],
  providers: [DataService, LocalStorageService, ModalService, EventService, BusyIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
