import { connectDB } from "@/util/database";

export default async function Join(req, res) {
    let msg = '';
    let status = 500;
    if (req.method == 'POST') {
        if (req.body.userId == '') {
            msg = '아이디 없음';
            status = '500';
    
        } else if (req.body.password == '' || req.body.passwordConfirm == '') {
            
            msg = '비번없음';
            status = '500';
         
        } else if(req.body.password != req.body.passwordConfirm){
            msg = '비번다름';
            status = '500';
        } else {
            try {
                let client = await connectDB;
                const db = client.db('forum');
                //console.log(req.body)
                let resultChk = await db.collection('join').findOne({userId:req.body.userId});
                console.log(resultChk)
                if(resultChk == null){
                    let result = await db.collection('join').insertOne(req.body);
                    return res.status(200).redirect('/list');
                } else {
                    msg = "같은 아이디가 있음";
                    status = 500;
                }
            } catch (err) {
                msg = '저장실패';
                status = '500';
            }
        }
        return res.status(status).json(msg);
    }
}

