var number = function(busStops){
  let people = 0 
    busStops.map(stop => people = people + (stop[0]-stop[1]))
  return people
}
 
number([[5,4], [10,8], [5,0], [8,2]])