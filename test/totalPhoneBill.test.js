describe('Calculate total' , function(){
	it('cost' , function(){
		var bill = 'call, sms, call, sms, sms'
    assert.equal(totalPhoneBill(bill), 'R7.45');        
	});
  });