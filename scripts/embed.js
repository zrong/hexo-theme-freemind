const yaml = require('js-yaml')
const pathFn = require('path')
const fs = require('fs')
const util = require('util')

const dirname = pathFn.dirname(__filename)

function getRid (pre='rid-') {
  return pre + parseInt(Math.random() * 99999)
}

function flash (args, content) {
  var obj = yaml.safeLoad(content)
  if (!obj.movie) {
    var msg = util.format('找不到 movie 的配置信息:%s, args%j', content, args)
    throw new Error(msg)
  }
  if (!obj.rid) {
    obj.rid = getRid('flash-')
  }
  if (!obj.fversion) {
    obj.fversion = '9'
  }
  if (!obj.width) {
    obj.fversion = 200
  }
  if (!obj.height) {
    obj.fversion = 100
  }

  // console.log('yaml: %j', obj)
  var templateFile = pathFn.join(dirname, '../layout/_embed/flash.ejs')
  var text = hexo.render.renderSync({path: templateFile}, obj)
	return text
}

function download (args, content) {
  var obj = yaml.safeLoad(content)
  var dlConfig = hexo.theme.config.embed ? hexo.theme.config.embed.download : null
  if (!dlConfig) {
    var msg = util.format('找不到 download 的配置信息:%s, args:%j', content, args)
    throw Error(msg)
  }
  if (obj.id === undefined) {
    return ''
  }
  if (!obj.title) {
    obj.title = '下载'
  }
  var templateFile = pathFn.join(dirname, '../layout/_embed/download.ejs')
  var text = hexo.render.renderSync({path: templateFile}, obj)
	return text
}

hexo.extend.tag.register('flash', flash, {ends:true})
hexo.extend.tag.register('download', download, {ends:true})
