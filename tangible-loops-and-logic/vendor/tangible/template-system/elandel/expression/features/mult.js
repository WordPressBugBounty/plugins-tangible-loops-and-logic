import { binary } from '../parse.js'
import { operator, compile, prop } from '../compile.js'
import { PREC_MULT, PREC_ASSIGN } from '../const.js'

binary('*', PREC_MULT),
  operator(
    '*',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) * b(ctx)),
  )
binary('/', PREC_MULT),
  operator(
    '/',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) / b(ctx)),
  )
binary('%', PREC_MULT),
  operator(
    '%',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) % b(ctx)),
  )

binary('*=', PREC_ASSIGN, true)
operator(
  '*=',
  (a, b) => (
    (b = compile(b)),
    prop(a, (container, path, ctx) => (container[path] *= b(ctx)))
  ),
)

binary('/=', PREC_ASSIGN, true)
operator(
  '/=',
  (a, b) => (
    (b = compile(b)),
    prop(a, (container, path, ctx) => (container[path] /= b(ctx)))
  ),
)

binary('%=', PREC_ASSIGN, true)
operator(
  '%=',
  (a, b) => (
    (b = compile(b)),
    prop(a, (container, path, ctx) => (container[path] %= b(ctx)))
  ),
)
