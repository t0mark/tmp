# _tmp — GitHub Pages 작업 공유 저장소

이 폴더 전체가 GitHub Pages(`t0mark/tmp`)로 공개된다. 작업마다 하위 폴더를 하나씩 만들고, 루트 `index.html`이 그 목록을 보여준다.

## 규칙

- **새 작업 = 새 폴더.** 폴더 안에 `index.html`을 둔다 (그 작업의 첫 화면).
- **루트 등록:** 새 폴더를 만들면 `projects.js`의 `PROJECTS` 배열에 항목을 추가한다.
  ```js
  { path: "폴더명/", title: "제목", desc: "한 줄 설명", tags: ["태그"], updated: "YYYY-MM-DD",
    manifest: "폴더명/figs/manifest.js", base: "폴더명/figs/" }  // manifest/base는 선택
  ```
  - `manifest`를 지정하면 그 파일의 `window.FIGS` 목록(최근 5개)이 메인에 같이 표시된다.
  - 작업을 갱신하면 `updated` 날짜도 바꾼다 (메인은 최신순 정렬).
- **페이지는 정적 HTML만.** 빌드 도구 없이 바로 열려야 한다. 링크·이미지는 모두 상대 경로. 외부 스크립트는 버전 고정 CDN만.
- `.nojekyll`이 있으므로 `_`로 시작하는 파일도 그대로 배포된다.
- **공개 저장소다.** 개인정보, 내부 견적서 원문, 비공개 문서는 올리지 않는다. 올리기 전에 확인.
- 폴더별 세부 규칙은 각 폴더의 `CLAUDE.md`를 따른다 (예: `피지컬AI/CLAUDE.md`).
