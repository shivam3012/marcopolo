class marcoPolo {

    getGameResult(req, res, next) {
        // let start = 1;
        let end = 1000000;
        let result = [];
        for (let i = 1; i <= 1000; i++) {
            let lineString = "";
            for (let j = (1+(1000*(i-1))); j <= (i*1000); j++) {
                if (j % 4 === 0 && j % 7 === 0) {
                    lineString += "marcopolo,";
                } else if (j % 4 === 0) {
                    lineString += "marco,";
                } else if (j % 7 === 0) {
                    lineString += "polo,";
                } else {
                    lineString += (j + ",");
                }
            }
            result.push({ line: lineString.substring(0, lineString.length - 1) });
            // console.log("push", result)

            if (i*1000 === end)
                return res.status(200).json({
                    "msg": "success",
                    "number": result
                });
        }
    }
}

module.exports = new marcoPolo();