import { Component, AfterViewInit, viewChild, ElementRef, input, OnDestroy } from '@angular/core';
import { MarkerType } from '@core/models';
import { LayerGroup, Map, TileLayer } from 'leaflet';

const TEMPLATE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const ATTRIBUTION_URL = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private mapInstance: Map | null = null;
  private markersLayer: LayerGroup | null = null;
  private readonly mapContainer = viewChild<ElementRef<HTMLDivElement>>('map');

  public center = input.required<MarkerType>();  // !!! replace to marker store state
  public className = input<string>('');
  public markers = input<MarkerType[]>([]);

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    if (this.mapInstance) {
      return;
    }

    const container = this.mapContainer();
    if (!container) {
      return;
    }

    const { latitude, longitude, zoom } = this.center();

    this.mapInstance = new Map(container.nativeElement, {
      center: [latitude, longitude],
      zoom,
      zoomControl: true
    }).addLayer(new TileLayer(TEMPLATE_URL, { attribution: ATTRIBUTION_URL }));
  }



  ngOnDestroy(): void {
    this.mapInstance?.remove();
    this.mapInstance = null;
  }
}
