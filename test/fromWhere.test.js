describe('Check which town a registration number is from' , function(){
    it('CY' , function(){
    	var reg = 'CY';
        assert.equal(fromWhere(reg), 'Bellville')
    });
    it('CJ' , function(){
    	var reg = 'CJ';
        assert.equal(fromWhere(reg), 'Paarl')
    });
    it('CA' , function(){
    	var reg = 'CA';
        assert.equal(fromWhere(reg), 'Cape Town')
    });
    it('None of the above' , function(){
        var reg = 'CL';
        assert.equal(fromWhere(reg), 'Some other place!')
    });
});