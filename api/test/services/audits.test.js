const app = require('../../src/app');

describe('\'audits\' service', () => {
    it('registered the service', () => {
        const service = app.service('audits');
        expect(service).toBeTruthy();
    });
});
