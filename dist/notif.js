/*
 * AngularJs slick notification service
 * @author Uday Hiwarale <uhiwarale@gmail.com>
 * https://github.com/thatisuday/ng-slick-notif
**/

(function(){
	'use strict';
	
	angular.module('thatisuday.notif', []).provider('$notif', function(){
		// Default operations
		var defOps = {
			msg : 'Please provide a message.',
			position : 'top',
			type : 'default',
			screen : 'desktop',
			width : 600,
			bgColor : '#fff',
			color : '#333',
			txtAlign : 'left',
			timeout : 5000,
			multiline : false
		};
		
		//Current session timeout
		var session;
		
		//Slide show animate notif
		var slideInNotif = function(elem, currOps){
			elem.style.opacity = 1;
			
			//Set offset position to start
			if(currOps.position == 'bottom'){
				elem.style.bottom = -elem.offsetHeight - 10 + 'px';
			}
			else{
				elem.style.top = -elem.offsetHeight - 10 + 'px';
			}
			
			//Add animate class
			elem.className = 'animate ' + elem.className;
			
			//Set offset position to place
			setTimeout(function(){
				if(currOps.position == 'bottom'){
					elem.style.bottom = ((currOps.screen == 'mobile')) ? '15px' : '0';
				}
				else{
					elem.style.top = ((currOps.screen == 'mobile')) ? '15px' : '0';
				}
			}, 100);
		}
		
		
		//Hide notif
		var hideNotif = function(currOps){
			//Clear timeout of auto closing
			clearTimeout(session);
			
			var notifElem = document.getElementById('slick-notif');
			
			if(notifElem){
				//Set offset position to end
				if(currOps.position == 'bottom'){
					notifElem.style.bottom = -notifElem.offsetHeight - 10 + 'px';
				}
				else{
					notifElem.style.top = -notifElem.offsetHeight - 10 + 'px';
				}
				
				//Remove DOM element after 0.5s
				setTimeout(function(){
					if(notifElem && notifElem.parentNode){
						notifElem.parentNode.removeChild(notifElem);
					}
				}, 500);
			}
		};
		
		
		
		return {
			setOptions : function(newOps){
				angular.extend(defOps, newOps);
			},
			show : function(passedOps){
				var currOps = angular.extend({}, defOps, passedOps);
				
				//Remove old element
				hideNotif(currOps);
				
				//Create new notif element
				var newNotifElem = document.createElement('DIV');
				newNotifElem.id = 'slick-notif';
				newNotifElem.className  = currOps.type + ' ' + currOps.position + ' ' + currOps.screen;
				newNotifElem.textContent = currOps.msg;
				newNotifElem.style.width = currOps.width + 'px';
				newNotifElem.style.marginLeft = -currOps.width/2 + 'px';
				newNotifElem.style.backgroundColor = currOps.bgColor;
				newNotifElem.style.color = currOps.color;
				newNotifElem.style.textAlign = currOps.txtAlign;
				newNotifElem.style.opacity = 0;
				
				//Multiline
				if(currOps.multiline){
					newNotifElem.className = newNotifElem.className + ' multiline';
				}
				
				//Append notif element
				document.body.appendChild(newNotifElem);
				
				//Slide in animation
				slideInNotif(newNotifElem, currOps);
				
				//Add click event listener to hide
				newNotifElem.addEventListener('click', function(){
					hideNotif(currOps);
				});
				
				//Hide on timeout
				session = setTimeout(function(){
					hideNotif(currOps);
				}, currOps.timeout);
			},
			'$get' : function(){
				return this.show;
			}
		};
	});
	
})();
 
 