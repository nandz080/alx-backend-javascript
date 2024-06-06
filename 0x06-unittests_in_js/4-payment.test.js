const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('', () => {
  const consoleSpy = sinon.spy(console, 'log');
  it('checking if numbers round with spies and stubs', () => {
    sendPaymentRequestToApi(100, 20);
    const calcNumbSpy = sinon.stub(Utils, 'calculateNumber');
    calcNumbSpy.withArgs('SUM', 100, 20).returns(120);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    consoleSpy.restore();
    calcNumbSpy.restore();
  });
});
