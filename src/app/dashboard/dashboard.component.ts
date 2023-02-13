import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit  {

icon_image:any;

getFile(event:any){
this.icon_image = event.target.files[0];
}
  off:any;
logout(){
  this._ApiService.REMOVEDATA();
  this._router.navigate(['/register'])

}

  constructor(private  _ApiService:ApiService ,
    private __AuthonticationService:AuthonticationService,
    private _ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _router:Router
     ){
     
     
    }

  userLogin: any;
  userName: any;
  title:any;
  
  
  
  @ViewChild('fileInput') fileInput:string="";
 

 
  imgpath:string='/home/mashro3ylink/public_html/app/Http/Controllers/API/Client/LinkAPIController.php';


  LinksForm = new FormGroup({
    title:new FormControl(""),
    link: new FormControl(""),
    order:new FormControl("1"),
    icon:new FormControl("fa fa -facebook"),
    // icon_image:new FormControl(""),
    background_color:new FormControl("#ffddee"),
    text_color:new FormControl(""),
    active_type_icon:new FormControl("icon"),
    custom_css:new FormControl(""),
    button_id:new FormControl(""),
    is_active:new FormControl("1"),
  });

  
  Res:any;
userid:any;
userdetails:any;
value:any;
linkDetails:any;
Userid:any;





  clickbutton(x:any){
    this._ApiService.getOneLinkShow(this.Userid)
      this.Userid=x;
       
        
        
        
      console.log("el-id" ,this.Userid);
    
  
  

  }
 

   


  
  reso:any;
  d:any;
  

  AddClientData(form:any){
   
    
    this._ApiService.AddLink(form.value).subscribe({
      next:(response:any)=>{
        this.imgpath;
        this.linkDetails=form.value;
        console.log("addlink", this.linkDetails)
      }
    }) 
  }
  


  
  sendClientData(form:any){
    
   



    // this.__AuthonticationService.AddLink(form.value).subscribe({
    //   next:(response:any)=>{
        

    //       this.reso=response;
    //       this.linkDetails=this.LinksForm;
    //       console.log(this.linkDetails.title)
        
    //     console.log(this.reso)
  
    //   }
  
    // })
  }

 

 


    



 ngOnInit(): void {
  this.__AuthonticationService.isLogin.subscribe({
    next: (newValue) => {
      this.userLogin = newValue;
      console.log('susbsribe run');
      this.userName = this.__AuthonticationService.userName;

  
    },

    
  });

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

 submitData(){
  let formdata= new FormData();
  formdata.set("icon_image", this.icon_image  )
  this._ApiService.AddLink(formdata).subscribe({
    next:(response)=>{
      
    }
  })
  }
 
  

 }


