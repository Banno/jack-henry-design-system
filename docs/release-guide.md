<!--
SPDX-FileCopyrightText: 2025 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# Release guide

## Release cadence

Currently, all Design System assets from both design and engineering, with the exception of some documentation, are versioned together. This means that with each release, changes to Figma UI kits, design tokens, component code, and documentation are all aligned with the same release number and published simultaneously. This ensures all assets accurately represent the state of the system.

In alignment with our two-week sprint cycles; generally at the start of a new sprint every other Monday, UI Kits, code packages, and documentation are released to the community. For major releases, only features that have been upgraded to an alpha state or higher will be released.

## Release types

### Major

Major releases tend to include larger sets of breaking changes and more complex updates which are planned well in advance. To minimize the impact on authors, a public release is infrequent with major releases governed by our pre-release process. During the pre-release phases we may release in alignment with our two-week sprint cycles until the scope of the release reaches a stable state and can be released to the public.

### Minor

Minor releases are released publicly in alignment with our two-week sprint cycles; generally at the start of a new sprint every other Monday. These releases do not include breaking changes, but will contain new features and bug fixes.

### Patch

Patch releases are released publicly in alignment with our two-week sprint cycles. The release contains only bug fixes.

### Hotfix

Hot fixes are triggered by the discovery of a severe, blocking bug and are released as soon as a fix is implemented. The release is considered an emergency patch release.

### Experimental

On occasion, we may release an experimental feature or package independent of our normal release cadence to test a feature and quickly iterate without disrupting stable packages. Experimental releases are versioned independently of our normal releases.

## Semantic versioning

The design system follows Semantic Versioning rules defined here: [semver.org](https://semver.org/). 

Version numbering:

Each version number maps to the following: MAJOR.MINOR.PATCH. 

Pre-release version numbers map to MAJOR.MINOR.PATCH-<PRE-RELEASE-STAGE>.PACKAGE-NUMBER

Increment the:

MAJOR version when you make an incompatible change of any kind. This will typically result in a breaking change.

MINOR version when you add functionality or make any changes that do not result in incompatibility. This should be the most common version increment.

PATCH version when you fix a bug, including a hotfix, that does not result in a breaking change.

PRE-RELEASE-STAGE: See Release Phases section.

PACKAGE-NUMBER each time a package is published.

Pre-release versions will follow the below conventions for each version.

1.0.0-alpha.1, 1.0.0-alpha.2, 1.0.0-alpha.n

1.0.0-beta.1, 1.0.0-beta.2, 1.0.0-beta.n

1.0.0-rc.1, 1.0.0-rc.2, 1.0.0-rc.n

When in a pre-release state, we do not increment minor or patch numbers. The numeric identifier defined in the pre-release metadata is incremented each time a package is published. Minor and patch versions will generally not follow a pre-release process. Stable releases will use the following conventions:

1.0.0, 1.1.0, 1.1.1

## Release phases

The process to move from one release phase to another is at the discretion of the design system team. Whether a release is upgraded to the next phase is determined by a number of possible criteria including:

Progress toward completing the release scope.

Whether testing is still producing bugs.

Whether any of the bugs are showstoppers.

Successful completion of a11y testing.

And more...

### Pre-alpha

All activities including discovery, design, and engineering that occur prior to a package release.

### Alpha

Represents an unstable version that may change significantly and may be missing features that will be part of the final release. The release has not been thoroughly tested for integration issues and is not suitable for production use. Documentation and support may be minimal if available. The primary audience for this release are those interested in previewing technical changes.

### Beta

Generally considered feature-complete and more stable, but may contain bugs. The scope of the release should not significantly change. This release is suitable for early adopters that want access to new features and bug fixes. Changes may still occur.

### Release candidate (RC)

A stable version that is undergoing a final round of testing. This version will be released to the public if no showstopper bugs are reported during a testing cycle.

### General availability (GA) - Stable release

Represents the last release candidate version where no major issues were found. The version is considered stable and ready for production use. The team has deemed this release as code-complete and any remaining minor bugs are backlogged. All future changes will result in a package version increase and follow the defined versioning process.

## Breaking changes

-Breaking changes are defined as any change that will introduce code incompatibility or changes in style that require an author to implement updates in order to ensure the application will function or appear as expected. Some examples include:
+A breaking change is any change that requires an author to update their code for the application to function or render as expected. Some examples include:
 
-Code deprecations such as tokens, properties, events, or components.
+Removing a token, CSS custom property, attribute, property, event, slot, or component. Marking one as deprecated is not breaking; see Deprecations.
 
-Renaming any part of a component’s public interface such as its tag name, an attribute, a property, or event.
+Renaming any part of a component’s public interface such as its tag name, an attribute, a property, an event, a slot, or a CSS custom property.
 
-Style changes that include spatial, color, and typography.
+Changing a component’s default behavior so that existing markup does something different.
+
+Visual changes that leave the public interface intact — spacing, color, typography, elevation, and state styling — are not breaking. They ship in minor releases and are called out in the release notes. Authors who run visual regression tests should expect snapshot updates on minor releases.
 
Breaking changes will result in a major version increase and will include a migration plan to assist authors in upgrading to the new version. 

## Deprecations

A deprecated feature indicates that we plan to stop supporting and remove a feature from the Design System. As we identify features to deprecate, if a replacement feature is available, we will provide guidance for using an existing feature in its place or introduce new functionality through a minor version release. This process provides authors with enough time to migrate off the deprecated feature before the breaking change occurs in a major release. We will strive to provide adequate notice of upcoming deprecations when possible.

## Release Partner

A group of designers and/or engineers (authors) that frequently test alpha and beta versions in order to provide early feedback to the design system team. Some criteria that may be used for qualifying as a release partner includes:

The partner is not risk averse and understands that frequent, sometimes breaking changes will occur.

Has a moderately complex application that will assist in testing all the facets and edge cases of the design system.

Enjoys finding bugs and providing feedback.

Have adopted the design system throughout their organization.
