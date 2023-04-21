import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    let client = await connectDB;
    console.log(props.params.pageId)
    const db = client.db('forum');
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.pageId)});
    return (
        <div>
            <h4>디테일페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}