const ytdl = require('ytdl-core');
const fs =require('fs');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
*/

async function getVideo(req,res) {
    const {url} = req.query;
    const format = req.query.format;
    try {
        var filename = `${Date.now()}.${format === undefined ? 'ogg' : format}`;
        res.header ('Content-Disposition', `attachment; filename = ${filename}`);
        ytdl(url, {format: 'ogg', quality: 'highest'}).pipe(res);
    } catch (error) {
        console.log(error);
        return res.json({error: 'Ocorreu um erro ao baixar o video'});
    }
}

module.exports = {
    getVideo: (req,res) => {getVideo(req,res)}
}
