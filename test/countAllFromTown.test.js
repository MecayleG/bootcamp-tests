describe('Count all from' , function(){
	it('Town1' , function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
	assert.deepEqual(fromStellies, 3)
        
	});
	it('Town2' , function(){
    var fromBellville = countAllFromTown('CJ 124,CY 567,CL 345, CF 456,CJ 851','CJ'); 
    assert.deepEqual(fromBellville, 1)
        
	});
  });