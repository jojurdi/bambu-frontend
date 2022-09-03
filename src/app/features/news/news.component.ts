import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewService } from '../../core/services/new.service';
import { NewItem, ArticleRes } from '../../core/interfaces/new-data.interfase';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


    formFilter: FormGroup;

    articlesResponse: ArticleRes;
    news: NewItem[] = [];

    constructor(
        private fb: FormBuilder,
        private newService: NewService
    ) { }

    ngOnInit(): void {
        this.formFilter = this.fb.group({
            category: ['business'],
            country: ['mx'],
        });

        this.newService
            .getNews(this.formFilter.value.category, this.formFilter.value.country)
            .subscribe((articleRes) => {
               this.news = articleRes.articles;
            });
    }


    onChange() {
        this.newService
            .getNews(this.formFilter.value.category, this.formFilter.value.country)
            .subscribe((articleRes) => {
                 this.news = articleRes.articles;
            });
    }

}