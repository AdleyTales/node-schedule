const schedule = require('node-schedule');

/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

每分钟的第30秒触发： '30 * * * * *'

每小时的1分30秒触发 ：'30 1 * * * *'

每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

每周1的1点1分30秒触发 ：'30 1 1 * * 1'

 */


//每分钟的第3秒 触发回调
// var j = schedule.scheduleJob('3 * * * * * ', function(){
//   console.log(Date());
// });


// 5秒的倍数 每5秒执行一次
// var j = schedule.scheduleJob('*/5 * * * * * ', function(){
//   console.log(Date());
// });

// 3分钟的倍数 每3分钟执行一次  每分钟的第0秒  // 1-60分钟的是3的倍数的分钟 0 3 6 9 12 15 18 21 24 ... 
/*
	Sun Sep 30 2018 11:21:00 GMT+0800 (CST)
	Sun Sep 30 2018 11:24:00 GMT+0800 (CST)
	Sun Sep 30 2018 11:27:00 GMT+0800 (CST)
	Sun Sep 30 2018 11:30:00 GMT+0800 (CST)
	Sun Sep 30 2018 11:33:00 GMT+0800 (CST)
 */
// var j = schedule.scheduleJob('0 */3 * * * * ', function(){
//   console.log(Date());
// });

// console.log(j);

// =====
/*
	Sun Sep 30 2018 11:46:41 GMT+0800 (CST)
	Sun Sep 30 2018 11:46:46 GMT+0800 (CST)
	Sun Sep 30 2018 11:46:51 GMT+0800 (CST)
	Sun Sep 30 2018 11:46:56 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:01 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:06 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:11 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:16 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:21 GMT+0800 (CST)
	Sun Sep 30 2018 11:47:26 GMT+0800 (CST)
 */
var rule1 = new schedule.RecurrenceRule();
var times1  = [ 1,6,11,16,21,26,31,36,41,46,51,56 ];
rule1.second = times1;
schedule.scheduleJob(rule1, function(){
	console.log(Date());
});


