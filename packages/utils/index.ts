/*
  value: 13位时间戳 | new Date() | Date()
  console.log(dateFormat(1680227496788, 'YYYY-MM-DD HH:mm:ss'))
  format => YY：年，M：月，D：日，H：时，m：分钟，s：秒，SSS：毫秒
*/
export function dateFormat(time: number | string | Date = Date.now(), fmt = "yyyy-MM-dd hh:mm:ss"): string {
  let date = new Date(time)
  let o = <any>{
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
    }
  }
  return fmt
}

// 节流函数throttle
export function throttle(fn: Function, delay = 300): any {
  let timer: number | null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}
// 防抖函数debounce
export function debounce(fn: Function, delay = 300): any {
  // timer 是在闭包中的
  let timer: number | null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}

// 复制文本
export function copyText(text: string): any {
  return new Promise((resolve) => {
    // 创建input框获取需要复制的文本内容
    const copyInput = document.createElement("input")
    copyInput.value = text
    document.body.appendChild(copyInput)
    copyInput.select()
    document.execCommand("copy")
    copyInput.remove()
    resolve(true)
  })
}

// 判断数组中是否有重复项
export function isArrayRepeat(arr: []): boolean {
  var hash = <any>{}
  for (var i in arr) {
    if (hash[arr[i]]) {
      return true
    }
    hash[arr[i]] = true
  }
  return false
}

/*
  下载文件并自定义文件名
  url: 文件地址
  name: 自定义文件名，未传时，从文件地址中自动获取文件名称
*/
export function downloadFile(url: string, name: string) {
  var fileName = ""
  if (name) {
    fileName = name
  } else {
    const res = url.split("?")[0].split("/")
    fileName = res[res.length - 1]
  }
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.responseType = "blob"
  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = xhr.response
      const link = document.createElement("a")
      const body = document.querySelector("body")
      link.href = window.URL.createObjectURL(blob)
      link.download = fileName
      link.style.display = "none"
      body?.appendChild(link)
      link.click()
      body?.removeChild(link)
      window.URL.revokeObjectURL(link.href)
    }
  }
  xhr.send()
}
