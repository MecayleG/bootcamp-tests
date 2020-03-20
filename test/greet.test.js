describe('Greet' , function(){
    it('Mecayle' , function(){
        assert.equal(greet('Mecayle'), 'Hello, Mecayle');

        assert.deepEqual(greet('Mecayle'), 'Hello, Mecayle');
    });

});