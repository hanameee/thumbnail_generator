# Thumbnail Generator 🎆

## 1. 환경 설정

### 1-1. Webpack 설정

Webpack을 사용해 React, Typescript를 사용하는 SPA 환경설정을 해보자.

#### 1) 새로운 프로젝트 생성

```bash
mkdir 프로젝트이름
cd 프로젝트이름
npm init -y
mkdir src
touch src/index.tsx
```

#### 2)  Dependencies 설치

Runtime Dependencies는 다음과 같다.

- react
- react-dom

Build Dependencies는 다음과 같다.

- webpack
- webpack-cli
- webpack-dev-server
- typescript
- @types/react
- @types/react-dom
- @types/webpack
- ts-loader: babel이 tsx를 js로 바꾸어서 로드할 수 있도록 해줌
- source-map-loader
- html-webpack-plugin: 웹팩이 html 파일을 읽어서 로드할 수 있도록 해줌

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

위를 참고해 작성해준 뒤,  `npm install` 을 하면 필요한 dependencies를 설치할 수 있다.

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
[Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig)
2. webpack.config.js 파일 생성
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



### 1-2. Typescript 컴파일 설정

웹팩과 ts를 함께 사용하기 위해 택할 수 있는 대표적인 방법은 아래 2가지가 있다.

1) ts-loader 사용

2) babel-loader에 typescript-preset을 얹어 사용

나는 1번을 택했다.

[Reference]

- [React + Typescript + Webpack](https://dev.to/jacopobonta/react-typescript-webpack-3c6l)



### 1-3. 폰트 설정

[Reference]

- https://chriscourses.com/blog/loading-fonts-webpack