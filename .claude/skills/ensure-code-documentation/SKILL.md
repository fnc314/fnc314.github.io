---
name: ensure-code-documentation
description: A skill to ensure that code is properly documented, including docstrings, comments, TypeDoc compliant annotations, proper JSDoc/TSDoc comments, and, where possible, properly formatted and annotated code samples.
---

# Documentation Enforcement Skill

**Goal**: Ensure that all code is properly documented with clear and comprehensive docstrings, comments, and annotations. This includes adhering to TypeDoc standards, using proper JSDoc/TSDoc comments, and providing well-formatted code samples where applicable.

## Implementation Guidelines

1. **Check What's Already There**:
    - Review existing code for documentation. Identify areas that lack docstrings, comments, or proper annotations.
    - Correct any existing documentation that is incomplete, inaccurate, incorrectly formatted, or with invalid linking (external or cross code-base).
    - Spelling and grammar should be correct, and the writing in the third-person inclusive voice (use `we` instead of `I` or `you`).

2. **Complete Incomplete Documentation**:
    - For code that is documented *incompletely*, prioritize fleshing out existing documentation and targeting 100% file coverage before adding new documentation to undocumented files.
    - Review all documentation as an entire file (for single-definition files) as a cohesive document; it should read as cohesively as the code is organized.
    - Files that contain multiple definitions should read as if each `export`-ed definition is a separate file.  For non `export`-ed definitions, documentation can be more brief and should link to the relevant `export`-ed definition(s) for more information.

3. **Add New Documentation**:
    - For code that is completely undocumented, analyze the intent and use cases of the code and generate comprehensive documentation including:
      - Proper `JSDoc`/`TSDoc` `@` tags
      - Accurate type declarations
      - Code samples and referential links where applicable

4. **Maintain Consistency**:
    - Ensure that all documentation follows a consistent style and format across the codebase.  Tone must be from a single voice (third-person inclusive) and the writing style should be clear, concise, and informative.
    - Use consistent formatting for code samples, including proper indentation and syntax highlighting, adhering to the `2 space` indentation convention and patterns of the codebase.

5. **README.md Files**:
    - Add an `index`-like `README.md` file to each `src/components` entry.
    - Treat each `src/components/` as something that will be published as an **independent** package (with its own `package.json` and the like).