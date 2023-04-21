import { connectDB } from "@/util/database";

export default async function Write(req, res) {
    let msg = '에러';
    let status = 500;
    if (req.method == 'POST') {
        if (req.body.title == '') {
            msg = '제목없음';
            status = 500;
        } else if (req.body.content == '') {
            msg = '내용없음';
            status = 500;
        } else {
            try {
                let client = await connectDB;
                const db = client.db('forum');
                let result = await db.collection('post').insertOne(req.body);
                console.log(result.insertedId)
                if(result.insertedId){
                    return res.status(200).redirect('/list');
                  }
            } catch (err) {
                msg = '저장실패';
                status = 500;
            }
        }
        return res.status(status).json(msg);
    }
}

