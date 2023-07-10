// --------------------------------------------------------------------------
// template literal


{
  const koreanFoods: {
    // 이부분이 타입 설정 부분
    caption: string;
    // rows : 배열
    rows: {
      headline: string;
      content: string;
    }[];

  } = {
    caption: '한식 메뉴',
    rows: [
      { headline: '뚝배기 불고기', content: '8,000원' },
      { headline: '스팸치즈볶음밥', content: '7,500원' },
      { headline: '불고기낙지덮밥', content: '9,000원' },
    ],
  };

  function run(): void {
    let rendredResult = printTableHTML(koreanFoods);
    rendredResult = removeSpaceString(rendredResult); // 공백 제거 함수 - 압축된 형태로 보여주고 싶을 때 사용
    console.log(rendredResult);
    // return undefined; 
    // 자바스크립트에서는 반환값이 명시적이지 않을 때 undefined이 반환, void 사용해서 타입 설정
  }

  function removeSpaceString(data: string): string {
    return data
      .replace(/(\s+<$ | >\s+)/g, ($1) => {
        if (/\s+<$/.test($1)) {
          return '<';
        } else if (/>\s+/.test($1)) {
          return '>';
        } else {
          return '';
        }
      })
      .trim();
  }

  function printTableHTML(data: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return `
    
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${
          data.rows.map((item) =>
            `
              <tr>
                <th>${item.headline}</th>
                <td>${item.content}</td>
              </tr>
            `
          ).join('')
        }
      </table>

    `;
  }

  function renderTable(data: {
    // 똑같이 타입 명시
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return [
      '<table class="table">',
      '<caption class="sr-only">' + data.caption + '</caption>',
      data.rows.reduce(function (htmlString, rowData) {
        const rowString = [
          '<tr>',
          '<th>' + rowData.headline + '</th>',
          '<td>' + rowData.content + '</td>',
          '</tr>',
        ].join('');
        return htmlString + rowString;
      }, ''),
      '</table>',
    ].join('');
  }

  run();
}
