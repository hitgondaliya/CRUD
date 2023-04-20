import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


type membershipObj = {
  id: number,
  Name: string,
  category: string,
  duration: number
};
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {

  constructor(public _service: ServiceService) { }

  // Results = '';
  // fsubList: any
  categoryData: any[] = [];
  categoryData0: any[] = [];
  categoryData74: any[] = [];

  ngOnInit(): void {
    this.categoryData = JSON.parse(localStorage.getItem('categoryUsers')!) || [];

    this.categoryData74 = JSON.parse(localStorage.getItem('durationUsers')!) || [];
    this.categoryData0 = JSON.parse(localStorage.getItem('membershipUsers')!) || [];
    console.log( 'data >>>>>>' , this.categoryData74);
     

  }

  title = 'Angular-project';
  

  membershipUsers: any[] = [];
  membershipObj: membershipObj = {
    id: 0,
    Name: '',
    category: '',
    duration: 0
  }

  onChangeDuration(event:any) {
    this.membershipObj['duration'] = JSON.parse(event.target.value);
  }
  

  onSignUp() {
    let categoryData = JSON.parse(localStorage.getItem('membershipUsers')!) || [];
    console.log('categoryData >>>', categoryData);
    if (categoryData && categoryData?.length) {
      let isData = categoryData.filter((data: any) => data.Name === this.membershipObj.Name);
      if (!isData || !isData?.length)
        categoryData.push(this.membershipObj)
    } else {
      categoryData.push(this.membershipObj);
    }
    const newid = categoryData.length + 1;
    this.membershipObj.id = newid;
    this.membershipUsers = categoryData;
    localStorage.setItem('membershipUsers', JSON.stringify(this.membershipUsers));
    this._service.membershipObj = this.membershipObj;
    console.log(this.membershipObj , categoryData)
    this.membershipObj = {
      id: 0,
      Name: '',
      category: '',
      duration: 0
    }
  }
  onEdit(category : membershipObj) {
    // const record = this.categoryUsers.find (m => m.id == this.durationObj.id);
    // record.durationObj = category;
    let categoryData100 = JSON.parse(localStorage.getItem('membershipUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
        if(localData[index].id ==category.id) {
          localData.splice(0,1);
          this.membershipObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('membershipUsers', JSON.stringify(localData));
    }
   
  }
  onDelete (category : membershipObj) {
    let categoryData100 = JSON.parse(localStorage.getItem('membershipUsers')!) || [];
    
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
         if(confirm('Are you delete thi data?'))
        localData.splice(0,1);
        window.location.reload();
        console.log("matched")
       }
        
      }
      localStorage.setItem('membershipUsers', JSON.stringify(localData));
    }
   
  }
}
