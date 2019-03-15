$.ajax({
	url: 'https://randomuser.me/api/',
	url: 'https://randomuser.me/api/?results=5000',
	url: 'https://randomuser.me/api/?password=upper,lower,1-16',
	url: 'https://randomuser.me/api/?password=CHARSETS,MIN_LENGTH-MAX_LENGTH',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});