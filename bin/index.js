#! /usr/bin/env node
const commander = require('commander');
const pkg = require('../package.json');
const createComponent = require('../tools/create');

commander.version(pkg.version);

commander
  .command('create <name>')
  .option('-class, --class', '类组件')
  .description('快速创建组件模版')
  .action((name, options) => {
    createComponent({ name, isFc: !options.class });
  });

commander.parse(process.argv);
