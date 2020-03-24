describe('Count all registrations from Paarl' , function(){
	it('list 1' , function(){
		var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
    assert.equal(countAllPaarl(paarlReg), 3);        
	});
	it('list 2' , function(){
		var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CL 345, CJ 123, MP 546, CJ 666";
    assert.equal(countAllPaarl(paarlReg), 4);        
	});
  });