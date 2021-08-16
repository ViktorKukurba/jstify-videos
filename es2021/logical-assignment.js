let a = false;
let b = 'b';

/**
 * OR & Equals (||=)
 * Equal to
 * a || (a = b);
 * if (!a) {
 *   a = b;
 * }
 */
a ||= b;
 
/**
 * And & Equals (&&=)
 * Equal to
 * a && (a = b);
 * if (a) {
 *   a = b;
 * }
 */
// a &&= b;

/**
 * Nullish Coalescing & Equals (??=)
 * Equal to
 * a ?? (a = b);
 * if (a === null || a === undefined) {
 *   a = b;
 * }
 */
// a ??= b;

console.log(a, b);