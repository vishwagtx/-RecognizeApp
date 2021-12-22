import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdExtractService } from './services/id-extract.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private idCardService: IdExtractService) {}
  title = 'RecognizeApp';

  errors$: Observable<string | null> = of(null);
  josnResult: string | null = null;

  upload(): void {
    this.errors$ = of(null);
    this.josnResult = null;

    const fileController = document.getElementById(
      'fileUpload'
    ) as HTMLInputElement;

    const file = fileController.files?.length ? fileController.files[0] : null;

    if (file)
      this.idCardService
        .extactData(file)
        .pipe(debounceTime(1000))
        .subscribe(
          (result) => {
            this.josnResult = result;
          },
          (error) => {
            this.errors$ = of(error.error);
          }
        );
  }
}
