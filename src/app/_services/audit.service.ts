import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Audit } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuditService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Audit[]>(`${config.apiUrl}/audit`);
    }

}