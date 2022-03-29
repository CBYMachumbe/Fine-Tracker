const app = require('../../src/app');

describe('\'fine-posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('fine-posts');
    expect(service).toBeTruthy();
  });
});
