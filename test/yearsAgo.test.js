describe('How many years ago' , function(){
    it('1976' , function(){
    	var year = 1976;
        assert.equal(yearsAgo(year), 44);    
    });
     it('1815' , function(){
    	var year = 1815;
        assert.equal(yearsAgo(year), 205);    
    });
      it('2010' , function(){
    	var year = 2010;
        assert.equal(yearsAgo(year), 10);    
    });
});