<!--
SPDX-FileCopyrightText: 2025 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# Forge Design System

Welcome to our monorepo! The Forge Design System is a collection of reusable components, guided by clear visual and user experience
standards that help teams build great products. The design system is informed by internal Jack Henry patterns and extensive
UX research. We've solved many of the common UX problems and baked in accessibility so that you can focus on your product's 
unique needs. It's a living system constantly growing, with frequent releases that include new features and improvements. The Forge Design System will help your product teams by:

- Establishing brand and UX consistency, ensuring all products are aligned to a set of standards.
- Reduce time to market through design and code reuse. No need to build from scratch.
- Solving common uses cases, enabling teams to focus on complex problems unique to your product.
- Creating a foundation for accessibility and internationalization.

## Principles

### Framework agnostic

We have the modern web in mind. Our components are built on native web component technologies and standards that are framework agnostic. You’re not 
locked into a particular framework out of the box and our components will work comfortably within the tech stack of your choice if needed.

### Modular

All our components are designed and engineered to be reusable and work seamlessly together to help you build great applications as quickly as possible 
with as little code as possible.

### Accessible

We've baked in accessibility support around every corner and aligned with W3C's WCAG standards. Each component is thoughtfully crafted to take into account 
the needs of all users. We've solved common accessibility issues for you so that you can be confident our components work everywhere and for everyone.

### Consistency

Our components are built with a foundation of robust design tokens that enable white label theming of your products. We've unlocked theming hooks at the
component level enabling precise control over your application's look and feel, helping you achieve a consistent user experience throughout your products.

### Scalable

Our Design System is designed to be scalable, ensuring that it can grow and adapt to meet the evolving needs of our community. To achieve this, we
prioritized extensibility and flexibility to ensure our components can be extended for your use cases and adapted to your brand. The Forge Design System 
has community in mind. Our system is constantly evolving with frequent releases that include new features, bug fixes, and qualify of life improvements 
driven by community feedback.

### Performant

We prioritize performance by minimizing code bloat, carefully managing dependencies, and ensuring that our components are lightweight 
and optimized for speed. We achieve this by working as closely to the browser as possible, using modern web technologies to improve performance 
without sacrificing functionality.

### DX Driven

Designer and Developer experience are a core concern and we've invested heavily to ensure our components stay out of your way. With a declarative and intuitive 
API and extensive documentation at your disposal, our components will fit right into your development process without the need to learn a new system, letting 
you focus on solving high impact problems unique to your domain.

## Getting started

If you're just getting started, we highly recommend you first visit [jackhenry.design](https://jackhenry.design/) to learn more about the Forge Design System and 
review it's usage guidelines and style guide. If you're ready to dive into the technical side, visit our [Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/welcome-about-jh--docs) instance for documentation and to test drive our components.

| Package name         | Description                          |
|----------------------|--------------------------------------|
| [@jack-henry/jh-elements](./packages/jh-elements/)    | Web components                       |
| [@jack-henry/jh-tokens](./packages/jh-tokens/)  | Design tokens                        |
| [@jack-henry/jh-icons](./packages/jh-icons/) | SVG and Web component icons |

## Documentation

We currently maintain two documentation sites:

* [Jackhenry.design](https://jackhenry.design) focuses on introducing the underlying concepts of the Forge Design System, usage guidelines, and a style guide.
* [Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/welcome-about-jh--docs) focuses on technical implementations and considerations 
for engineers, author guidance, and a playground where you can test drive our components.

## Contributing

We are currently not accepting PRs, however there are a number of ways you can contribute in the form of feedback such as requesting features, reporting bugs,
and participating in our discussions space.

## Release guide

Release cadence, versioning, release phases, breaking changes, and deprecations: [docs/release-guide.md](./docs/release-guide.md)
