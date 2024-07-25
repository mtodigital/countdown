
    if (document.getElementById('countdownTimer')) {
        pad = function (n, len) { // leading 0's
            var s = n.toString();
            return (new Array((len - s.length + 1)).join('0')) + s;
        };
        var day_Check = new Date();
        if (day_Check.getDay() == 0 || day_Check.getDay() == 6) {
            document.getElementById('countdownTimer').innerHTML = 'Order Now for Delivery Tuesday';
        }
        else if (day_Check.getDay() == 5 && day_Check.getHours() >= 14){
            document.getElementById('timeRemain').innerHTML = "Looks like you've missed todays delivery cut-off. <br>Order Now for Delivery Tuesday";
            document.getElementById('countdownTimer').innerHTML = 'NEXT-DAY DELIVERY<br>EXEPT ON WEEKENDS AND HOLIDAYS';
        }
        else {
            var timerRunning = setInterval(
                    function countDown() {
                        document.getElementById('timeRemain').innerHTML = 'ORDER WITHIN THE NEXT: ';
                        var now = new Date();
                        var target = 14; // 14:00hrs is the cut-off point
                        if(now.getDay() == 5 && now.getHours() >= 14){
                            document.getElementById('timeRemain').innerHTML = '';
                            document.getElementById('timeRemain').innerHTML = "Looks like you've missed todays Delivery cut-off. <br>Order Now for Delivery Tuesday";
                            document.getElementById('countdownTimer').innerHTML = '';
                            document.getElementById('forDelivery').innerHTML = '';
                            return;
                        }else if (now.getHours() >= target) {// missed the cutoff point. Use tomorrow instead
                            target += 24;
                        }
                        if (now.getDay() == 1 && now.getHours() < 14){
                            document.getElementById('forDelivery').innerHTML = ' For Delivery <span id="dateColour">Tuesday</span>';
                        }else if (now.getDay() == 1 && now.getHours() >= 14 || now.getDay() == 2 && now.getHours() < 14){
                            document.getElementById('forDelivery').innerHTML = ' For Delivery <span id="dateColour">Wednesday</span>';
                        }else if (now.getDay() == 2 && now.getHours() >= 14 || now.getDay() == 3 && now.getHours() < 14){
                            document.getElementById('forDelivery').innerHTML = ' For Delivery <span id="dateColour">Thursday</span>';
                        }else if (now.getDay() == 3 && now.getHours() >= 14 || now.getDay() == 4 && now.getHours() < 14){
                            document.getElementById('forDelivery').innerHTML = ' For Delivery <span id="dateColour">Friday</span>';
                        }else if (now.getDay() == 4 && now.getHours() >= 14 || now.getDay() == 5 && now.getHours() < 14){
                            document.getElementById('forDelivery').innerHTML = ' For Delivery <span id="dateColour">Monday</span>';
                        }
                        var hrs = (target - 1) - now.getHours();
                        if (hrs < 0)
                            hrs = 0;
                        var mins = 59 - now.getMinutes();
                        if (mins < 0)
                            mins = 0;
                        var secs = 59 - now.getSeconds();
                        if (secs < 0)
                            secs = 0;
                        var str = pad(hrs, 2) + '<span class="timer-text-small"> H&nbsp;&nbsp;</span>' + pad(mins, 2) + '<span class="timer-text-small"> M&nbsp;&nbsp;</span>' + pad(secs, 2) + '<span class="timer-text-small"> S&nbsp;&nbsp;</span>';
                        document.getElementById('countdownTimer').innerHTML = str;
                    }, 1000);
        }
    }