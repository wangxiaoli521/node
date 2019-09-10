/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 10:58:55
 * @LastEditTime: 2019-09-09 14:10:54
 * @LastEditors: Please set LastEditors
 */
const cheerio =require('cheerio');
//获取每张图片的src
function findImg(dom,callback){
    let $ = cheerio.load(dom);
    $('img').each(function(index,item){
        if(index==2){
            let imgSrc = $(this).attr('src');
            callback(imgSrc,index);
        }
    
    })
}

module.exports.findImg=findImg;