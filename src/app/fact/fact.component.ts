import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactModel } from '../models/fact.model'; 
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  private fact: FactModel;

  constructor(private activatedRoute: ActivatedRoute, 
              private _store: Store<Map<string, FactModel>>)
            { }

  ngOnInit() {
    const factId = this.activatedRoute.snapshot.paramMap.get('id');
    this._store.subscribe((state: any) => {
      this.fact = state.facts[factId];
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
