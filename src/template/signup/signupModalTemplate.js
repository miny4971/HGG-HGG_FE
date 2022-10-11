import close from '../../assets/close.png';

export function signupModalTemplate(){
    return `
    <article id="modalSignup">
        <div class="modal__close">
            <img src=${close} alt="close_icon_logo"/>
        </div>
        <form action="#" accept-charset="utf-8" name="signup" method="post">
            <div class="signup__form">
                <h2 class="signup__title">함께 한끼와 함께 하기!</h2>
                <div class="signup__input__button">
                <div class="signup__input">
                    <div><h3>닉네임</h3><input type="text" name="nickname" ></div>
                    <div><h3>아이디</h3><input type="text" name="username" ></div>
                    <div><h3>비밀번호</h3><input type="password" name="password" ></div>
                    <div><h3>비밀번호 확인</h3><input type="password" name="passwordchk" ></div>
                </div>
                <button>랜덤 생성</button>
                </div>
                <div class="checkbox">
                    <label>레이서에요!<input type="checkbox" name="name1" value="racer" checked></label>
                    <label>튜터에요!<input type="checkbox" name="name1" value="tutor"></label>
                    <label>매니저에요!<input type="checkbox" name="name1" value="manager"></label>
                </div>
                <div class="btn">
                    <input type="submit" class="commit" value="회원가입">
                </div>
            </div>
        </form>
    </article>
    `
}