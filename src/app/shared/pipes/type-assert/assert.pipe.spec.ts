import { AssertPipe } from './assert.pipe';

describe('AssertPipe', () => {
  it('create an instance', () => {
    const pipe = new AssertPipe();
    expect(pipe).toBeTruthy();
  });
});
