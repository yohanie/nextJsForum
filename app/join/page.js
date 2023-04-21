export default function Join(){

    return(
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/post/join" method='POST'>
                <input name='userId' placeHolder="아이디"/>
                <input type="password" name='password'placeHolder="비밀번호"/>
                <input type="password" name='passwordConfirm'placeHolder="비밀번호확인"/>
                <button type="submit">가입</button>
            </form>
        </div>
    )

}