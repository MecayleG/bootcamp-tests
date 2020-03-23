var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"
describe('Count all from' , function(){
	it('Paarl' , function(){
    assert.equal(countAllPaarl(paarlReg), 3);        
	});
  });