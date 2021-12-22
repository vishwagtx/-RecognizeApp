import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IdExtractService {
  constructor(private http: HttpClient) {}

  public extactData(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);

    return this.http.post(
      `${environment.uploadApi}/ExtractIdCardData/Upload`,
      formData
    );
  }
}
