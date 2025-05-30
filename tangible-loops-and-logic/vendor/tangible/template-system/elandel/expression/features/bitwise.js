import {
  PREC_OR,
  PREC_AND,
  PREC_SHIFT,
  PREC_XOR,
  PREC_PREFIX,
} from '../const.js'
import { unary, binary } from '../parse.js'
import { operator, compile } from '../compile.js'

unary('~', PREC_PREFIX),
  operator('~', (a, b) => !b && ((a = compile(a)), (ctx) => ~a(ctx)))

binary('|', PREC_OR),
  operator(
    '|',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) | b(ctx)),
  )

binary('&', PREC_AND),
  operator(
    '&',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) & b(ctx)),
  )

binary('^', PREC_XOR),
  operator(
    '^',
    (a, b) =>
      b && ((a = compile(a)), (b = compile(b)), (ctx) => a(ctx) ^ b(ctx)),
  )
