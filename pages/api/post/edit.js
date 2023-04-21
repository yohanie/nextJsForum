import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function Edit(req, res) {
    let msg = '에러';
    let status = 500;
    console.log(req.body)
    if (req.method == 'POST') {
        if(req.body._id == ''){
            msg = '에러발생(글 삭제 추정)';
            status  = 500;
        } else if (req.body.title == '') {
            msg = '제목없음';
            status = 500;
        } else if (req.body.content == '') {
            msg = '내용없음';
            status = 500;
        } else {
            try {
                let id = 123
                let client = await connectDB;
                const db = client.db('forum');
                let result = await db.collection('post').updateOne({_id: new ObjectId(req.body._id)},
                    {
                        $set:{
                            title : req.body.title,
                            content : req.body.content
                        }
                    });
                  if(result.matchedCount == 1){
                    return res.status(200).redirect('/list');
                  }
            } catch (err) {
                console.log(err)
                msg = '저장실패';
                status = 500;
            }
        }
        return res.status(status).json(msg);
    }
}

