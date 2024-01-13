import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dailoguebox',
  templateUrl: './dailoguebox.component.html',
  styleUrls: ['./dailoguebox.component.scss']
})
export class DailogueboxComponent {
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: {
      ShopKeeperName: any; data: {}
      TenantId:any
}) { }
  
  ngOnInit() {
    
    












  }

}
