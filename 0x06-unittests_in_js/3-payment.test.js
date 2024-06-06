const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('', () => {
  it('check if no.s rounded with spies', () => {
    const calcNumbSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 3);
    expect(calcNumbSpy.calledOnce).to.be.true;
    expect(calcNumbSpy.calledWith('SUM', 1, 3)).to.be.true;
    calcNumbSpy.restore();
  });
});
