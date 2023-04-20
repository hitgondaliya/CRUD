import { Component, Type } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

type categoryObj = {
  id : number,
  name1 : string,
  discription : string,

};

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(public _service: ServiceService) { }
  categoryData10: any[] = [];
  ngOnInit(): void {

    this.categoryData10 = JSON.parse(localStorage.getItem('categoryUsers')!) || [];
  }

  title = 'Angular-project';

  categoryUsers: any[] = [];
  categoryObj: categoryObj = {
    id: 0,
    name1: '',
    discription: '',
  }


  onSignUp() {
    let categoryData = JSON.parse(localStorage.getItem('categoryUsers')!) || [];
    console.log('categoryData >>>', categoryData);
    this.categoryObj.id = 0;
    if (categoryData && categoryData?.length) {
      let isData = categoryData.filter((data: any) => data.name1 === this.categoryObj.name1);
      if (!isData || !isData?.length)
        categoryData.push(this.categoryObj)
    } else {
      categoryData.push(this.categoryObj);

    }
    // const oldData = JSON.parse(categoryData)!;
    const newid = categoryData.length + 1;
    this.categoryObj.id = newid;
    console.log('id >>>>>>' ,  newid)
    this.categoryUsers = categoryData;
    localStorage.setItem('categoryUsers', JSON.stringify(this.categoryUsers));
    this._service.categoryObj = this.categoryObj;
    console.log(this.categoryObj)
    this.categoryObj = {
      id: 0,
      name1: '',
      discription: '',
    }

  }
  onEdit(category : categoryObj) {
    // const record = this.categoryUsers.find (m => m.id == this.categoryObj.id);
    // record.categoryObj = category;
    let categoryData100 = JSON.parse(localStorage.getItem('categoryUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
        localData.splice(0,1);
        this.categoryObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('categoryUsers', JSON.stringify(localData));
    }
  }
  onDelete (category : categoryObj) {
  
    let categoryData100 = JSON.parse(localStorage.getItem('categoryUsers')!) || [];
    
    if(categoryData100 != null){
      console.log("clicked button", categoryData100);
      const localData = (categoryData100)!
      ;
      for (let index = 0; index < localData.length; index++) {
       if(localData[index].id ==category.id) {
        if(confirm('Are you delete thi data?'))
        localData.splice(0,1);
        window.location.reload();
        
        // this.categoryObj = category;
        console.log("matched")
       }
        
      }
      localStorage.setItem('categoryUsers', JSON.stringify(localData));
      
      this.categoryUsers=localData;
    }
   
  }
  

}
