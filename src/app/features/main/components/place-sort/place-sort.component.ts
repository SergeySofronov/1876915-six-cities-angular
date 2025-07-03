import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit, OnDestroy, signal, model } from '@angular/core';
import { SortType } from '@app/const';
import { PlaceSortType } from '@core/models';

@Component({
  selector: 'app-place-sort',
  imports: [],
  templateUrl: './place-sort.component.html',
  styleUrl: './place-sort.component.css'
})
export class PlaceSortComponent implements OnInit, OnDestroy {

  public activeSortType = model<PlaceSortType>(SortType.Popular);
  public sortTypes = Object.entries(SortType);

  private documents = inject(DOCUMENT);
  public isSelectOpened = signal<boolean>(false);

  ngOnInit(): void {
    this.documents.body.addEventListener('click', this.documentClickHandler);
    this.documents.body.addEventListener('keydown', this.escKeyHandler);
  }

  ngOnDestroy() {
    this.documents.body.removeEventListener('click', this.documentClickHandler);
    this.documents.body.removeEventListener('keydown', this.escKeyHandler);
  }

  private documentClickHandler = () => {
    this.isSelectOpened.set(false);
  }

  private escKeyHandler = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && this.isSelectOpened()) {
      this.isSelectOpened.set(false);
    }
  }

  public handleOpenSelect = (evt: Event) => {
    evt.stopPropagation();
    this.isSelectOpened.update((prev) => !prev);
  }

  public handleSelect = ({ currentTarget }: Event) => {
    const sortType = (currentTarget as HTMLElement).dataset['sortType'];
    if (sortType !== this.activeSortType()) {
      this.activeSortType.set(sortType as PlaceSortType);
      this.isSelectOpened.set(false);
    }
  }
}

