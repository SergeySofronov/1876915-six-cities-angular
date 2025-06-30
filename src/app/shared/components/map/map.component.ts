import { Component, AfterViewInit, viewChild, ElementRef, input, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { ActiveIcon, DefaultIcon } from '@app/const';
import { MarkerType } from '@core/models';
import { BaseIconOptions, Icon, layerGroup, LayerGroup, Map, Marker, TileLayer } from 'leaflet';

const TEMPLATE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const ATTRIBUTION_URL = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const defaultIcon = new Icon(DefaultIcon as BaseIconOptions);
const activeIcon = new Icon(ActiveIcon as BaseIconOptions);

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit, OnDestroy, OnChanges {
  private mapInstance: Map | null = null;
  private markersLayer: LayerGroup = layerGroup();
  private readonly mapContainer = viewChild<ElementRef<HTMLDivElement>>('map');

  public center = input.required<MarkerType>();  // !!! replace to marker store state
  public className = input<string>('');
  public markers = input<MarkerType[]>([]);

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

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

    this.markersLayer.addTo(this.mapInstance);
    this.updateMarkers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.mapInstance) {
      return;
    }

    if (changes['center']) {
      this.mapInstance?.flyTo([this.center().latitude, this.center().longitude], this.center().zoom);
    }

    if (changes['markers']) {
      this.updateMarkers();
    }
  }

  private updateMarkers(): void {
    this.markersLayer.clearLayers();
    this.markers().forEach(({ id, latitude, longitude }: MarkerType) => {
      new Marker([latitude, longitude])
        .setIcon((id === this.center().id) ? activeIcon : defaultIcon)
        .addTo(this.markersLayer);
    });
  }

  ngOnDestroy(): void {
    this.mapInstance?.remove();
    this.mapInstance = null;
  }
}
