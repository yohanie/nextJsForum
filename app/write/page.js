export default function Write(){
    return(
        <div className="p-20">
            <h4>글쓰기</h4>
            <form action="/api/post/write" method='POST'>
                <input name='title' placeHolder="제목"/>
                <input name='content'placeHolder="내용"/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}