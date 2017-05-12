interface Base {
    x: {
        a?: string; b: string;
    }
}

interface Base2 {
    x: {
        b: string; c?: number;
    }
}

interface Derived extends Base, Base2 {
    x: { b: string }
}

// comment above TSInterfaceDeclaration
interface Derived2 extends Base, Base2 { // comment next TSInterfaceDeclaration
    // comment above TSTypeLiteral
    x: { 
      a: number; 
      // comment inside of ObjectTypeAnnotation
      b: string 
    }
    // comment below TSTypeLiteral
}

interface Derived3 extends Base, Base2 {
    x: { a: string; b: string }
}

