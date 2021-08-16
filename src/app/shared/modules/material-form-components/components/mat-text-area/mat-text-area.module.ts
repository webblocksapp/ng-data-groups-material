import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTextAreaComponent } from './mat-text-area.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MatTextAreaComponent],
  imports: [CommonModule, BrowserModule, MatInputModule],
  exports: [MatTextAreaComponent],
})
export class MatTextAreaModule {}
