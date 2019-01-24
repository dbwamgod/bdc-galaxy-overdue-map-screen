import axios from 'axios';
import { stringify } from 'qs';

let defaultHost = '';

const NODE_ENV = process.env.NODE_ENV;
switch (NODE_ENV) {
  case 'development':
    defaultHost = 'http://172.18.101.118:10000'; // 开发地址（内部开发和测试的地址）
    // defaultHost = 'http://10.50.180.111:10000';
    break;
  case 'test ':
    defaultHost = 'http://10.50.180.111:10000';
    break;
  case 'production':
    defaultHost = 'http://bi.jieyuechina.com/api';
    break;
  default:
    defaultHost = '';
}

// 自定义前缀，对应后端微服务
const apiUrlfun = val => {
  if (val) {
    return `${defaultHost}/${val}`;
  }
  return `${defaultHost}`;
};

export { stringify, axios, apiUrlfun };
