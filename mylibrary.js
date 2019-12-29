
function istouching(a,b)
{
if( mod(a.x,b.x) < (a.width/2 + b.width/2) && mod(a.y,b.y) < (a.height/2 + b.height/2))
{
 return true;
}
else{
return false;
}
function mod(a,b)
{
  var c;
if(a>b)
{
  c=a-b;
}
else
{
  c=b-a;
}
return c;
}
}


function bounceoff(a,b)
{
if( mod(a.x,b.x) < (a.width/2 + b.width/2) && mod(a.y,b.y) < (a.height/2 + b.height/2))
{
  a.velocityY =-1*a.velocityY;
  b.velocityY = -1*b.velocityY
}
function mod(a,b)
{
  var c;
if(a>b)
{
  c=a-b;
}
else
{
  c=b-a;
}
return c;
}
}


