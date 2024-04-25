import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface StudentInformation {
  firstName: string,
  lastName: string,
  studentNumber: string
}
@Injectable({
  providedIn: 'root'
})
export class KaramSohalI0811863InfoService {
  private studentInfo: BehaviorSubject<StudentInformation> = new BehaviorSubject<StudentInformation>(
    {firstName:"Karamjit", lastName: "Sohal",studentNumber: "0811863"}
  );
  public StudentInfo$: Observable<StudentInformation> = this.studentInfo.asObservable();
  constructor() { }
}
