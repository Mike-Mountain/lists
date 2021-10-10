import { BaseModel } from '../models/base.model';
import { EntityState } from '@datorama/akita';

export interface UnsplashState extends EntityState<Unsplash> {}

export class Unsplash extends BaseModel {
  color: string;
  description: string;
  urls: UnsplashUrls;
  links: UnsplashLinks;
  user: string; // user.name
  portfolio: string; // user.portfolio_url || user.instagram_username
  location: string; // location.name

  constructor(params: any) {
    super(params);
    this.color = params.color;
    this.description = params.description;
    this.urls = new UnsplashUrls(params.urls);
    this.links = new UnsplashLinks(params.links);
    this.user = params.user.name;
    this.portfolio =
      params.user.portfolio_url || params.user.instagram_username;
    this.location = params.location.name;
  }
}

export class UnsplashUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;

  constructor(params: UnsplashUrls) {
    this.raw = params.raw;
    this.full = params.full;
    this.regular = params.regular;
    this.small = params.small;
    this.thumb = params.thumb;
  }
}

export class UnsplashLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;

  constructor(params: UnsplashLinks) {
    this.self = params.self;
    this.html = params.html;
    this.download = params.download;
    this.download_location = params.download_location;
  }
}
