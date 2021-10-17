import { TestBed } from '@angular/core/testing';

import { UnsplashHeadersInterceptor } from './unsplash-headers.interceptor';

describe('HttpHeadersInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [UnsplashHeadersInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: UnsplashHeadersInterceptor = TestBed.inject(
      UnsplashHeadersInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
