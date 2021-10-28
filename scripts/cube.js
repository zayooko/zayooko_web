let cube1 = function(cube) 

{
    
    cube.setup = function() 
    {
        cube.createCanvas(250, 250, cube.WEBGL);
    }
    
    
    cube.draw = function() 
    {
        cube.clear();
        cube.normalMaterial();
        cube.push();
        cube.rotateZ(cube.frameCount * 0.01);
        cube.rotateX(cube.frameCount * 0.01);
        cube.rotateY(cube.frameCount * 0.01);
        cube.box(80, 80, 80);
        cube.pop();
        cube.push();
    }

};

new p5(cube1, 'cubeDiv');
  

