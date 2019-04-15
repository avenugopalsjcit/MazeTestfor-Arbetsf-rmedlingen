// input maze
var matrix = [
  ["f", "f", "f", "f"],

  ["t", "t", "f", "t"],

  ["f", "f", "f", "f"],

  ["f", "f", "f", "f"]
];

var visited = [[], [], [], []];

// Find shortest path from source (0, 0) to
// destination (3, 0)
Search(matrix, 0, 0, 3,3 , visited);





//Method for Verification
function ValidValues(matrix, visited, row, col,rowSize,columnSize) {
 
  
  return (
    row >= 0 &&
    row <= rowSize &&    //change made
    col >= 0 &&
    col < columnSize &&
    matrix[row][col] == "f" &&
    !visited[row][col]
  );
  
}





//Main method.
function Search(matrix, sourceX, sourceY, destinationX, destinationY, visited) {
  var queue = [];
  var rowSize = 4;
  var columnSize = 4;
  //put value on end of queue
  visited[sourceX][sourceY]= true;
  queueData = { sourceX: sourceX, sourceY: sourceY, distance: 0 };
  queue.push(queueData);
  //assign some max value
  var minimumdistance = 1000;
  while (queue.length != 0) {
    //movements up down left right
    var row = [-1, 0, 0, 1];
    var col = [0, -1, 1, 0];
    var queueValue = queue.shift();
    sourceX = queueValue.sourceX;
    sourceY = queueValue.sourceY;
    dist = queueValue.distance;
   
    if (sourceX == destinationX && sourceY == destinationY) {
      minimumdistance = dist;
      break;
    }
    for (var index = 0; index < 4; index++) {
     
      if (
        ValidValues(matrix, visited, sourceX + row[index]>=rowSize?rowSize-1:sourceX + row[index], sourceY + col[index]>=columnSize?columnSize-1:sourceY + col[index],rowSize,columnSize)
      ) {
        
        visited[sourceX + row[index]][sourceY + col[index]] = true;
       
        queue.push({
       sourceX:sourceX + row[index],
          sourceY: sourceY + col[index],
          distance: dist + 1
        });
      }
    }
  }
  if (minimumdistance != 1000) {
    console.log(
      "The shortest path from source to destination " +
        "has length " +
        minimumdistance
    );
  } else {
    console.log("Destination can't be reached from source");
  }
}
