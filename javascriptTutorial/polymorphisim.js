class shape {
    draw() {
       return ("this is shape..")
    }
}

class sq extends shape {
    draw() {
        return ("this is sq..")
    }
}

class cir extends shape {
    draw() {
        return ("this is cir..")
    }
}

let s = new shape();

s = new cir();
console.log(s.draw());