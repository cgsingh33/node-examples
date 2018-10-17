var rect={
  perimeter: (x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
};

function solveRect(l,b){
  console.log("solving area and perimeter of rectangle where l= "+l+"and b= "+b);

  if(l<=0 || b<=0){
    console.log("check the dimensions");
  }
  else{
    console.log("the area is "+ rect.area(l,b));
    console.log("the perimeter is "+ rect.perimeter(l,b));
  }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-2,4);
