/*
 * SPDX-FileCopyrightText: 2013 Pieroxy <pieroxy@pieroxy.net>
 *
 * SPDX-License-Identifier: MIT
 */

import { _compress } from './_compress'
import { _decompress } from './_decompress'
import { compressToBase64URL, decompressFromBase64URL } from './base64URL'

export default {
  _compress,
  _decompress,

  compressToBase64URL,
  decompressFromBase64URL,
}
