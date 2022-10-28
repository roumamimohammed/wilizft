function Create2DArray(rows,columns) {
    var x = new Array(rows);
    for (var i = 0; i < rows; i++) {
        x[i] = new Array(columns);
    }
    return x;
 }
 var arr = Create2DArray(60,60);
  arr[0][0]="Diamond sushi";
  arr[0][1]=70;
  arr[1][0]="Ringoti";
  arr[1][1]=30;
  arr[2][0]="Diag";
  arr[2][1]=20;
  arr[3][0]="maki";
  arr[3][1]=70;
  arr[4][0]="zushi";
  arr[4][1]=30;
  arr[5][0]="shi";
  arr[5][1]=20;
function buy(i){
    var name = arr[i][0];
    var price = arr[i][1];
    var x = document.getElementById("bill");
    console.log(x);

    x.value=name + " " + price + "$";
    total += price;
}
function Total(){
    var t = document.getElementById("total");
    t.innerText = total + "$";
}
