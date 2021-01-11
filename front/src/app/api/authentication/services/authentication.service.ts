import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserInterfaces } from '../../models/user';

@Injectable()
export class AuthenticationService {
  public URL: string = environment.baseURL + environment.prefixURL + 'login';

  private subjectUser$: BehaviorSubject<UserInterfaces.Receive.User> = new BehaviorSubject(
    null
  );
  private subjectLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  public login(
    credentials: UserInterfaces.Send.Login
  ): Observable<UserInterfaces.Receive.User> {
    return this.http
      .post<UserInterfaces.Receive.User>(this.URL, credentials)
      .pipe(
        tap((user: UserInterfaces.Receive.User) => {
          localStorage.setItem('token', user.token);
          this.subjectLogged$.next(true);
          this.subjectUser$.next(user);
        })
      );
  }

  public isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (token && !this.subjectLogged$.value) {
      return this.checkToken();
    }
    return this.subjectLogged$.asObservable();
  }

  public checkToken(): Observable<boolean> {
    return this.http.get<UserInterfaces.Receive.User>(`${URL}/session`).pipe(
      tap((user: UserInterfaces.Receive.User) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.subjectLogged$.next(true);
          this.subjectUser$.next(user);
        }
      }),
      map((user: UserInterfaces.Receive.User) => !!user),
      catchError(() => {
        this.logout();
        return of(false);
      })
    );
  }

  public getUser(): Observable<UserInterfaces.Receive.User> {
    return this.subjectUser$.asObservable();
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.subjectLogged$.next(false);
    this.subjectUser$.next(null);
  }
}
