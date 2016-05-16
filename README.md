# ng-slick-notif
AngularJs slick notification service (Pure JavaScript)

![preview](http://i.imgur.com/lwi8DDe.png)

![preview](http://i.imgur.com/Q5f221P.png)

***

# Install
## Using bower
```
bower install ng-notif
```

## Manual install
Add `notif.js` and `notif.css` in `<head></head>` section of your page after you have included `angular.js`.

***

# Getting started
## Include $notif module
Include **thatisuday.notif** module in your app.
```
var myApp = angular.module('myApp', ['thatisuday.notif']);
```
## Global `$notif` configuration
You can configure `$notif` options before apps start running using `$notifProvider`. This will provide default options accross your app.
```
var myApp = angular.module('myApp', ['thatisuday.notif']).config(function($notifProvider){
	$notifProvider.setOptions({
		width:300,
		txtAlign:'center',
		color:'#fff',
		bgColor : '#000'
	});
});
```

### Options
| Option | value | Role |
| ------ | ----- | ---- |
| msg | _Any string_ | Sets default message to add in notification |
| position | **'top'**, 'bottom' | Place notification at top or bottom of the page |
| type | **'default'**,'success','info','error','warning' | Add different color effect |
| screen | **'desktop'**,'mobile' | Change shape of notification based on device. Use 'mobile' for mobile phone as it will be responsive.|
| width | **500** | Width of notification in pixels. This will be 100% in case of mobile screen by default. |
| bgColor | **'#fff'**, '#xxx' | Background color of notification |
| color | **'#333'**, 'xxx' | Font color of notification |
| txtAlign | **'left'**,'center','right' | Text alignment of notification text |
| timeout | **5000**, 'xxxx' | Time in milliseconds to autohide notification bar |
| multiline | **false**, true | Allow multiple lines to be displayed in notification. If set to `false`, only single notification line will be shown. |

## Launch notification
You must inject '$notif' service in your controller. Basic command to launch notif is `$notif(options)`;

```
myApp.controller('myCtrl', function($scope, $notif){
	$notif({
		msg:'This username has already been taken.',
		width:500,
		position:'top',
		screen:'desktop',
		txtAlign:'center',
		type : 'error',
		multiline : true
	});
});
```











