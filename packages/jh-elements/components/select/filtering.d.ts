// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

export namespace JhFilter {
    function filterList(items: any, searchTerm: any, key?: string): any;
    function filterInline(items: any, searchTerm: any, key?: string): any;
    function jumpAhead(items: any, buffer: any, activeIndex: any, key?: string): any;
}
