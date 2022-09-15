function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let orbital = [];
  for(let i = 0; i < arr.length; i++){
    let t = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM));
  console.log(t)
    orbital.push({
      "name": arr[i].name,
      "orbitalPeriod": t
    });
  }
  console.log(orbital)
  return orbital;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])