describe('Count all registration numbers for a specific town' , function(){
	it('Reg list 1' , function(){
    var count = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
	assert.deepEqual(countAllFromTown(count), 3)
        
	});
	it('Reg list 2' , function(){
    var count = 'CJ 124,CL 567,CL 345,CF 456,CL 851,MP 666,CL 333'; 
    assert.deepEqual(countAllFromTown(count), 4)
        
	});
  });