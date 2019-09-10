/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 08:20:17
 * @LastEditTime: 2019-09-09 14:11:16
 * @LastEditors: Please set LastEditors
 */
const request = require('request');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const analyze = require('./analyze');


function start(){
    //请求原地址
    request(config.url,function(err,res,body){
        if(!err && res){
            analyze.findImg(body,downLoad);
        }
    })


}

//保存图片到本地
function downLoad(imgUrl,i){
    let ext = imgUrl.split('.').pop();
    const aa = path.join(config.imgDir,i+'.'+ext);
    request(imgUrl).pipe(fs.createWriteStream(aa,{
        'encoding':'utf8'
    }))
}

start();
