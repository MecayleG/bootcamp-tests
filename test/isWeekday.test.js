
describe('is it a Weekday?' , function(){
	it('it is' , function(){
    var day = "Monday";
    assert.equal(isWeekday(day), true);        
	});

    it('it is not' , function(){
    	var day = "Saturday";
        assert.equal(isWeekday(day), false);
		});
    });