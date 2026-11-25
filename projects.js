// 메인 페이지에 표시할 프로젝트 목록. 새 작업 폴더를 만들면 여기에 항목을 추가.
// - path: 폴더 경로 (끝에 / , 그 폴더의 index.html이 열림)
// - manifest / base (선택): 폴더 안의 그림 목록(window.FIGS)을 읽어 최근 항목을 함께 보여줌
window.PROJECTS = [
  {
    path: "피지컬AI/",
    title: "피지컬AI",
    desc: "로봇·핸드 후보 정리, 개념 시각화",
    tags: ["로봇", "핸드", "시각화"],
    updated: "2026-11-25",
    manifest: "피지컬AI/figs/manifest.js",
    base: "피지컬AI/figs/",
  },
];
