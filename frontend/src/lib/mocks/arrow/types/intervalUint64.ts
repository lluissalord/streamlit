/**
 * Copyright 2018-2022 Snowflake Computing Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Raw data (in Apache Arrow format) for a dataframe
// that uses `FloatIntervalIndex` for the `index` attribute.
//
// pd.DataFrame(
//   [["foo", 100], ["bar", 200]],
//   index=pd.IntervalIndex.from_arrays(
//       np.array([0, 1], dtype=np.uint64), np.array([1, 2], dtype=np.uint64)
//   ),
//   columns=pd.IntervalIndex.from_arrays(
//       np.array([0, 1], dtype=np.uint64), np.array([1, 2], dtype=np.uint64)
//   ),
// )

export const INTERVAL_UINT64 = new Uint8Array([
  255,
  255,
  255,
  255,
  184,
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
  168,
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
  192,
  252,
  255,
  255,
  136,
  2,
  0,
  0,
  4,
  0,
  0,
  0,
  121,
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
  105,
  110,
  116,
  101,
  114,
  118,
  97,
  108,
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
  101,
  114,
  118,
  97,
  108,
  91,
  117,
  105,
  110,
  116,
  54,
  52,
  44,
  32,
  114,
  105,
  103,
  104,
  116,
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
  40,
  48,
  44,
  32,
  49,
  93,
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
  40,
  48,
  44,
  32,
  49,
  93,
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
  40,
  49,
  44,
  32,
  50,
  93,
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
  40,
  49,
  44,
  32,
  50,
  93,
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
  105,
  110,
  116,
  101,
  114,
  118,
  97,
  108,
  91,
  117,
  105,
  110,
  116,
  54,
  52,
  44,
  32,
  114,
  105,
  103,
  104,
  116,
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
  0,
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
  176,
  1,
  0,
  0,
  100,
  1,
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
  13,
  28,
  0,
  0,
  0,
  220,
  0,
  0,
  0,
  8,
  0,
  0,
  0,
  40,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  252,
  0,
  0,
  0,
  204,
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
  15,
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
  105,
  110,
  116,
  101,
  114,
  118,
  97,
  108,
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
  56,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  40,
  0,
  0,
  0,
  123,
  34,
  115,
  117,
  98,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  117,
  105,
  110,
  116,
  54,
  52,
  34,
  44,
  32,
  34,
  99,
  108,
  111,
  115,
  101,
  100,
  34,
  58,
  32,
  34,
  114,
  105,
  103,
  104,
  116,
  34,
  125,
  0,
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
  52,
  255,
  255,
  255,
  108,
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
  24,
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
  5,
  0,
  0,
  0,
  114,
  105,
  103,
  104,
  116,
  0,
  0,
  0,
  214,
  255,
  255,
  255,
  64,
  0,
  0,
  0,
  152,
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
  4,
  0,
  0,
  0,
  108,
  101,
  102,
  116,
  0,
  0,
  6,
  0,
  8,
  0,
  4,
  0,
  6,
  0,
  0,
  0,
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
  40,
  49,
  44,
  32,
  50,
  93,
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
  40,
  48,
  44,
  32,
  49,
  93,
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
  0,
  0,
  0,
  0,
  255,
  255,
  255,
  255,
  72,
  1,
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
  72,
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
  188,
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
  10,
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
  0,
  0,
  0,
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
  5,
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
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
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
  255,
  255,
  255,
  255,
  0,
  0,
  0,
  0,
])
