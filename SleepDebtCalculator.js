// accept a day as an argument and return the number of hours you slept that night
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 4;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

// calculating for total sleep hours
const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday');

// user prefered ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}

// testing out bottom two function above
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// sleep debt function
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    return console.log(`You got the perfect amount of sleep: ${actualSleepHours} hours`);}
  else if(actualSleepHours > idealSleepHours){
    return console.log(`You got more sleep than needed: ${actualSleepHours-idealSleepHours} hours more.`);}
  else if(actualSleepHours < idealSleepHours) {
    return console.log(`Get some rest: ${idealSleepHours-actualSleepHours} hours less.`);
  }
}

// calling sleep debt function
calculateSleepDebt()
