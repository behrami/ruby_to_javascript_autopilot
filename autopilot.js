function get_new_car(){
  var newCar = {city: 'Toronto',
                passengers: 0,
                gas: 100,
                };

  return newCar;
}

// wierd newCarList
function add_car(cars, newCar){
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length;
}

function pick_up_passenger(car){
  car['passengers'] += 1;
  car['gas'] -= 10;
  return "Picked up passenger. Car now has "+ car['passengers'] + " passengers.";
}

function get_destination(car){
  if (car['city'] == 'Toronto'){
      return 'Mississauga';
  }
  else if (car['city'] == 'Mississauga'){
    return 'London';
  }
  else if (car['city'] == 'London'){
    return 'Toronto';
  }
}

function fill_up_gas(car){
  old_gas = car['gas'];
  car['gas'] = 100;
  return "Filled up to " + get_gas_display(car['gas']) + " on gas from " +  get_gas_display(old_gas)+".";
}

function get_gas_display(gas_amount){
    return gas_amount;
}

function drive(car, city_distance){
  if (car['gas'] < city_distance){
    return fill_up_gas(car);
  }

  car['city'] = get_destination(car);
  car['gas'] -= city_distance;
  return "Drove to "+ car['city'] +". " +"Remaining gas:"+  get_gas_display(car['gas'])+".";
}

function drop_off_passengers(car){
  previous_passengers = car['passengers'];
  car['passengers'] = 0;
  return "Dropped off "+ previous_passengers +" passengers.";
}

function act(car){
  distance_between_cities = 50;

  if (car['gas'] < 20){
    return fill_up_gas(car);
  }

  else if (car['passengers'] < 3){
    return pick_up_passenger(car);
  }

  else{
    if (car['gas'] < distance_between_cities){
      return fill_up_gas(car);
    }

    drove_to = drive(car, distance_between_cities);
    passengers_dropped = drop_off_passengers(car);
    return drove_to + passengers_dropped;
  }

}

function command_fleet(cars){
  for(i=0; i<cars.length; i++){
    action = act(car);
    console.log("Car "+ (i + 1) +": " + action);
  }
  console.log("---");
}

function add_one_car_per_day(cars, num_days){
  for(i=0; i<num_days; i++){
    new_car = get_new_car;
    console.log(add_car(cars, new_car));
    command_fleet(cars);
  }
}

//------------------------------------------
var car = {passengers: 1, gas: 100, city: 'Mississauga'};
var cars = [];
add_one_car_per_day(cars, 10);

console.log(get_new_car());
console.log(add_car(['test','car'],'aligator'));

console.log(pick_up_passenger(car));

console.log(get_destination(car));
console.log(fill_up_gas(car));

console.log(drive(car, 50));
console.log(drop_off_passengers(car));

console.log(act(car));
command_fleet(cars);
