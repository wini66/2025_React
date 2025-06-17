## MPA 실행결과
![Image](https://github.com/user-attachments/assets/5399699c-3ed0-42ed-8c4b-934a64fff4ea)
## SPA 실행결과
![Image](https://github.com/user-attachments/assets/1a72f26b-8d82-4c0b-bdb5-ad31883ef038)
1주차 수업 내용을 마크다운 형식으로 간단히 정리하면 다음과 같습니다:

---

# 📘 1주차 수업 요약 - Web Programming Ⅱ

## 🧱 HTML & CSS 기본

### 🔹 HTML (HyperText Markup Language)

* 웹 페이지의 **구조**를 정의하는 마크업 언어
* 태그(`<tag>`)로 구성됨
* `<meta>`, `<h1>`, `<p>`, `<a>`, `<img>` 등 다양한 요소로 구성

### 🔹 마크업 언어 vs 메타데이터

| 구분 | 마크업 언어              | 메타데이터                        |
| -- | ------------------- | ---------------------------- |
| 목적 | 문서 구조 및 표현 정의       | 데이터의 속성, 의미 설명               |
| 형식 | 태그 기반               | 키-값 구조                       |
| 예시 | HTML, XML, Markdown | HTML `<meta>`, EXIF, JSON-LD |

### 🔹 HTML 표준 관련 사이트

* [W3C 공식 명세](https://www.w3.org/TR/html52/)
* [MDN HTML 문서](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [WHATWG Living Standard](https://html.spec.whatwg.org/multipage/)

---

## 🎨 CSS (Cascading Style Sheets)

* HTML에 **디자인**을 입히는 언어
* 텍스트, 색상, 레이아웃, 반응형 처리 등 가능
* `style.css` 파일로 분리하여 사용 가능

---

## ⚡ Emmet

* HTML/CSS 코드 자동완성 도구
* 예: `ul>li*3` → `<ul><li></li><li></li><li></li></ul>`

---

## 🖥 MPA vs SPA

### 🔸 MPA (Multi Page Application)

* HTML 파일 여러 개로 구성
* 페이지 전환 시 전체 새로고침

### 🔸 SPA (Single Page Application)

* 하나의 HTML 파일로 구성, JavaScript로 화면 갱신
* 페이지 전환 시 전체 새로고침 없음

---

## ⚙️ Node.js 소개

* 자바스크립트를 서버에서도 실행 가능하게 해주는 **런타임 환경**
* JavaScript Runtime (브라우저 밖에서도 실행)
* 설치 후 명령어:

  ```bash
  node -v
  npm -v
  ```

---

## 🛠 개발 도구

### 🔹 IDE (통합 개발 환경)

* VS Code, IntelliJ, Eclipse 등

### 🔹 VS Code 장점

* 무료, 오픈소스
* 풍부한 확장 기능
* 다양한 OS 지원 (Windows, macOS, Linux)

---

## 📌 실습 예시

```html
<!-- MPA 구조 예시 -->
<a href="about.html">About</a>

<!-- SPA 구조 예시 -->
<a href="#" onclick="navigate('about')">About</a>
```

```css
/* CSS 예시 */
nav a {
  color: blue;
  text-decoration: none;
}
```

