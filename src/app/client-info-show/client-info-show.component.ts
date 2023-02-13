import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-client-info-show',
  templateUrl: './client-info-show.component.html',
  styleUrls: ['./client-info-show.component.css']
})
export class ClientInfoSHowComponent {

  @ViewChild('fileInput') fileInput:any;
  userdetails:any;
  linkDetails:any;
  Userid:any;
  

 
  


  LinksForm = new FormGroup({
    title:new FormControl("" ,[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    link: new FormControl(""),
    order:new FormControl("1"),
    icon:new FormControl(""),
    icon_image:new FormControl(""),
    background_color:new FormControl(""),
    text_color:new FormControl(""),
    active_type_icon:new FormControl(""),
    custom_css:new FormControl(""),
    button_id:new FormControl(""),
    is_active:new FormControl("0"),
  });
  emp:any;
  responseUpdate:any;
  det:any;
reso:any;

clientToUpdate ={
  title:"",
  link:"",
}

allData(){
    this._ApiService.UpdateLink(this.linkDetails).subscribe({
      next:(response)=>{
        this.responseUpdate=response.message
        console.log(this.responseUpdate)
       

      },

    })
      
        
      

}
edit(x:any){
  
  this.clientToUpdate = this.linkDetails;
  this.linkDetails=x.id;
  console.log("here edit", this.clientToUpdate)

}






  
  
 

 constructor(private _autho:AuthonticationService ,
   private _ApiService:ApiService){

    this._ApiService.getAllLinks().subscribe({
    
      
      next: (data:any) => {
        
        console.log(data);
       
        
    
        this.userdetails = data
        this.linkDetails=data.data
        
        
        // console.log("noora" ,this.linkDetails);
        
      },
      error: (err) => {
        console.log(err);
      },
    });

 }


 idresp:any;
 num:any;
 deletebutton(x:any){
  this._ApiService.DeleteLink(this.num).subscribe({
    next: (response)=>{
     
      this.idresp=response;

    },
    error: (err) => {
      console.log(err)
    }

  })

   
 
 
  
   console.log("delete.done" ,  this.idresp)
  
  

}

  

 

 clickbutton(x:any){
  this._ApiService.getOneLinkShow(this.Userid)
    this.Userid=x;
     
      
      
      
    console.log("el-id" ,this.Userid);
  



}




     



 ngOnInit(): void {
  
 
  this._ApiService.getAllLinks().subscribe({
    
      
    next: (data:any) => {
      
      console.log(data);
     
      
  
      this.userdetails = data
      this.linkDetails=data.data
      
      
      // console.log("noora" ,this.linkDetails);
      
    },
    error: (err) => {
      console.log(err);
    },
  });
  
   
 }


 

 }


