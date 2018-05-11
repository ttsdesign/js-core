Assert("Test".IsType("String") == true, "Object.prototype.IsType(String)");
Assert(true.IsType("Boolean") == true, "Object.prototype.IsType(Boolean)");
var n = 15;
Assert(n.IsType("Number") == true, "Object.prototype.IsType(Number)");
Assert([1,2].IsType("Array") == true, "Object.prototype.IsType(Array)");
Assert({a:1, b:2}.IsType("Object") == true, "Object.prototype.IsType(Object)");
function TestFunc () {};
Assert(TestFunc.IsType("Function") == true, "Object.prototype.IsType(Function)");

Assert("Test".IsType("Number") == false, "Object.prototype.IsType(Number1)");
Assert(true.IsType("String") == false, "Object.prototype.IsType(Boolean1)");
var n = 15;
Assert(n.IsType("Object") == false, "Object.prototype.IsType(Object1)");
Assert([1,2].IsType("Boolean") == false, "Object.prototype.IsType(Boolean1)");
Assert({a:1, b:2}.IsType("Function") == false, "Object.prototype.IsType(Function1)");
function TestFunc () {};
Assert(TestFunc.IsType("Array") == false, "Object.prototype.IsType(Array1)");
