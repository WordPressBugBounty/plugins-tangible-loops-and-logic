import { binary, err } from '../parse.js'
import { compile, operator, operators, prop } from '../compile.js'
import { PREC_ASSIGN } from '../const.js'

// assignments
binary('=', PREC_ASSIGN, true)
operator(
  '=',
  (a, b) => (
    (b = compile(b)),
    // a = x, ((a)) = x, a.b = x, a['b'] = x
    prop(a, (container, path, ctx) => (container[path] = b(ctx)))
  ),
)
