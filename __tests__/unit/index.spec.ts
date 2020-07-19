import { hello } from '../../src/index';

describe('index', () => {
  test('hello should equal world', async () => {
    expect(hello).toStrictEqual('world');
  });
});
