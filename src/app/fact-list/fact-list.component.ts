import { Component, OnInit, OnDestroy } from '@angular/core';
import { FactService } from '../services/fact.service';
import { FactModel } from '../models/fact.model'; 
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ActionTypes } from '../facts.actions';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit, OnDestroy {
  private facts: Array<FactModel>;
  private factsSubscription: Subscription;

  constructor(private factService: FactService, private _store: Store<Map<string, FactModel>>) { }

  ngOnInit() {
    this.factsSubscription = this.factService.getCats()
      .subscribe((facts: Array<FactModel>) => {
        this.facts = facts;

        const factsIterator = this.facts.map((fact) => ({[fact._id]: fact}));

        this._store.dispatch({ type: ActionTypes.SET_FACTS, payload: factsIterator });
      });
  }

  ngOnDestroy() {
    this.factsSubscription.unsubscribe();
  }
}
