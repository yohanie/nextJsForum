import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    let client = await connectDB;
    console.log(props.params.pageId)
    const db = client.db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.pageId)});
    console.log(result)
    return (
        <div>
            <form action="/api/post/edit" method='POST'>
                <h4>디테일페이지</h4>
                <input name="_id" type='hidden' defaultValue={result._id}/>
                <input name='title' defaultValue={result.title} placeholder="제목"/>
                <input name='content'defaultValue={result.content} placeholder="내용"/>
                <button type='submit'>수정</button>
            </form>
        </div>
    )
}