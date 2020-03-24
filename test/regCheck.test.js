
describe('Check where a registration is from' , function(){
    it('GP' , function(){
    	var regsNum = 'DC 55 YU GP'
    	var town = 'GP'
        assert.equal(true, regCheck(regsNum, town));        
    });
   it('L' , function(){
    	var regsNum ='D 153 L'
    	var town = 'L'
        assert.equal(true, regCheck(regsNum, town));        
    });
   it('MP' , function(){
    	var regsNum = 'FGT 123 MP'
    	var town = 'MP'
        assert.equal(true, regCheck(regsNum, town));        
    });

});