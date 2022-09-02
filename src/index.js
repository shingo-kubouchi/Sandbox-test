// 変数
// var
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";

// // let val2 = "let変数を再宣言";

// const
// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

const val4 = {
  name: "たろう",
  age: 26,
};
val4.name = "じろう";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

// テンプレート文字列
const name2 = "たろう";
const age2 = 26;

const message1 = "私の名前は" + name2 + "です。年齢は" + age2 + "です。";
console.log(message1);

const message2 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(message2);

// アロー関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

// 分割代入
const myProfile = {
  name3: "たろう",
  age3: 26,
};
const message3 = `名前は${myProfile.name3}です。年齢は${myProfile.age3}歳です。`;
console.log(message3);

const { name3, age3 } = myProfile;
const message4 = `名前は${name3}です。年齢は${age3}歳です。`;
console.log(message4);

const myProfile2 = ["たろう", 26];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message5);

const [name4, age4] = myProfile2;
const message6 = `名前は${name4}です。年齢は${age4}歳です。`;
console.log(message6);

// デフォルト値
const sayHello = (name5 = "ゲストさん") =>
  console.log(`こんにちは！${name5}さん!`);
sayHello("たろう");
sayHello();

// スプレッド構文
// 1.配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num3, num4) => console.log(num3 + num4);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 2.まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num5, num6, ...arr3] = arr2;
console.log(num5);
console.log(num6);
console.log(arr3);
console.log(...arr3);

// 3.配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);

arr7[3] = 100;
console.log(arr7);
console.log(arr5);

// map,filterの配列処理
const nameArr = ["田中", "山田", "佐藤"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は、${nameArr[index]}です`);
}

// const nameArr2 = nameArr.map((name6) => {
//   return name6;
// });
// console.log(...nameArr2);

nameArr.map((name7, index) =>
  console.log(`${index + 1}番目は、${name7}です。`)
);

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num7) => {
  return num7 % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name8) => {
  if (name8 === "田中") {
    return name8;
  } else {
    return name8 + "さん";
  }
});
console.log(newNameArr);

// 三項演算子
const num8 = 1300;
console.log(num8.toLocaleString());

const formattedNum =
  typeof num8 === "number" ? num8.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num9, num10) => {
  return num9 + num10 > 100 ? "100を超えています" : "許容範囲です";
};
console.log(checkSum(50, 60));

// 論理演算子
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("１か２はtrueになります");
}
if (flag1 && flag2) {
  console.log("１か２はtrueになります");
}

// ||は左側がfalseなら右側を返す
const num11 = null;
const fee = num11 || "金額未設定です。";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num12 = 100;
const fee2 = num12 && "なにか設定されました";
console.log(fee2);
