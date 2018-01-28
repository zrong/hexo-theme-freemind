// 提供对 aid.zengrong.net 的调用，依赖 jQuery

function download(id) {
  if (AID_INFO_URL === undefined || AID_GO_URL === undefined) {
    alert('AID 未定义')
    return
  }
  var rid = '#dl-' + id
  var infoURL = AID_INFO_URL.replace('%s', id)
  var goURL = AID_GO_URL.replace('%s', id)
  $.getJSON(infoURL, function (data) {
    if (data.error) {
      $(rid).text(data.message)
      $(rid).addClass('bg-danger')
    }
    else {
      $(rid).empty()
      $(rid).addClass('bg-info')
      var ul = $('<ul>')
      ul.append($('<li>').text(data.file_name))
      ul.append($('<li>').text(data.file_date))
      ul.append($('<li>').text(data.file_hits))
      if (data.file_des) {
      ul.append($('<li>').text(data.file_des))
      }
      // TODO file的值可能是相对路径，需要判断
      var file = null
      if (data.file.indexOf('http') === 0) {
      file = data.file
      }
      else {
      file = goURL
      }
      var a = '<a href="' + file + '" target="_blank">下载文件</a>'
      ul.append($('<li>').html(a))
      $(rid).append(ul)
    }
  })
}