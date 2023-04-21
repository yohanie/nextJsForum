import { connectDB } from "@/util/database";

export default async function List() {
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    return (
        <div className="list-bg">
            {
                result.map((item, idx) =>
                    <div className="list-item" key={idx}>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>

    )

} 