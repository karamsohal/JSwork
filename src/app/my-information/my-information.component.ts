import { Component } from '@angular/core';
import { KaramSohalI0811863InfoService, StudentInformation } from '../service/karamsohal-0811863-info.service';

@Component({
  selector: 'app-my-information',
  standalone: true,
  imports: [],
  templateUrl: './my-information.component.html',
  styleUrl: './my-information.component.scss'
})
export class MyInformationComponent {
  myInformation: StudentInformation = {} as StudentInformation;
  constructor(private myInfoService: KaramSohalI0811863InfoService){}
  ngOnInit(){
    this.myInfoService.StudentInfo$.subscribe(information=>{
      this.myInformation = information;
    });
  }
}
