import { VercelRequest, VercelResponse } from '@vercel/node';
module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        "buy_title": "会员解锁",
        "buy_intro": "test",
        "buy_title_inner": "会员解锁",
        "buy_temp_b":"b"
    };
    res.status(200).json(data);
}
