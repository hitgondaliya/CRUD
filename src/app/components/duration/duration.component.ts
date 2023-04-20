import { Component, Type } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
type durationObj = {
  id: number,
  name: string,
  duration: number,
};
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})

export class DurationComponent {
  constructor(public _service: ServiceService) {}

  Result: any;
  fsubList: any;
  categoryData: any[] = [];
  ngOnInit(): void {
    this.categoryData = JSON.parse(localStorage.getItem('durationUsers')!) || [];
  }

  title = 'Angular-project';
  durationUsers: any[] = [];
  durationObj: durationObj = {
    id: 0,
    name: '',
    duration: 0,
  }

  onSignUp() {
    let categoryData1 = JSON.parse(localStorage.getItem('durationUsers')!) || [];
    console.log('categoryData >>>', categoryData1);
    if (categoryData1 && categoryData1?.length) {
      let isData1 = categoryData1.filter((data1: any) => data1.name === this.durationObj.name);
      if (!isData1 || !isData1?.length)
        categoryData1.push(this.durationObj)
    } else {
      categoryData1.push(this.durationObj);
    }
    const newid = categoryData1.length + 1;
    this.durationObj.id = newid;
    this.durationUsers = categoryData1;
    localStorage.setItem('durationUsers', JSON.stringify(this.durationUsers));
    this._service.durationObj = this.durationObj;
    console.log(this.durationObj, categoryData1)
    this.durationObj = {
      id: 0,
      name: '',
      duration: 0
    }

  }
  onEdit(category : durationObj) {
    // const record = this.categoryUsers.find (m => m.id == this.durationObj.id);
    // record.durationObj = category;
    // this.durationObj = category;
    let categoryData100 = JSON.parse(localStorage.getItem('durationUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
        localData.splice(0,1);
        this.durationObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('durationUsers', JSON.stringify(localData));
    }
  }
  onDelete (category : durationObj) {
    let categoryData100 = JSON.parse(localStorage.getItem('durationUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
         if(confirm('Are you delete thi data?'))
         localData.splice(0,1);
         window.location.reload();
        // this.durationObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('durationUsers', JSON.stringify(localData));
    }
   
  }
}
