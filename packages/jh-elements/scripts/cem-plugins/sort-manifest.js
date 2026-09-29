// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// Sorts modules by path to make analyzer output deterministic across runs.
// Without this, module order depends on filesystem glob traversal, producing
// large no-op diffs.
export function sortManifestPlugin() {
  return {
    name: 'sort-manifest',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules?.sort((a, b) =>
        (a.path ?? '').localeCompare(b.path ?? '')
      );
    }
  };
}
