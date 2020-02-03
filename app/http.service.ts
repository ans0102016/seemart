import { HttpClient } from '@angular/common/http';

export class HttpService {
    constructor(private http: HttpClient) { }

    httpPost(url, {}){
        return this.http.post(url, { name: "Ameet"});
    }

    sendEmail(url, data) {
        return this.http.post(url, data);
    }
}