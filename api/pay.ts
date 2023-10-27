import { VercelRequest, VercelResponse } from '@vercel/node';
module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        "pay_amount": "6.6",
        "pay_info": "点击“购买”后将会复制爱发电地址（https://afdian.net/a/pixivs）至剪贴板，你需自行完成需转帐 6.6 元（人民币）。 复制自动回复的“兑换码”中并提交。",
        "pay_host": "pay.flexbooru.art",
        "pay_account": "https://afdian.net/a/pixivs"
    
    }
    ;
    res.status(200).json(data);
}
