## Documentation

### `Home.tsx`

* **Purpose**: Main page component.
* **Imports**:

  * `MultilineTextFields`: JSON input/output handler.
  * `react-icons`: Social/contact icons.
  * `next/link`: For external links.
* **UI**:

  * Header with project title and social links.
  * Divider line.
  * `MultilineTextFields` component for JSON formatting.

---

### `MultilineTextFields.tsx`

* **Purpose**: Handles JSON input, prettification, error handling, and copying results.
* **State**:

  * `input`: Raw JSON input.
  * `formatted`: Prettified JSON or error result.
  * `isLoading`: Shows when external formatting is in progress.
  * `isCopied`: Toggles when text is copied.
* **Functions**:

  * `handlePrettify`:

    * Attempts `JSON.parse` + `JSON.stringify` with indentation.
    * If parsing fails, calls backend `main(input)` for error handling.
  * `handleCopy`:

    * Copies `formatted` JSON to clipboard using `copyToClipboard`.
    * Displays temporary "Copied!" state.
* **UI**:

  * Left textarea: user input.
  * Middle: `BasicButtons` triggers prettification.
  * Right textarea: displays prettified or error message.
  * Copy button (top-right) with dynamic state (`Copy` / `Copied!`).

---

### `BasicButtons.tsx`

* **Purpose**: Reusable button component.
* **Props**:

  * `title` (optional) – button label (defaults to `"Prettify"`).
* **UI**:

  * Material UI button with fixed width.

---

## Usage

1. Enter JSON in the left textarea.
2. Click **Prettify** to format it.
3. View the result in the right textarea.
4. Use the **Copy** button to copy prettified JSON.

---

## Project Structure

```
/components
  ├── Home.tsx               # Main page layout
  ├── MultilineTextFields.tsx # Handles input, formatting, copy
  ├── BasicButtons.tsx        # Reusable button component
/backend
  └── app.ts                  # Utility functions (e.g., prettify, copy)
```

---

## Author

**Victor Wariboko-West**

* [LinkedIn](http://linkedin.com/in/victor-wariboko-west-27787b233)
* [GitHub](https://github.com/VictorWest)
* [Twitter](https://x.com/officialv_west)
* [Email](mailto:victorwaribokowest@gmail.com)

