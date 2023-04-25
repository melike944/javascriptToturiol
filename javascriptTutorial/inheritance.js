class A {

    a = 100;
    display() {
        console.log(this.a)

    }

}


class B  extends A{
    b = 40;
    show() {
        console.log(this.b)

    }
}
t=new B();
t.show();