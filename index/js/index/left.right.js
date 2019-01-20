

var num;
function zy(bq, jl, sd) {
    clearInterval(num);
    num = setInterval(function () {
        var v = bq.offsetLeft;
        if (v == jl) {
            clearInterval(num);
            return;
        }
        if (Math.abs(jl - v) < sd) {
            v = jl;
        }
        if (v > jl) {
            bq.style.left = v - sd + 'px';
        } else {
            bq.style.left = v + sd + 'px';
        }

    }, 10);
}

