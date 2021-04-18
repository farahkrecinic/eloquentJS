//direct from teacher

var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  
  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  var roadGraph = buildGraph(roads);

  var VillageState = class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address, status: "pickedUp"};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }
// let first = new VillageState(
//     "Post Office",
//     [{place: "Shop", address: "Alice's House", status: "waiting"}, {place: "Marketplace", address: "Bob's House", status: "waiting"}]
// );
// let next = first.move("Alice's House");
// console.log(next.place);
// console.log(next.parcels);
// let nextNext = next.move("Bob's House");
// console.log(nextNext.place);
// console.log(nextNext.parcels);

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    let startingPlace = "Post Office";
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      let status = "waiting";
      do {
        place = randomPick(Object.keys(roadGraph));
        status = (place == startingPlace) ? "pickedUp" : "waiting";
      } while (place == address);
      parcels.push({place, address, status});
    }
    return new VillageState(startingPlace, parcels);
  };

let fiveParcels = VillageState.random();
console.log(fiveParcels.parcels);
console.log(fiveParcels.place);
//console.log(first.parcels);
console.log('-------------------------------------------')

function runRobot(state, robotFunc, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robotFunc(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moving to ${action.direction}`);
      console.log(`with ${state.parcels.filter(p => p.status=="pickedUp").length} of ${state.parcels.length} parcels to deliver`);
    }
  }

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }

//   console.log(randomPick(roads.map(r => r.split("-"))));
//   console.log(randomRobot(first));
//runRobot(first, randomRobot);
//runRobot(fiveParcels, randomRobot);
  
 var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];
  
  function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

 // runRobot(fiveParcels, routeRobot, mailRoute);
  
  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }

  //console.log(findRoute(roadGraph,"Ernie's House", "Cabin"));
  
  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

  runRobot(fiveParcels, goalOrientedRobot, []);
