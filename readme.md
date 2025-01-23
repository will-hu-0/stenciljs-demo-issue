# Description

Our projects get failed when upgrade the `stencil/core` from `4.23.0` to `4.23.2`, we encounter a bunch of errors `Cannot read properties of null (reading 'nodeType')` during pagination.

I created this simple repository to reproduce it by using the latest version `4.24.0`.

From the observation, it usually happens when the code something like

```js
@State() ifelse: boolean;

....
<div class={`ClassA ${this.ifelse ? 'ClassB' : 'ClassC'}`}>
  {this.array.maps(x => (
    ......
  ))}
</div>
```

Not sure what happened?
