var Square=function(){
    this.data=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    this.origin={
        x:0,
        y:0
    }
    this.dir=0;

};


/*判断是否能下移，以及下移的操作*/
Square.prototype.canDown=function(isValid){
    var test={};
    test.x=this.origin.x+1;
    test.y=this.origin.y;
    return isValid(test,this.data);

};
Square.prototype.down=function () {
    this.origin.x=this.origin.x+1;

};

/*判断是否能下移，以及下移的操作*/
Square.prototype.canLeft=function(isValid){
    var test={};
    test.x=this.origin.x;
    test.y=this.origin.y-1;
    return isValid(test,this.data);

};
Square.prototype.left=function () {
    this.origin.y=this.origin.y-1;

};

/*判断是否能下移，以及下移的操作*/
Square.prototype.canRight=function(isValid){
    var test={};
    test.x=this.origin.x;
    test.y=this.origin.y+1;
    return isValid(test,this.data);

};


/*判断是否能旋转以及具体的旋转操作*/
Square.prototype.canRotate=function(isValid){
    var d=(this.dir+1)%4;
    var test=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    for(var i=0;i<this.data.length;i++){
        for(var j=0;j<this.data[0].length;j++){
            test[i][j]=this.rotates[d][i][j];
        }
    }
    return isValid(this.origin,test);

};

Square.prototype.rotate=function (num) {
    if(!num){
        num=1;
    }
    this.dir=(this.dir+num)%4;
    for(var i=0;i<this.data.length;i++){
        for(var j=0;j<this.data[0].length;j++){
            this.data[i][j]=this.rotates[this.dir][i][j];
        }
    }

};
Square.prototype.right=function () {
    this.origin.y=this.origin.y+1;

};