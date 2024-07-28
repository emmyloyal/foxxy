function quadratic(){
    let a = 1;
    let b =-4;
    let c =4;
    const x1 =(-b+Math.sqrt(b*b -4*a*c))/(2*a);
    const x2 =(-b-Math.sqrt(b*b -4*a*c))/(2*a);
    console.log(x1,x2);
}
quadratic()