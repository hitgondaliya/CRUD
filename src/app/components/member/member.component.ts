import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
type memberObj = {
  id: number,
  firstName: string,
  lastName : string,
  age : number,
  category1 : string,
  memberShip : string,
  duration : string,
};

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
  constructor(public _service : ServiceService) {}

  results: number | undefined;
  categoryData:any[] = [];
  categoryData10:any[] = [];
  categoryData20:any[] = [];
  categoryData100:any[] = [];
  ngOnInit(): void {
    this.categoryData20 = JSON.parse(localStorage.getItem('categoryUsers')!) || [];
    this.categoryData = JSON.parse(localStorage.getItem('durationUsers')!) || [];
    this.categoryData10 = JSON.parse(localStorage.getItem('membershipUsers')!) || [];
    this.categoryData100 = JSON.parse(localStorage.getItem('memberUsers')!) || [];
    console.log( ">>>>>>>here it is "   , this.categoryData10 )
    
    

  }

  title = 'Angular-project';
  a : number = 365;

  memberUsers: any[] = [];
  memberObj: memberObj = {
    id: 0,
    firstName: '',
    lastName : '',
    age : 0,
    category1 : '',
    memberShip : '',
    duration : '',
  }

  onSignUp() {
    let categoryData = JSON.parse(localStorage.getItem('memberUsers')!) || [];
    console.log('categoryData >>>', categoryData);
    if(categoryData && categoryData?.length) {
      let isData = categoryData.filter((data: any) => data.name === this.memberObj.firstName);
      if(!isData || !isData?.length)
        categoryData.push(this.memberObj)
    } else {
      categoryData.push(this.memberObj);
    }
    const newid = categoryData.length + 1;
    this.memberObj.id = newid;
    this.memberUsers = categoryData;
    localStorage.setItem('memberUsers', JSON.stringify(this.memberUsers));
    this._service.categoryObj = this.memberObj;
    console.log(this.memberObj)
    this.memberObj = {
      id: 0,
    firstName: '',
    lastName : '',
    age : 0,
    category1 : '',
    memberShip : '',
    duration : '',
    }
    window.location.reload();
  }
  onEdit(category : memberObj) {
    // const record = this.categoryUsers.find (m => m.id == this.durationObj.id);
    // record.durationObj = category;
    let categoryData100 = JSON.parse(localStorage.getItem('memberUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
        if(localData[index].id ==category.id) {
          localData.splice(0,1);
          this.memberObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('memberUsers', JSON.stringify(localData));
    }
   
  }
  onDelete (category : memberObj) {
    let categoryData100 = JSON.parse(localStorage.getItem('memberUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
         if(confirm('Are you delete thi data?'))
        localData.splice(0,1);
        window.location.reload();
        console.log("matched")
       }
        
      }
      localStorage.setItem('memberUsers', JSON.stringify(localData));
    }
   
  }
 
}
