import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  isUser: boolean = false;
  isForm: boolean = true;
  user: String = "";
  public_repos!: String;
  apiKey: String = "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";
//   let headers = new HttpHeaders();
// headers = headers.set('Authorization', 'Basic xzeydyt==');

  onSubmit(f: NgForm){
   interface usersResponse{
     name: string;
     public_repos: string;
   }
    this.http.get<usersResponse>('https://api.github.com/users/' +this.user  
       
        
    ).toPromise().then(response=>{
     console.log(response)
     this.user= response!.name 
     this.public_repos= response!.public_repos

    })
    // console.log(this.user);

    this.isForm= false;
    this.isUser= true;
   
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}
