module.exports = async function (context, req) {
  context.res = {
    body: {
      "openapi": "3.0.0",
  "info": {
    "title": "中央銀行-銀行存放款牌告利率API Service",
    "description": "## 取得中央銀行-銀行存放款牌告利率",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://cpx.cbc.gov.tw/BIRWEB"
    }
  ],
  "paths": {
    "/api/Rate": {
      "get": {
        "tags": [
          "中央銀行-銀行存放款牌告利率API Service"
        ],
        "description": "回傳政府資料開放平臺之中央銀行-銀行存放款牌告利率",
        "responses": {
          "200": {
            "description": "Definition generated from Swagger Inspector",
            "content": {
              "application/json": {
                "examples": {
                  "RateData": {
                    "summary": "An example of RateData",
                    "value": "資料日期:'1050513',  金融機構代號:'0040000', 金融機構名稱:'臺灣銀行',  牌告利率項目:'10', 牌告利率名稱:'活期存款', 存期起日:'00000', 存期迄日:'00000', 存期中文:'1050516', 額度代碼:'00', 額度代碼中文:'一般', 生效日期:'1090323', 生效時間:'0000', 固定利率_2位整數3位小數:'', 機動利率_2位整數3位小數:''"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
    }
  };
};