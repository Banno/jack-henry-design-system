function fileHeader(defaultMessages = []) {
    return [
      //REUSE-IgnoreStart
          'SPDX-FileCopyrightText: 2025 Jack Henry',
          '',
          'SPDX-License-Identifier: Apache-2.0',
      //REUSE-IgnoreEnd
          '',
      ...defaultMessages,
    ];
  };
  module.exports = { fileHeader };