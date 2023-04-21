import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./detailLink";

export default async function List() {
    let client = await connectDB;
    const db = client.db('forum');
    let pageNo = 1;
    let pagePerCnt = 20;
    //pageNo, pagePerCnt 응용
    let result = await db.collection('post').find().skip((pageNo-1)*pagePerCnt).limit(pagePerCnt).sort({_id:-1}).toArray();
    // map return() + 중괄호 동시에 생
    
    return (
        <div className="list-bg">
            <button ><Link href={'/write'}>글쓰기</Link></button>
            {
                result.map((item, idx) =>
                    
                    <div className="list-item" key={idx}>
                        {/* <Link href="/detail/[item._id]" as={`/detail/${item._id}`}>{item.title}</Link> */}
                        <Link href={"/detail/" + item._id}><h4>{item.title}</h4></Link>
                        {/* <DetailLink id={item._id} title={item.title} /> */}
                        <Link href={'/edit/'+ item._id}>✏️</Link>
                        {/* <p>{item.content}</p> */}
                        <p>1월 1일</p>
                        
                    </div>
                )
            }
        </div>
    )
}

