var max = 100;
var num = 1;
var count = 0;

while (num < max) {
  num = num * 2;
  count = count + 1;
}

alert(
  "２を掛け続けて" + max + "を超えるのに必要立った回数は" + count + "回です"
);
