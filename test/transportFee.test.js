describe('Calculate the cost of shifts' , function(){
    it('Morning' , function(){
    	var shift = 'morning';
        assert.deepEqual(transportFee(shift), 'R20')
    });
    it('Afternoon' , function(){
    	var shift = 'afternoon';
        assert.deepEqual(transportFee(shift), 'R10')
    });
    it('Evening' , function(){
    	var shift = 'evening';
        assert.deepEqual(transportFee(shift), 'free')
    });

});
