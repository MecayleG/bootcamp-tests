describe('Items Over' , function(){
	it('threshold 25' , function(){
		var listThreshold = 25;
		var listItem = [
			{name:"apples",qty:15},
			{name:"pears",qty:2},
			{name:"bananas",qty:27},
			{name:"apples",qty:21}
						];
    assert.deepEqual(findItemsOver(listItem, listThreshold), [{'name':'bananas', 'qty':27}]);        
	});

	it('threshold 30' , function(){
		var listThreshold = 30;
		var listItem = [
			{name:"apples",qty:15},
			{name:"pears",qty:2},
			{name:"bananas",qty:27},
			{name:"apples",qty:35}
						];
    assert.deepEqual(findItemsOver(listItem, listThreshold), [{name:"apples",qty:35}]);        
	});
  });