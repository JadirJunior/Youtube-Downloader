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
        var filename = `${Date.now()}`;
        var filter = format == 'mp4' ? 'audioandvideo' : 'audioonly';
        res.header ('Content-Disposition', `attachment; filename = ${filename}.${format}`);
        ytdl(url, {
            format: format, quality: 'highest', 
            filter: filter
        }).pipe(res);
    } catch (error) {
        console.log(error);
        return res.json({error: 'Ocorreu um erro ao baixar o video'});
    }
}

module.exports = {
    getVideo: (req,res) => {getVideo(req,res)}
}
