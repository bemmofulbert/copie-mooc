import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ModulesComponent } from './modules/modules.component';
import { TopbarComponent } from './modules/topbar/topbar.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { ItemComponent } from './modules/sidebar/item/item.component';
import { SidebarHeadComponent } from './modules/sidebar/sidebar-head/sidebar-head.component';
import { SidebarFootComponent } from './modules/sidebar/sidebar-foot/sidebar-foot.component';
import { WorkspaceComponent } from './modules/workspace/workspace.component';
import { UnitComponent } from './modules/workspace/unit/unit.component';
import { WorkspaceunitComponent } from './modules/workspace/workspaceunit/workspaceunit.component';
import { WorksbottomComponent } from './modules/workspace/worksbottom/worksbottom.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ConnexionComponent,
    ModulesComponent,
    TopbarComponent,
    SidebarComponent,
    ItemComponent,
    SidebarHeadComponent,
    SidebarFootComponent,
    WorkspaceComponent,
    UnitComponent,
    WorkspaceunitComponent,
    WorksbottomComponent,
    QuestionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
