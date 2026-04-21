/*
 * Script xử lý nội dung trả về từ link CORE
 * Mục tiêu: Sửa bản đồ fileinfo để trỏ về GitHub
 */

let body = $response.body;

if (body) {
    // 1. Thông số file mod của bạn
    const myHash = "8YFMbyrJG+2B7Q4algt0UEHdsQiRw=";
    const mySize = "46096";
    const myGithubLink = "https://raw.githubusercontent.com/dtiendzai123/hack22/main/asset_mod.bytes";

    // 2. Tìm dòng chứa assetindexer trong nội dung fileinfo (từ link core)
    // Cấu trúc: avatar/assetindexer,HASH,SIZE,0,HASH2,SIZE_NEN,True,0
    let pattern = /avatar\/assetindexer,[^,]+,[^,]+,0,[^,]+,[^,]+,True,0/g;

    if (body.includes("avatar/assetindexer")) {
        // THAY THẾ 1: Sửa thông số Hash và Size để game không báo lỗi "Dữ liệu không đồng bộ"
        body = body.replace(pattern, `avatar/assetindexer,${myHash},${mySize},0,${myHash},${mySize},True,0`);
        
        // THAY THẾ 2: Tìm các link tải (thường bắt đầu bằng dl.gmc...) nằm trong nội dung core
        // và ép nó phải đổi thành link GitHub của bạn
        body = body.replace(/https:\/\/dl\.gmc\.freefiremobile\.com\/[^"'\s]*assetindexer/g, myGithubLink);

        console.log("FF_MOD: Đã sửa bản đồ fileinfo từ core thành công!");
    }
}

$done({ body });
