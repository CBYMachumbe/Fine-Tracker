const app = require('../../src/app');

describe('\'fine-payments\' service', () => {
  it('registered the service', () => {
    const service = app.service('fine-payments');
    expect(service).toBeTruthy();
  });
});
