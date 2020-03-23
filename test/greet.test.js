describe('The greet function ' , function(){
    it('should greet Mecayle' , function(){
        assert.equal(greet('Mecayle'), 'Hello, Mecayle');

    });
    it('should greet Meeks' , function(){
        assert.equal(greet('Meeks'), 'Hello, Meeks');

    });

});