

var num;
function yd(bq, jl, sd) {
    clearInterval(num);
    num = setInterval(function () {
        var v = bq.offsetTop;
        if (v == jl) {
            clearInterval(num);
            return;
        }
        if (Math.abs(jl - v) < sd) {
            v = jl;
        }
        if (v > jl) {
            bq.style.top = v - sd + 'px';
        } else {
            bq.style.top = v + sd + 'px';
        }

    }, 10);
}

