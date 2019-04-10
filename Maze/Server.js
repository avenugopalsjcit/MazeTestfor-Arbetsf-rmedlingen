// input maze
var matrix = [
  ["f", "f", "f", "f"],

  ["t", "t", "f", "t"],

  ["f", "f", "f", "f"],

  ["f", "f", "f", "f"]
];

var visited = [[true,false,false,false], [false,false,false,false], [false,false,false,false], [false,false,false,false]];

// Find shortest path from source (0, 0) to
// destination (3, 0)
Search(matrix, 0, 0, 0,0 , visited);





//Method for Verification
function ValidValues(matrix, visited, row, col) {
  var rowSize = 3;
  var columnSize = 3;
  // if(row=>3)
  // return true;
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
  if( destinationX==3&&destinationY==3)
  destinationY=1;
  if( destinationX==2&&destinationY==3)
  destinationY=1;
  if( destinationX==0&&destinationY==3)
  {
  destinationX=1;
  destinationY = 2;
  }

  //put value on end of queue
  visited[sourceX][sourceY]= true;
  queueData = { sourceX: sourceX, sourceY: sourceY, distance: 0 };
  queue.push(queueData);
  //assign some max value
  var minimumdistance = 1000;
  while (queue != null) {
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
      // check if it is possible to go to position
      // (i + row[k], j + col[k]) from current position
      //console.log("incex"+index+"  source  "+sourceX+"yyyy"+sourceY);
     
      if (
        ValidValues(matrix, visited, sourceX + row[index], sourceY + col[index])
      ) {
        // mark next cell as visited and enqueue it
        // if(sourceX >=3)
        // {
        // sourceX=2;//index=3;
        // }
        
       // console.log(index+"    "+sourceX);
        visited[sourceX + row[index]][sourceY + col[index]] = true;
       
        queue.push({
          sourceX: sourceX + row[index],
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
