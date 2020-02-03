import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'contact-us',
    styles: ['contact-us.component.scss'],
    template: `
        <div>
            <p>&nbsp;</p>
            <h3>Contact Us</h3>
            <p>&nbsp;</p>
            <form #form="ngForm" novalidate>
                <table class="formcontrols">
                    <tr>
                        <td>
                            <label>
                                Name:
                            </label>
                        </td>
                        <td>
                            <input 
                                type="text"
                                name="fullname"
                                required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Email:
                            </label>
                        </td>
                        <td>
                            <input 
                                type="text"
                                name="email"
                                required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Say something:
                            </label>
                        </td>
                        <td>
                            <textarea 
                                name="message"
                                required>
                            </textarea>
                        </td>
                    </tr>
                </table>
                <button (click)="enquire()">Submit</button>
            </form>
        </div>
    `
})
@Injectable()
export class ContactUsComponent {

    constructor(private http: Http) { }
    
    enquire() {
        let user = {
            name: 'Seema Bhat',
            email: 'bluevictor79@gmail.com'
        }
        
        this.http.sendEmail("http://localhost:3000/sendmail", user)
        .subscribe(data => {
            let res:any = data;
            console.log("Email successfully sent");
        },
        err => {
            console.log(err);
        });

    }
}

