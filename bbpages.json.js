/**
 * module bundler with simple configure
 */
'use strict';

const bbpages = {
    "footer": "Powered By Bubufly Studio",
    "list": [
        { "title": "简介", "path": "readme.md" },
        {
            "title": "基础部分",
            "list": [
                { "title": "graphql base1", "path": "docs/1.graphql基础查询.md" },
                { "title": "graphql base2", "path": "docs/2.graphql关联查询.md" },
                { "title": "graphql base3", "path": "docs/3.graphql修改数据.md" }
            ]
        }
    ]
};

const fs = require('fs');
const path = require('path');
const targetFile = path.join(__dirname, './bbpages.json');
fs.writeFileSync(targetFile, JSON.stringify(bbpages, null, 2), {
    encoding: 'utf8',
    flags: 'w',
    mode: 0o666
});