describe('How many items over 20' , function(){
	it('pears & bananas' , function(){
	var item = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'pears', 'qty' : 37}, {'name' : 'bananas', 'qty' : 27}]);        
	});

	it('apples and kiwi' , function(){
	var item = [
    {name : 'apples', qty : 35},
    {name : 'pears', qty : 15},
    {name : 'bananas', qty : 10},
    {name : 'kiwi', qty : 21},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'apples', 'qty' : 35}, {'name' : 'kiwi', 'qty' : 21}]);        
	});
  });