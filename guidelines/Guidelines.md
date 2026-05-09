# General Guidelines

* Always generate code using React with functional components and hooks
* Use Next.js App Router conventions — all components go in `app/` or `components/` directory
* Use TypeScript for all files (.tsx / .ts)
* Use Tailwind CSS for all styling — no inline styles, no CSS modules, no styled-components
* Never use class components
* Use named exports for all components
* Only use absolute positioning when necessary — prefer flexbox and grid for layouts
* Keep components small and focused — split helper functions and subcomponents into separate files
* Refactor and clean up code as you go
* Always make layouts mobile-first and fully responsive

---

# Design System Guidelines

* Base font-size: 16px
* Use `rem` units for font sizes, `px` only for borders and small fixed elements
* Border radius scale: `rounded-sm` (4px) → `rounded-md` (8px) → `rounded-xl` (16px) → `rounded-full`
* Spacing scale: follow Tailwind defaults (4px base unit)
* Never mix multiple font families in one component — pick one per project
* Icons: always use `lucide-react` — never embed raw SVG inline unless custom
* Images: always use `next/image` — never use `<img>` tag directly
* Date format: "6 Jan 2025" — never use ISO or MM/DD/YYYY format

---

## Color Tokens

* Always define colors as CSS variables in `globals.css`, not hardcoded hex in components
* Reference colors via Tailwind's `var(--color-name)` or extend `tailwind.config`
* Dark mode: use `dark:` Tailwind prefix — never duplicate components for dark/light

---

## Typography

* Headings: font-bold, tracking-tight
* Body: font-normal, leading-relaxed
* Labels / badges / caps: text-xs, tracking-widest, uppercase
* Never use more than 3 font weights in one page

---

## Button

### Variants
* **Primary** — solid background, high contrast text. One per section max.
* **Secondary** — outlined border, transparent background. Use alongside primary.
* **Ghost** — no border, no background. For low-emphasis actions only.
* **Destructive** — red background. Only for delete or irreversible actions.

### Rules
* Always include hover and focus states
* Minimum touch target: 44x44px
* Never use a dropdown if there are 2 or fewer options — use buttons instead
* Always use action-oriented labels: "Save Changes", "Delete Item" — not just "OK"

---

## Form & Input

* Always show visible labels — never rely on placeholder text as the only label
* Show inline error messages below the field, in red, with an icon
* Required fields must be marked with `*`
* Use controlled components with `useState` or React Hook Form
* Validate on blur, not only on submit

---

## Card

* Use consistent padding: `p-4` (mobile) → `p-6` (desktop)
* Always have a visible border or shadow — never borderless cards on white backgrounds
* Interactive cards must have hover state (scale or shadow increase)
* Card content order: image → title → description → action

---

## Navigation

* Sticky navbar with backdrop blur on scroll
* Mobile: hamburger menu — max 5 items in bottom nav if used
* Active link must have a visible indicator (underline, dot, or color change)
* Never use more than 2 levels of dropdown nesting

---

## Responsive Rules

* Mobile-first: start with smallest breakpoint, scale up
* Breakpoints: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px · `2xl` 1536px
* Grid: 1 col mobile → 2 col tablet → 3-4 col desktop
* Never hide important content on mobile — collapse or stack instead
* Touch targets minimum 44px height on mobile