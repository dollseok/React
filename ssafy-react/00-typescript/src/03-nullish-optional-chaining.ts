// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

{
  function run() {
    nullish();
    // optionalChaining();
  }




  function nullish() {
    // let value // undefined // isNullOrUndefined :  100   nullish :  100
    let value = 0 // isNullOrUndefined :  0   nullish :  0
    
    // 이부분은 문제 파트
    let result: number | undefined = value || 100;
    console.log('|| : ', result);


    function isNullOrUndefined(value: unknown) {
      return value === null || value === undefined ? true : false;
    }

    // 실수 방지를 위한 함수 : isNullOrUndefined
    result = !isNullOrUndefined(value) ? value : 100;
    console.log('isNullOrUndefined : ', result);

    // 코드를 작성합니다.
    // null 병합 연산자 활용 : ??
    result = value ?? 100; // value가 null아면 100 값을 result에 넣는다
    console.log('nullish : ', result);
  }




  
  // 사용자 정의 타입
  type Topic = {
    _title: string;
    getTitle(): string;
    setTitle(value: string): void;
    getName?: () => string; // function | undefined
  };

  function optionalChaining() {
    const topic: Topic = {
      _title: '매년 업데이트 되는 ECMAScript',
      getTitle() {
        return this._title;
      },
      setTitle(value) {
        this._title = value;
      },
    };

    if (topic && typeof topic === 'object' && !Array.isArray(topic)) {
      let title, name;
      if (typeof topic.getTitle === 'function') {
        title = topic.getTitle();
      }

      // if (typeof topic.getName === 'function') {
      // name = topic.getName();
      // }
      console.log('typeof : ', title);
      console.log('typeof : ', name);

      // 코드를 작성합니다.
      name = topic.getName?.(); // optional chaining으로 getName속성이 함수라면 실행해라 라는 것
      // if 블럭으로 확인 안해도 오류 확인이 되는 것이다.
      // 위의 주석 처리와 같은 것
    }

    let title, name;
  }

  run();
}
