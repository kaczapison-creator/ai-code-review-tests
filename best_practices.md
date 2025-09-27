# Best Practices for Code Review with o4-mini

## Tailwind CSS Guidelines

- Prefer using semantic class names like 'size-4' instead of explicit 'h-4 w-4' to improve code readability and consistency.
- The use of arbitrary values in Tailwind classes (e.g., `h-[18px]` or `w-[10px]`) is prohibited.
- If arbitrary values are detected, suggest the closest built-in Tailwind equivalents, for example, instead of `h-[18px]`, recommend `h-4` or `h-5`.
- Use only predefined Tailwind classes available in the official documentation to ensure consistency and scalability of styles.
- Ensure CSS classes from Tailwind are properly merged to avoid conflicts and redundancy, for example by recommending use of utilities like `tailwind-merge`.
- When multiple utility classes apply similar properties, recommend merging them into a single, conflict-free class string.

## Button Requirements

- Every `<button>` element must include a `type` attribute (e.g., `type="button"`, `type="submit"`, or `type="reset"`).
- Verify the presence of the `type` attribute on buttons and flag its absence as an issue for correction.

## SVG Usage

- Avoid using inline SVG directly in components.
- Place SVGs in separate files and import them as reusable components or assets.
- Use tools like SVGR to convert SVG files into React components for better reusability and maintainability.
- This approach improves code clarity, reduces duplication, and facilitates styling with Tailwind classes.

## Code Quality and Formatting

- Maintain consistent naming conventions and HTML/JSX structure in line with team practices.
- Favor clarity and simplicity of code, avoid unnecessary complexity.
- Document key components and functions using appropriate comments.

## General

- Follow HTML security standards and accessibility best practices (e.g., aria attributes, readability).
- Provide constructive review comments including alternative suggestions and rationale for improvements.
