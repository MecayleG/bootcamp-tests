describe('The greet function' , function(){
    it('it should greet Mecayle' , function(){
        assert.equal(greet('Mecayle'), 'Hello, Mecayle');

    });
    it('it should greet Meeks' , function(){
        assert.equal(greet('Meeks'), 'Hello, Meeks');

    });

});