import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Plant } from "../models/plant.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
}) 
export class PlantService {
    selectedPlant: Plant;
    plants: Observable<Plant[]>;
    readonly baseURL: string = 'http://localhost:8000/plants';

    constructor(private _http: HttpClient) {}

    getPlants(): Observable<Plant[]> {
        return this._http.get(this.baseURL) as Observable<Plant[]>;
    }

}