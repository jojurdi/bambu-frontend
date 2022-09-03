import { Component, OnInit, Input, Directive, ElementRef } from '@angular/core';
import { NewItem } from '../../core/interfaces/new-data.interfase';



@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Input() newitem: NewItem

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

  ngOnInit(): void {
  }

}