import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Topic } from 'src/app/shared/models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = `${ environment.apiURL }/topic`;

  constructor(private http: HttpClient) {}

  newTopic(topic: Topic) {
    return this.http.post(this.apiUrl, { data: topic } );
  }

  editTopic(topic: Topic) {
    const url = `${this.apiUrl}/${topic._id}`;
    return this.http.put(url, { data: topic});
  }

  getTopics(page: number = 1, limit: number = 10) {
    const url = `${ this.apiUrl }/?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }

  deleteTopic(topicID: string){
    const url = `${ this.apiUrl }/${ topicID }`;
    return this.http.delete(url);
  }

  activateTopic(topicID:string){
    const url = `${ this.apiUrl }/${ topicID }/activate`
    return this.http.put(url, {});
  }
}
