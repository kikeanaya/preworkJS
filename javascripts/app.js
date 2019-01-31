var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var commands=["r","f","f","f","r","f","f","r","f","r","b"];

function turnLeft(rover){
  switch(rover.direction){
    case ("N"):
      rover.direction="W";
      break;

    case ("W"):
      rover.direction="S";
      break;

    case ("S"):
      rover.direction="E";
      break;

    case ("E"):
      rover.direction="N";
      break;
    }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){
    case ("N"):
      rover.direction="E";
      break;
    
    case ("E"):
      rover.direction="S";
      break;

    case ("S"):
      rover.direction="W";
      break;

    case ("W"):
      rover.direction="N";
      break;
    }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction){
    case ("N"):
      if(rover.y - 1 >= 0){
        rover.y -=1;
        console.log("(" + rover.x + ", " + rover.y + (")"));
      }
      else{
        console.log("Cannot move in that direction! You would run out of bounds!");
      }
      break;

    case ("E"):
      if(rover.x + 1 <= 9){
      rover.x +=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      }
      else{
        console.log("Cannot move in that direction! You would run out of bounds!");
      }
      break;
    
    case ("S"):
      if(rover.y + 1 <= 9){
      rover.y +=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      }
      else{
        console.log("Cannot move in that direction! You would run off the grid!");
      }
      break;

    case ("W"):
      if(rover.x - 1 >= 0){
        rover.x -=1;
        console.log("(" + rover.x + ", " + rover.y + (")"));
      }
      else{
        console.log("Cannot move in that direction! You would run off the grid!");
      }
      break;
  }
  console.log("moveForward was called")
}

function moveBackward(rover){
  switch(rover.direction){
    case ("N"):
      rover.y +=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      break;

    case ("E"):
      rover.x -=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      break;
    
    case ("S"):
      rover.y -=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      break;

    case ("W"):
      rover.x +=1;
      console.log("(" + rover.x + ", " + rover.y + (")"));
      break;
  }
  console.log("moveBackward was called")
}

function receiveCommands(commands){
  for(var i=0;i<commands.length;i++){
    if(commands[i] === "f"){
      rover.travelLog.push(rover.x);
      rover.travelLog.push(rover.y);
      moveForward(rover);
    }
    if(commands[i] === "b"){
      rover.travelLog.push(rover.x);
      rover.travelLog.push(rover.y);
      moveBackward(rover);
    }
    if(commands[i] === "r"){
      turnRight(rover);
    }
    if(commands[i] === "l"){
      turnLeft(rover);
    }
  }
  console.log(rover.travelLog);
}

function commandsVerification(commands){
  for(var i=0;i<commands.length;i++){
    if(commands[i] !== "f" || commands[i] !== "b" || commands[i] !== "r" || commands[i] !== "l"){
      console.log("One of your commands was invalid. The only possible commands are the following: f to move forward, b to move backward, r to turn left and r to turn right");
    }
  }
  receiveCommands(commands);
}