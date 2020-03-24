describe('Calculate total cost for phone bill' , function(){
	it('Bill 1' , function(){
		var bill = 'call, sms, call, sms, sms'
    assert.equal(totalPhoneBill(bill), 'R7.45');        
	});
	it('Bill 2' , function(){
		var bill = 'call, sms, call, sms, sms, call, call, sms'
    assert.equal(totalPhoneBill(bill), 'R13.60');        
	});
  });