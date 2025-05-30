import { access } from '../parse.js'
import { operator, compile, prop } from '../compile.js'
import { PREC_ACCESS } from '../const.js'

// a(b,c,d), a()
access('()', PREC_ACCESS)
operator(
  '()',
  (a, b, args) =>
    b !== undefined &&
    ((args = !b
      ? () => [] // a()
      : b[0] === ','
        ? ((b = b.slice(1).map((b) => (!b ? err() : compile(b)))),
          (ctx) => b.map((arg) => arg(ctx))) // a(b,c)
        : ((b = compile(b)), (ctx) => [b(ctx)])), // a(b)
    // a(...args), a.b(...args), a[b](...args)
    prop(a, (obj, path, ctx) => obj[path](...args(ctx)), true)),
)
