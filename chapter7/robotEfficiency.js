function myRobot({place, parcels}, route) { 
    let allDests = [];
    // console.log('-----------------------------------------------------');
    // console.log(parcels);
    // console.log(place);
    for (let parcel of parcels){
        if (parcel.place != place){
            allDests.push(parcel.place);
        } else { allDests.push(parcel.address); }
    }
    //console.log(allDests);
    let closestRoute = allDests.map(x => findRoute(roadGraph, place, x)).reduce((x, y) => (x.length < y.length) ? x : y);
    return {direction: closestRoute[0]};

}

//let xParcelsState = VillageState.random(); //Math.ceil(Math.random() * 20)
// console.log(xParcelsState.parcels);
// console.log('-----------------------------------------------------');
//runRobot(xParcelsState, myRobot, []);

//teacher's solution
function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
  
      // This determines the precedence a route gets when choosing.
      // Route length counts negatively, routes that pick up a package
      // get a small bonus.
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
  
    return {direction: route[0], memory: route.slice(1)};
  }