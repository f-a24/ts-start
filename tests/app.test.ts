import app from '../src/ts/app';

describe('App', () => {
  test('<App />', () => {
    const h1 = app('Hello World!');
    expect(h1.tagName).toBe('H1');
    expect(h1.innerText).toBe('Hello World!')
  });
});
