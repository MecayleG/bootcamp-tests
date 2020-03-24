describe('Count how many registration numbers in list' , function(){
    it('List 1' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328';
        assert.equal(3, countRegNumber(regNum));    
    });
    it('List 2' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328,MP 3535,CA 123';
        assert.equal(5, countRegNumber(regNum));    
    });
    it('List 3' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328,CA 524,CY 3657, L 568 N, GP 888';
        assert.equal(7, countRegNumber(regNum));   
    });

});