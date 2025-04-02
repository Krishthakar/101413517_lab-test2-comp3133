import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Fetches the full list of missions
  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  // Fetches missions filtered by launch year
  getMissionsByYear(year: string): Observable<Mission[]> {
    const url = `${this.baseUrl}?launch_year=${year}`;
    return this.http.get<Mission[]>(url);
  }

  // Retrieves a specific mission using its flight number
  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }
}
