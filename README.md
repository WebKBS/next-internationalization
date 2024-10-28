# next.js internationalization (국제화) 테스트

## version

- next.js: 15.0.1
- react: 18.3.1
- next-intl: 3.23.5

next-intl 공식 문서:

https://next-intl-docs.vercel.app/

## 설치

```bash
npm install next-intl
```

## 폴더구조

```
root
├── messages
│   ├── en.json (1)
│   └── ...
├── next.config.mjs (2)
├── i18n
│   ├── routing.ts (3)
│   └── request.ts (5)
├── middleware.ts (4)
└── app
    └── [locale]
        ├── layout.tsx (6)
        └── page.tsx (7)
```

1. messages 폴더에 언어별 json 파일을 생성합니다.

- en.json, ko.json 등 여러가지 언어를 지원할 수 있습니다.

2. next.config.mjs 파일을 생성합니다.

- 서버 구성 요소에 대한 next-intl의 플러그인을 설정합니다.

3. i18n 폴더에 routing.ts 파일을 생성합니다.

- next-intl의 통합 라우팅을 설정합니다.

4. middleware.ts 파일을 생성합니다.

5. 서버 구성 요소에서 next-intl의 기능을 사용하는 경우 관련 구성은 i18n에 있는 중앙 모듈에서 읽힙니다.

6. 미들웨어에서 매치된 로케일은 locale 매개변수를 통해 사용할 수 있으며 문서 언어를 구성하는 데 사용할 수 있습니다. (언어 경로별 다이나믹 라우팅)

7. 페이지에서 번역 및 기타 다국어 기능을 사용할 수 있습니다.