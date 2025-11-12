function fileHeader(defaultMessages = []) {
    return [
          'SPDX-FileCopyrightText: 2025 Jack Henry',
          '',
          'SPDX-License-Identifier: Apache-2.0',
          '',
      ...defaultMessages,
    ];
  };
  module.exports = { fileHeader };