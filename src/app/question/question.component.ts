import { Component } from '@angular/core';
import http from '../app.axios';

http.get('/question')
  .then((res) => { 
    console.log(res.data);
  })
  .catch((err) => {
    //console.log(err);
  })

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  enonce?:String
}
