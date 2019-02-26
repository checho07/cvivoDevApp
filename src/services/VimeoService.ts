import { HomeScreenGroup } from './../data/HomeScreenGroup';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class VimeoService {

  private options : any;
  private headersParams: any;
  private vimeoURl:string;
  private apiurl:string;

  constructor(public http: HttpClient) {
    this.apiurl = 'https://cvivovimeoapi.herokuapp.com';
    this.vimeoURl = "https://api.vimeo.com";

  }

getHomeScreenGroups() {

  this.options = {
    headers: this.headersParams
  }
  return  this.http.get(this.apiurl + '/albums')      

   };



   getHomeScreenGroupsVideos(hohomeScreenGroup: HomeScreenGroup) {

    
    this.headersParams =
    {
      "Authorization": "Bearer bd5793a910a407ac9960e68a947d320a",      
      "Content-Type": "application/json",
      "Accept": "application/vnd.vimeo.*+json;version=3.4",
         
    };
    this.options = {
      headers: this.headersParams
    }
    return this.http.get(this.vimeoURl + "/me"+hohomeScreenGroup.groupId,this.options)
  }

  getAllVideos()  {

    this.options = {
    headers: this.headersParams
  }
  return  this.http.get(this.apiurl + '/videos')      

   };
}
