<h1 align="center">Theme Generator 🌈</h1>
<p align="center">느낌적인 느낌을 살려주는 색상 조합표</div>

![thumbnail](README.assets/thumbnail.png)

개발 일지는 [여기](devLog.md)에! 😎

## Theme Generator 기능

### 1) 한글 형용사와 어울리는 색상 조회

형용사 별 배색 데이터는 도서 [Color Image Planning 어떤색이 좋을까?](https://book.naver.com/bookdb/book_detail.nhn?bid=12639642) 를 바탕으로 수집했습니다.

형용사를 선택하면, 그와 어울리는 색상들을 볼 수 있습니다.

[구현 예정] 여기서 베이스 색상을 선택할 수도 있고, 직접 color picker 또는 rgb, hsl 값 입력을 통해 원하는 색상을 베이스 색상으로 지정할 수도 있습니다.

### 2) [WIP] 색상 팔레트

1에서 고른 색상을 바탕으로 보색, 유사색, 단색 배색과 각각의 rgb, hsl 값을 제공합니다.

[구현 예정] 클릭을 통해 값을 복사하여 필요한 곳에 바로 사용할 수 있습니다.

### 2) [WIP] Material UI Theme export

[구현 예정] 1에서 고른 색상을 바탕으로 material UI의 Theme으로 바로 사용할 수 있는 테마를 제공합니다.

```json
const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb"
      main: "#3f51b5"
      dark: "#303f9f"
      contrastText: "#fff"
    }
    primary: {
      light: "#ff4081"
      main: "#f50057"
      dark: "#c51162"
      contrastText: "#fff"
    }
    ...
});
```

### 3) [WIP] 데모 페이지

[구현 예정] 2의 Theme을 적용했을 때의 느낌적인 느낌을 확인할 수 있도록, 데모 웹 사이트에 해당 Theme을 적용한 예시 페이지를 제공합니다.