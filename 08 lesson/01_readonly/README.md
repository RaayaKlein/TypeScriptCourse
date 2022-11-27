# Readonly

readonly - cannot be assigned to.

- We can add `readonly` properties inside a class.
- We can assign value to readonly properties - only in initializition line / in the constructor (only 1 option).
- Note: if the property is also `static` - init will occur only in definition line. (not in constructor).

### 2 methods to get `readonly`

1. We can create `readonly` property by private proerty, who has only `get` method.
2. We can create `readonly` property by the keyword `readonly`.

### readonly vs const:

1. readonly is for classes, const - regular variables.
   Const cannot be used in a class. readonly cannot be used outside a class.
2. readonly properties - do not have to get initial value, const must.
