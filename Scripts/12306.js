// 12306
// 2024-10-23 00:20:14


let obj = JSON.parse($request.body);

if (obj.placementNo === "0007") {
  obj = {
    "code": "00",
    "materialsList": [
      {
        "billMaterialsId": "255",
        "filePath": "h",
        "creativeType": 1
      }
    ],
    "advertParam": { "skipTime": 1 }
  };
} else if (obj.placementNo === "G0054") {
  obj = { "code": "00", "materialsList": [] };
} else {
  obj = { "code": "00", "message": "无广告返回" };
}


$done({body: JSON.stringify(obj)});
