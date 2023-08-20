import "../css/login.css";
export default function LoginPage() {
  return (
    <div>
      <div className="logo">
        <img src="icon\Logo.png"></img>
      </div>
      <div className="idInput">
        <input type="text" placeholder="아이디"></input>
      </div>
      <div className="pwdInput">
        <input type="text" placeholder="비밀번호"></input>
      </div>
      <div className="etc">
        <input type="checkbox"></input>
        자동 로그인
      </div>
    </div>
  );
}
