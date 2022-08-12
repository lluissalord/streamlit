// Raw data (in Apache Arrow format) for a dataframe
// that uses `PeriodIndex` for both `index` and `columns` attributes.
//
// pd.DataFrame(
//   [["foo", 100], ["bar", 200]],
//   index=pd.PeriodIndex(year=[2000, 2002], quarter=[1, 3]),
//   columns=pd.PeriodIndex(year=[2000, 2002], quarter=[1, 3]),
// )

export const PERIOD = new Uint8Array([
  255,
  255,
  255,
  255,
  40,
  4,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  14,
  0,
  6,
  0,
  5,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  0,
  1,
  4,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  12,
  0,
  0,
  0,
  4,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  144,
  2,
  0,
  0,
  4,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  224,
  252,
  255,
  255,
  112,
  2,
  0,
  0,
  4,
  0,
  0,
  0,
  99,
  2,
  0,
  0,
  123,
  34,
  105,
  110,
  100,
  101,
  120,
  95,
  99,
  111,
  108,
  117,
  109,
  110,
  115,
  34,
  58,
  32,
  91,
  34,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  34,
  93,
  44,
  32,
  34,
  99,
  111,
  108,
  117,
  109,
  110,
  95,
  105,
  110,
  100,
  101,
  120,
  101,
  115,
  34,
  58,
  32,
  91,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  112,
  101,
  114,
  105,
  111,
  100,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  112,
  101,
  114,
  105,
  111,
  100,
  91,
  81,
  45,
  68,
  69,
  67,
  93,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  93,
  44,
  32,
  34,
  99,
  111,
  108,
  117,
  109,
  110,
  115,
  34,
  58,
  32,
  91,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  48,
  48,
  48,
  81,
  49,
  34,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  48,
  48,
  48,
  81,
  49,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  117,
  110,
  105,
  99,
  111,
  100,
  101,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  111,
  98,
  106,
  101,
  99,
  116,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  44,
  32,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  48,
  48,
  50,
  81,
  51,
  34,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  48,
  48,
  50,
  81,
  51,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  105,
  110,
  116,
  54,
  52,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  105,
  110,
  116,
  54,
  52,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  44,
  32,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  111,
  98,
  106,
  101,
  99,
  116,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  112,
  101,
  114,
  105,
  111,
  100,
  91,
  81,
  45,
  68,
  69,
  67,
  93,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  93,
  44,
  32,
  34,
  99,
  114,
  101,
  97,
  116,
  111,
  114,
  34,
  58,
  32,
  123,
  34,
  108,
  105,
  98,
  114,
  97,
  114,
  121,
  34,
  58,
  32,
  34,
  112,
  121,
  97,
  114,
  114,
  111,
  119,
  34,
  44,
  32,
  34,
  118,
  101,
  114,
  115,
  105,
  111,
  110,
  34,
  58,
  32,
  34,
  52,
  46,
  48,
  46,
  49,
  34,
  125,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  118,
  101,
  114,
  115,
  105,
  111,
  110,
  34,
  58,
  32,
  34,
  49,
  46,
  51,
  46,
  48,
  34,
  125,
  0,
  6,
  0,
  0,
  0,
  112,
  97,
  110,
  100,
  97,
  115,
  0,
  0,
  3,
  0,
  0,
  0,
  60,
  1,
  0,
  0,
  240,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  18,
  0,
  24,
  0,
  8,
  0,
  6,
  0,
  7,
  0,
  12,
  0,
  0,
  0,
  16,
  0,
  20,
  0,
  18,
  0,
  0,
  0,
  0,
  0,
  1,
  2,
  20,
  0,
  0,
  0,
  188,
  0,
  0,
  0,
  8,
  0,
  0,
  0,
  32,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  76,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  196,
  255,
  255,
  255,
  28,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  13,
  0,
  0,
  0,
  112,
  97,
  110,
  100,
  97,
  115,
  46,
  112,
  101,
  114,
  105,
  111,
  100,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  65,
  82,
  82,
  79,
  87,
  58,
  101,
  120,
  116,
  101,
  110,
  115,
  105,
  111,
  110,
  58,
  110,
  97,
  109,
  101,
  0,
  0,
  0,
  0,
  8,
  0,
  12,
  0,
  4,
  0,
  8,
  0,
  8,
  0,
  0,
  0,
  32,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  123,
  34,
  102,
  114,
  101,
  113,
  34,
  58,
  32,
  34,
  81,
  45,
  68,
  69,
  67,
  34,
  125,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  65,
  82,
  82,
  79,
  87,
  58,
  101,
  120,
  116,
  101,
  110,
  115,
  105,
  111,
  110,
  58,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  0,
  0,
  0,
  0,
  208,
  255,
  255,
  255,
  0,
  0,
  0,
  1,
  64,
  0,
  0,
  0,
  200,
  255,
  255,
  255,
  0,
  0,
  1,
  2,
  16,
  0,
  0,
  0,
  32,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  50,
  48,
  48,
  50,
  81,
  51,
  0,
  0,
  8,
  0,
  12,
  0,
  8,
  0,
  7,
  0,
  8,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  64,
  0,
  0,
  0,
  16,
  0,
  20,
  0,
  8,
  0,
  6,
  0,
  7,
  0,
  12,
  0,
  0,
  0,
  16,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  1,
  5,
  16,
  0,
  0,
  0,
  28,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  50,
  48,
  48,
  48,
  81,
  49,
  0,
  0,
  4,
  0,
  4,
  0,
  4,
  0,
  0,
  0,
  255,
  255,
  255,
  255,
  248,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  22,
  0,
  6,
  0,
  5,
  0,
  8,
  0,
  12,
  0,
  12,
  0,
  0,
  0,
  0,
  3,
  4,
  0,
  24,
  0,
  0,
  0,
  56,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  24,
  0,
  12,
  0,
  4,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  140,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  7,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  40,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  40,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  3,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  3,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  102,
  111,
  111,
  98,
  97,
  114,
  0,
  0,
  100,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  200,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  120,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  130,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  255,
  255,
  255,
  255,
  0,
  0,
  0,
  0,
])
