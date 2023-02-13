import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthonticationService } from './authontication.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:any;
  dataaa:any;
   

 
  
  constructor(private _HttpClient:HttpClient , private _AuthonticationService:AuthonticationService) {
     this.token= this._AuthonticationService.Token;
     let dataaa= this.token.data;
     let clientdata: any = jwtDecode(this.token);
     console.log(clientdata)
    
    
  }

  

  getAllLinks(){
    
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+this._AuthonticationService.Token,
      'Accept-Language': '{{lang_code}}'
    })

    return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/links' , {headers : httpheaders});
    
  }
   

  AddLink(clientdata:any):Observable<any>{
    console.log(this.token)
    
  
  

    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer${this.token}`,
    'Accept-Language': '{{lang_code}}'
    
    
    })
  
  
    return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/links' ,clientdata, {headers : httpheaders} )
    
  
  }


 

   

    getOneLinkShow(id:number){
      let httpheaders = new HttpHeaders({
      'Accept':' application/json',
        'Content-Type': 'application/json' ,
        'Authorization': 'Bearer'+this.token,
      'Accept-Language': '{{lang_code}}'
      })
      console.log("elkey",this.token.access_token.key)
      return this._HttpClient.get("https://mashro3ylink.com/api/v1/clients/links/"+id ,{headers : httpheaders});
    }


UpdateLink(id:number):Observable<any>{
  let httpheaders = new HttpHeaders({
    'Accept':' application/json',
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer'+this.token,
    'Accept-Language': '{{lang_code}}'
    })
    console.log("update Token", this.token)

  return this._HttpClient.put('https://mashro3ylink.com/api/v1/clients/links/'+id,{headers : httpheaders});
  
}
DeleteLink(id:any){
  let httpheaders = new HttpHeaders({
    'Accept':' application/json',
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer'+this.token,
    'Accept-Language': '{{lang_code}}'
    })
  return this._HttpClient.delete('https://mashro3ylink.com/api/v1/clients/links/'+id, {headers : httpheaders});
}

logout(clientdata:any):Observable<any>{
  let httpheaders = new HttpHeaders({
    'Accept':' application/json',
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer',
    'Accept-Language': '{{lang_code}}'
    })
  return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/auth/logout', clientdata);
}
REMOVEDATA(){
  localStorage.removeItem("Token")
  localStorage.removeItem("Data")
}
}
