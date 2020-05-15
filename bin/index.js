#! /usr/bin/env node
const commander = require('commander')
const createComponent = require('../tools/create')

commander
  .version('1.0.0')

// 创建组件
commander
  .command('create <name>')
  .description('quick create components dir and file')
  .action((name, options) => {
    createComponent({ name })
  })


commander.parse(process.argv)
