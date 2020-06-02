function startTime() {
  const today = new Date();
  const h24 = today.getHours();
  let h = (h24 + 24) % 12 || 12;
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  // set the clock
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;

  // reset clock after timeout
  const t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
  return i;
}

function setActivity() {
  const today = new Date();
  const hour = today.getHours();

  switch(hour) {
    case 6:
      document.getElementById('activity').innerHTML = 'Breakfast<br/>& Get Ready';
      break;
    case 7:
      document.getElementById('activity').innerHTML = 'Family Walk<br/>& Devotions';
      break;
    case 8:
      document.getElementById('activity').innerHTML = 'CHORES';
      break;
    case 9:
      document.getElementById('activity').innerHTML = 'Table Time';
      break;
    case 10:
      document.getElementById('activity').innerHTML = 'Play Break';
      break;
    case 11:
      document.getElementById('activity').innerHTML = 'Lunch &<br/>Clean Up';
      break;
    case 12:
      document.getElementById('activity').innerHTML = 'Family Walk';
      break;
    case 13: // 1pm
      document.getElementById('activity').innerHTML = 'Table Time';
      break;
    case 14: // 2pm
      document.getElementById('activity').innerHTML = 'Play Break';
      break;
    case 15: // 3pm
      document.getElementById('activity').innerHTML = 'Play Break';
      break;
    case 16: // 4pm
      document.getElementById('activity').innerHTML = 'Bunk Time';
      break;
    case 17: // 5pm
      document.getElementById('activity').innerHTML = 'Evening Chores<br/>Or Play';
      break;
    case 18: // 6pm
      document.getElementById('activity').innerHTML = 'Dinner &<br/>Clean Up';
      break;
    case 19: // 7pm
      document.getElementById('activity').innerHTML = 'Pajamas<br/>& Tidy Up';
      break;
    default:
      document.getElementById('activity').innerHTML = 'ZZZzzzz...';
  }

  // reset clock after timeout
  const t = setTimeout(setActivity, 5000);
}

function getDayOfWeek() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const today = new Date();
  const day = today.getDay();
  return days[day];
}

function getMonth() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const today = new Date();
  const month = today.getMonth();
  return months[month];
}

function getDate() {
  const today = new Date();
  return today.getDate();
}

function setCalendar() {
  const day = getDayOfWeek();
  const date = getDate();
  const month = getMonth();
  document.getElementById('day').innerHTML = day;
  document.getElementById('date').innerHTML = date;
  document.getElementById('month').innerHTML = month;
}



function runApp() {
  startTime();
  setActivity();
  setCalendar();
}
