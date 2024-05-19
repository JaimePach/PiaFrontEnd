import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail: string | null = null;

  constructor(private auth: Auth){}

  login({ email, password }: any) {
    this.ObtenerCorreo(email);
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  ObtenerCorreo(email: string){
    this.userEmail = email;
  }

  ObtenerCorreoActual():string | null{
    return this.userEmail;
  }

  logout() {
    return signOut(this.auth);
  }
    



    
}
