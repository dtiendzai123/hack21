/*
 * Script sửa lỗi ReferenceError - dtiendzai123
 */

// Sử dụng var thay vì let để tránh lỗi khởi tạo biến trong một số phiên bản Shadowrocket
var body = $response.body;

if (body && body.includes("avatar/assetindexer")) {
    // 1. Thông số tệp mod
    var myHash = "8YFMbyrJG+2B7Q4algt0UEHdsQiRw=";
    var mySize = "46096";
    var myGithubLink = "https://raw.githubusercontent.com/dtiendzai123/hack22/main/asset_mod.bytes";

    // 2. Tìm dòng assetindexer trong fileinfo
    var pattern = /avatar\/assetindexer,[^,]+,[^,]+,0,[^,]+,[^,]+,True,0/g;

    // THAY THẾ 1: Sửa thông số kỹ thuật (Hash/Size)
    body = body.replace(pattern, "avatar/assetindexer," + myHash + "," + mySize + ",0," + myHash + "," + mySize + ",True,0");
    
    // THAY THẾ 2: Sửa link tải thực tế
    body = body.replace(/https:\/\/dl\.gmc\.freefiremobile\.com\/[^"'\s]*assetindexer/g, myGithubLink);

    console.log("FF_MOD: Đã ghi đè thành công!");
    $done({ body: body });
} else {
    $done({});
}
