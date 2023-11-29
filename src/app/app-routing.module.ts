import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules/modules.component'
import { WorkspaceunitComponent } from './modules/workspace/workspaceunit/workspaceunit.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes =[
  {path: '', component: ConnexionComponent },
  {path: 'content', component: ModulesComponent },
  {path: 'question', component:QuestionComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
