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
        var formato = format === undefined ? 'ogg' : format;
        var filename = `${Date.now()}.${formato}`;
        res.header ('Content-Disposition', `attachment; filename = ${filename}`);
        ytdl(url, {format: `${formato}`, quality: 'highest'}).pipe(res);
    } catch (error) {
        console.log(error);
        return res.json({error: 'Ocorreu um erro ao baixar o video'});
    }
}

module.exports = {
    getVideo: (req,res) => {getVideo(req,res)}
}
