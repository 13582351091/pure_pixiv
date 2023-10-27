import { VercelRequest, VercelResponse } from '@vercel/node';
module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        "version_code": 1206,
        "version_name": "2.8.1.c1206",
        "url": "https://flexbooru.art",
        "is_available_store": true
    }
    ;
    res.status(200).json(data);
}
