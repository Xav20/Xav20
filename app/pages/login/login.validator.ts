import {Control} from '@angular/common';

export class LoginValidator {

    static checkUsername(control: Control){

        return new Promise(resolve => {

            if(control.value.toLowerCase() === "admin"){
                resolve({
                    "You can't log in as administrator": true
                });
            } else {
                resolve(null);
            }

        });

    }
    
}