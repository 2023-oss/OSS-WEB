export interface User {
  userId: number;
  phone: string;
  date: string;
  title: string;
  writers: string;
}
export const data: User[] = [
  {
    userId: 1,
    phone: "010-2263-2953",
    date: "2023년 7월 25일",
    title: "더클라임 동의서",
    writers: "박박박",
  },
  {
    userId: 2,
    phone: "010-2697-8660",
    date: "2023년 7월 27일",
    title: "짐라이트 동의서",
    writers: "김헬창",
  },
  {
    userId: 3,
    phone: "010-9420-7207",
    date: "2023년 7월 28일",
    title: "빠지 동의서",
    writers: "김워터",
  },
];
