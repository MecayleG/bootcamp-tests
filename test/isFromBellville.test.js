describe('Is registration from Bellville' , function(){
    it('True' , function(){
    	var name = ["CY 123","CJ 123", "CY 568", "CA 378"]
        assert.equal(true, isFromBellville('CY'));
         });
    it('False' , function(){
    	var name = ["CY 123","CJ 123", "CY 568", "CA 378"]
        assert.equal(false, isFromBellville('CJ'));
	 });

});