function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    let robo1 = [];
    let robo2 = [];
    for (let x = 0; x<100; x++){
        let xParcelsState = VillageState.random(Math.ceil(Math.random() * 20)); //Math.ceil(Math.random() * 20)
        //  console.log(xParcelsState.parcels);
        //  console.log('-----------------------------------------------------');
        robo1.push(runRobot(xParcelsState, robot1, memory1));
        robo2.push(runRobot(xParcelsState, robot2, memory2))
    }
    //console.log(robo1, robo2);
    console.log(Math.floor(robo1.reduce((a,b) => a+b, 0)/robo1.length), Math.floor(robo2.reduce((a,b) => a+b, 0)/robo2.length));
  }
  
  compareRobots(myRobot, [], lazyRobot, []);