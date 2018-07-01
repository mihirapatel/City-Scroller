  var messages = [
  'Sala Thai', 
  'The Habit', 
  'Bombay Pizza House',
  'La Pinata',
  'Le Papillon',
  'Pacific Commons',
  'Newpark Mall',
  'Fremont Hub',
  'Union Landing Shopping Center',
  'AMC Newpark',
  'Century Theatres at Pacific Commons',
  'Cine Grand',
  'Century Theatres at Union Landing',
  'Broadway West Theatre',
  'Mission Peak',
  'dd',
  'widthwrw',
  'dsjhfsal',
  ',jfh',
  ]
    message = messages[Math.floor(Math.random() * messages.length)];
$(document.body).append(message);

function randomThing () {
  alert(message)
}
randomThing();