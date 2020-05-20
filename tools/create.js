const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const glob = require('glob');
const Handlebars = require("handlebars");
const writeFileTree = require('./writeFileTree');

const resolve = (...args) => path.resolve(__dirname, ...args);

const createComponent = async function(options) {
	options = {
		cwd: process.cwd(),
		name: options.name
	};

	const context = path.resolve(options.cwd, `source/components/${options.name}`);

	const isExist = fsExtra.pathExistsSync(context);

	if (isExist) {
		console.log('创建组件失败，目录已存在');
		return;
	}

	let files = glob.sync('**/**', {
		cwd: resolve('../template/component'),
		nodir: true,
		dot: true,
	});

	let baseFilesMap = {};
	files.forEach(file => {
    let fileKey = file
    if (file === 'component.tsx') {
      fileKey = options.name + '.tsx'
		}
		const fileStr = fs.readFileSync(resolve('../template/component', file), 'utf-8')
		const template = Handlebars.compile(fileStr);
		baseFilesMap[fileKey] = template({ name: options.name });
	});


	await writeFileTree(
		context,
		baseFilesMap
	);

	console.log(`✅ 组件创建成功!`)
};

module.exports = createComponent;
