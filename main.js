// Can you fix all the errors in this file?
// When it works it should render:
// User: Neil Armstrong has been to 3 places

var user = {
  name: {first: 'Neil', last: 'Armstrong'},
  bornOn: new Date('December 12, 1979')
};

user['occupation'] = 'spaceman';

var destinations = [];

destinations.push('Moon', 'Mars', 'Jupiter');

user.destinations = destinations;

var message = 'User: ' + user.name.first + ' ' + user.name.last + ' has been to ' + user.destinations.length + ' places';

document.write(message);
