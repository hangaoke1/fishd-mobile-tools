const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const glob = require('glob');
const Handlebars = require('handlebars');
const _ = require('lodash');
const writeFileTree = require('./writeFileTree');
const { option } = require('commander');

const resolve = (...args) => path.resolve(__dirname, ...args);

const createComponent = async function (options) {
  options = {
    cwd: process.cwd(),
    name: options.name,
    isFc: options.isFc,
  };

  const context = path.resolve(
    options.cwd,
    `source/components/${options.name}`,
  );

  const isExist = fsExtra.pathExistsSync(context);

  if (isExist) {
    console.log('创建组件失败，目录已存在');
    return;
  }

  const tplPath = options.isFc ? '../template/fc' : '../template/component';

  let files = glob.sync('**/**', {
    cwd: resolve(tplPath),
    nodir: true,
    dot: true,
  });

  let baseFilesMap = {};
  files.forEach((file) => {
    let fileKey = file;
    if (file === 'component.tsx') {
      fileKey = options.name + '.tsx';
    }
    const fileStr = fs.readFileSync(resolve(tplPath, file), 'utf-8');
    const template = Handlebars.compile(fileStr);
    baseFilesMap[fileKey] = template({
      name: options.name, // 大驼峰 ActionSheet
      camelCaseName: _.camelCase(options.name), // 小驼峰 actionSheet
      kebabCaseName: _.kebabCase(options.name), // 短线链接 action-sheet
    });
  });

  await writeFileTree(context, baseFilesMap);

  console.log(`✅ 组件${options.name}创建成功!`);
};

module.exports = createComponent;
