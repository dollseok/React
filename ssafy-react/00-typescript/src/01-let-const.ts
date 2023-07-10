// --------------------------------------------------------------------------
// ECMAScript 2015 (v6)
// let, const (block scope)

{
  for (let i = 0, numbers = [3, 6, 9, 12]; i < numbers.length; ++i) {
    // ...
    console.log(i); //
  }

  // console.log(i); // 여기서는 오류가 나오게 됨 -> let이라서 -> var로 고치면 괜찮아짐
  console.log('이은석 수업 듣는중')
}
