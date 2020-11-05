import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

const materialComponents = [
  MatButtonModule,
  MatTooltipModule,
  MatMenuModule  
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports:[ 
    materialComponents
  ]
})
export class MaterialModule { }
