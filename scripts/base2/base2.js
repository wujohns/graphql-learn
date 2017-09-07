/**
 * graphql 关联查询
 *
 * @author wujohns
 * @date 17/9/7
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const print = require('../utils').print;

const typeDefs = fs.readFileSync('./schema.graphql').toString();

// mock 的数据

