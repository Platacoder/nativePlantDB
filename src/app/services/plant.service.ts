import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Plant } from "../models/plant.model";
import { Observable } from "rxjs";


@Injectable()
export class PlantService {
    selectedPlant: Plant;
    plants: Plant[];
    readonly baseURL: 'localhost:8000/plants';

    constructor(private _http: HttpClient) {}

    getPlants(): Observable<Object> {
        return this._http.get(this.baseURL)
    }

}