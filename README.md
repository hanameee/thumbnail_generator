<h1 align="center">[WIP] Theme Generator 🎆</h1>
<p align="center">기록용으로 남기는 토이프로젝트 제작기 101</div>

`Webpack` `React` `Typescript` `TailwindCSS`

## 1. 환경 설정

### 1-1. Webpack 설정

#### 1) 새로운 프로젝트 생성

```bash
mkdir 프로젝트이름
cd 프로젝트이름
npm init -y
mkdir src
touch src/index.tsx
```

#### 2) Dependencies 설치

Runtime Dependencies는 다음과 같다.

-   react
-   react-dom

Build Dependencies는 다음과 같다.

-   webpack
-   webpack-cli
-   webpack-dev-server
-   typescript
-   @types/react
-   @types/react-dom
-   @types/webpack
-   ts-loader: babel이 tsx를 js로 바꾸어서 로드할 수 있도록 해줌
-   source-map-loader
-   html-webpack-plugin: 웹팩이 html 파일을 읽어서 로드할 수 있도록 해줌

참고) `Runtime Dependencies` vs. `Build Dependencies`

Runtime Dependencies: 코드 실행 시 필요한 Dependencies들로, package.json의 dependencies에 들어가며 빌드 결과에 포함된다.

Build Dependencies: 코드 개발 시에만 필요한 Dependencies들로, package.json의 devDependencies에 들어가며 빌드 결과에 포함된다.

> package.json

```json
{
  "name": /*프로젝트 이름*/,
  "version": "1.0.0",
  "description": /*프로젝트 설명*/,
  "scripts": {
        "start": "webpack-dev-server",
        "build": "webpack", /* webpack4 부터는 자동으로 config 파일을 찾는다 */
        "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": /*프로젝트 작성자*/,
  "license": "ISC",
  "devDependencies": {
        "@types/react": "^16.9.46",
        "@types/react-dom": "^16.9.8",
        "@types/webpack": "^4.41.21",
        "html-webpack-plugin": "^4.3.0",
        "source-map-loader": "^1.0.2",
        "ts-loader": "^8.0.2",
        "typescript": "^3.9.7",
        "webpack": "^4.44.1",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
```

위를 참고해 작성해준 뒤, `npm install` 을 하면 필요한 dependencies를 설치할 수 있다.

#### 3) configuration 파일 작성

크게 **typescript 설정**과 (tsconfig.json) **webpack 설정**이 (webpack.config.js) 필요하다.

1. tsconfig 파일 생성

```bash
touch tsconfig.json
```

> tsconfig.json

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "allowJs": true,
        "allowSyntheticDefaultImports": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

[tsconfig 컴파일 옵션 정리](https://vomvoru.github.io/blog/tsconfig-compiler-options-kr/)
[Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig) 2. webpack.config.js 파일 생성

```bash
touch webpack.config.js
```

> webpack.config.js

```json
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
```

#### 4) 그 외 필요한 Loader, Plugin 설정

-   loaders for css (css-loader, style-loader)
-   loaders for files (file-loader, url-loader)
-   postcss-loader : tailwindcss를 위해
-   폰트 설정...경로 수정도 해줘야 함. https://chriscourses.com/blog/loading-fonts-webpack

### 1-2. Typescript 컴파일 설정

웹팩과 ts를 함께 사용하기 위해 택할 수 있는 대표적인 방법은 아래 2가지가 있다.

1. ts-loader 사용

2. babel-loader에 typescript-preset을 얹어 사용

나는 1번을 택했다. **왜?**

#### ts-loader 장단점

[장점]

1. 타입스크립트의 장점을 누릴 수 있다. 즉, 정확한 타입 체킹이 가능하다. 빌드 타임에 type-safe한 결과물을 보장한다.
2. IDE 에서 타입스크립트 환경설정 파일을 참고하여 코드 작성 시 발생한 타입 에러들을 잡을 수 있다.

[단점]

1. 타입스크립트 컴파일러와 로더를 추가적으로 설치해야 한다.
2. 빌드 시 모든 타입스크립트 에러를 잡아내는 과정을 거치기 때문에, 상대적으로 느리다.

#### Babel-loader 장단점

[장점]

1. Babel loader은 타입스크립트 컴파일러를 사용하지 않는다. 따라서 기존에 바벨을 사용하고 있었다면 별도로 패키지를 추가할 필요 없이 기존 바벨 설정에 preset을 추가해주는 것 만으로 끝난다.
2. 빌드가 빠르다. ts를 js로 바꿀 때, 별도의 타입체크를 하지 않고 그냥 ts를 js로 변환하는 (=ts를 걷어내는) 작업만 하기 때문에 빠르다.

[단점]

1. babel-loader만으로는 typescript의 타입 체크 장점을 누릴 수 없다. 타입스크립트 컴파일러가 돌아가지 않고 단지 빌드 시 ts를 js를 변환해주는 작업만 하기 때문이다. 즉, 빌드 타임에 type-safe한 결과물을 보장하지 않는다.
2. 타입스크립트 컴파일러가 없으므로 IDE에서 코드 작성 시 타입 체킹을 해주는 순기능도 누릴 수가 없다.

[Reference]

-   [React + Typescript + Webpack](https://dev.to/jacopobonta/react-typescript-webpack-3c6l)
-   [TypeScript -- @babel/preset-typescript & ts-loader](https://www.evanlouie.com/posts/typescript-babel-preset-typescript-ts-loader)
-   [Typescript 사용 방법들과 각 장단점](https://bitnam.blog/88)

## 2. 프로젝트 구조 설정

### 컴포넌트 기반 개발

### tailwindcss 를 사용한 utility first 개발

그냥 해보고 싶어서...

-   traditional css
-   bootstrap, material ui 등
-   Css-in-js (styled-component, )
-   Tailwinds(?)
