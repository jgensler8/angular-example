import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Environment {
  environment() {
    return environment;
  }
}