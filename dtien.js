/*
 * Script thay thế assetindexer cho Free Fire iOS 1.123.7
 */

let body = $response.body;

// 1. Thông số tệp tin của bạn (Đã tính toán từ file bạn gửi)
const myHash = "8YFMbyrJG+2B7Q4algt0UEHdsQiRw=";
const mySize = "46096";
// Đường dẫn trực tiếp từ GitHub (Đã giải mã ký tự đặc biệt)
const myGithubLink = "https://raw.githubusercontent.com/dtiendzai123/hack21/main/assetindexer.8YFMbyrJG+2B7Q4algt0UEHdsQiRw=";

// 2. Cấu trúc tìm dòng assetindexer trong fileinfo
let pattern = /avatar\/assetindexer,[^,]+,[^,]+,0,[^,]+,[^,]+,True,0/g;

if (body) {
    if (body.includes("avatar/assetindexer")) {
        // Thay thế mã định danh và dung lượng để game chấp nhận file mod
        body = body.replace(pattern, `avatar/assetindexer,${myHash},${mySize},0,${myHash},${mySize},True,0`);
        
        // Chuyển hướng link tải về GitHub
        body = body.replace(/https:\/\/dl\.gmc\.freefiremobile\.com\/.*\/assetindexer/g, myGithubLink);
        
        console.log("FF_MOD: Đã thay thế assetindexer thành công!");
    }
    $done({ body });
} else {
    $done({});
}
