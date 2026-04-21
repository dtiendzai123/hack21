// ff_mod.js
// Script can thiệp vào fileinfo để thay đổi chỉ mục tài nguyên

let body = $response.body;

// Thông số tệp tin bạn đã cung cấp
const myHash = "8YFMbyrJG+2B7Q4algt0UEHdsQiRw=";
const mySize = "46096";
// Thay link dưới đây bằng link RAW GitHub sau khi bạn upload tệp lên đó
const myGithubLink = "https://raw.githubusercontent.com/user/repo/main/assetindexer";

// Cấu trúc tìm kiếm dòng assetindexer trong fileinfo của Free Fire
let pattern = /avatar\/assetindexer,[^,]+,[^,]+,0,[^,]+,[^,]+,True,0/g;

if (body) {
    if (body.includes("avatar/assetindexer")) {
        // Thay thế thông số Hash và Size để game nhận diện file mới
        body = body.replace(pattern, `avatar/assetindexer,${myHash},${mySize},0,${myHash},${mySize},True,0`);
        
        // Lái hướng tải về link cá nhân của bạn
        body = body.replace(/https:\/\/dl\.gmc\.freefiremobile\.com\/.*\/assetindexer/g, myGithubLink);
    }
}

$done({ body });
