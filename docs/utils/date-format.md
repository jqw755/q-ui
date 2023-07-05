# dateFormat 日期格式化

::: details Code

```ts
function dateFormat(time: number | string | Date = Date.now(), fmt = "yyyy-MM-dd hh:mm:ss") {
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
```

:::

## 基本使用

_格式化时间戳_

<br/>

**2023-06-27 11:41:45**

```vue
<script setup lang="ts">
import { dateFormat } from "@jqw755/q-ui"

dateFormat(1687837305000)
</script>
```

## 格式化字符串

<br/>

**2023/06/27**

```vue
<script setup lang="ts">
import { dateFormat } from "@jqw755/q-ui"

dateFormat(new Date(), "YYYY/MM/DD")
</script>
```

## APIs

| 参数   | 说明                                                         | 类型                             | 默认值                | 必传  |
| ------ | ------------------------------------------------------------ | -------------------------------- | --------------------- | ----- |
| time   | 时间戳；或者可以转化为 Date 类型的字符串日期；或者 Date 对象 | number &#124; string &#124; Date | Date.now()            | false |
| format | 格式化目标形式                                               | string                           | 'YYYY-MM-DD HH:mm:ss' | false |

## format 支持的格式化占位符列表

| 标识 | 示例  | 描述          |
| ---- | ----- | ------------- |
| YYYY | 2023  | 年，四位数    |
| M    | 1-12  | 月，从 1 开始 |
| MM   | 01-12 | 月，两位数    |
| D    | 1-31  | 日            |
| DD   | 01-31 | 日，两位数    |
| H    | 0-23  | 小时          |
| HH   | 00-23 | 小时，两位数  |
| m    | 0-59  | 分钟          |
| mm   | 00-59 | 分钟，两位数  |
| s    | 0-59  | 秒            |
| ss   | 00-59 | 秒，两位数    |
