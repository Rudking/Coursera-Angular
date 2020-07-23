class B {
    public final String f1() {
        return "fb";
    }
}

class D extends B {
    public String f1() {
        return "fd";
    }
}
class Base {
    public String f1() {
        return "f1";
    }
    public String f2() {
        return f1();
    }
}

public class Try extends Base {
    protected String f1() {
        return super.f1() + "t";
    }
    public String f2() {
        return super.f2();
    }
}

class sdfs{


 public static void main(String[] args) {
        
sdfs t= new sdfs();
t.f1();
    }
}
