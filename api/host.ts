import { VercelRequest, VercelResponse } from '@vercel/node';
module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        "banner":"pixiv",
        "host": "vercel.pixiv.digital"
    }
    ;
    res.status(200).json(data);
}
