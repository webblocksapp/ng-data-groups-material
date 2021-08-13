import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatTextInputComponent } from './mat-text-input.component';

@NgModule({
  declarations: [MatTextInputComponent],
  imports: [CommonModule, BrowserModule, MatInputModule],
  exports: [MatTextInputComponent],
})
export class MatTextInputModule {}
