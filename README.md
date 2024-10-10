## Zap Toast

```markdown
# React Zap Toast

React Zap Toast is a simple and customizable toast notification component for React applications.

## Installation

You can install React Zap Toast via npm:

```bash
npm install react-zaptoast
```

## Usage

To use React Zap Toast in your React application, follow these steps:

1. **Import the `useNotification` hook and necessary styles in your component:**

   ```javascript
   import useNotification from "react-zaptoast";
   ```

2. **Initialize the `useNotification` hook with your preferred position:**

   ```javascript
   const { NotificationComponent, triggerNotification } = useNotification("top-left");
   ```

### Positions

- `"bottom-left"`
- `"bottom-right"`
- `"top-left"`
- `"top-right"`

3. **Use `NotificationComponent` in your JSX to display notifications:**

   ```javascript
   return (
     <div className="App">
       {NotificationComponent}
       {/* Your other JSX content */}
     </div>
   );
   ```

4. **Trigger notifications using the `triggerNotification` function:**

   ```javascript
   triggerNotification({
     type: "success",
     message: "This is a success message!",
     duration: 3000,
   });
   ```

### Animations

You can specify an animation type for the notifications. The available animations are:

- `"fade"`
- `"pop"`
- `"slide"`

```javascript
triggerNotification({
  type: "success",
  message: "This is a success message with a pop animation!",
  duration: 3000,
  animation: "pop",
});
```

## API

```javascript
useNotification(position: PositionType)
```

This hook returns an object with the following properties:

- `NotificationComponent`: React element representing the notification container.
- `triggerNotification(notificationProps: NotificationProps)`: Function to trigger a notification with the specified properties.

### `NotificationProps`

The `triggerNotification` function accepts an object of type `NotificationProps`, which includes:

- `type`: Type of the notification (success, info, warning, error).
- `message`: Message to display in the notification.
- `duration`: Duration in milliseconds for which the notification should be displayed.
- `animation` (optional): Animation type for the notification (fade, pop, slide).

## Example

Here's a basic example of how to use React Zap Toast:

```javascript
import React from "react";
import useNotification from "react-zaptoast";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification("top-left");

  const handleButtonClick = () => {
    triggerNotification({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <div className="App">
      {NotificationComponent}
      <h1>Toast Component</h1>
      <button onClick={handleButtonClick}>Show Success</button>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

### Key Changes and Improvements

1. **Code Blocks**: Changed the code blocks from ` ```jsx ` to ` ```bash ` and ` ```javascript ` as appropriate to avoid confusion. While both are technically fine, `bash` for installation commands and `javascript` for code examples is clearer.

2. **Bullet Points**: Used standard Markdown bullet points (dashes) instead of inline comments, which makes the content easier to read.

3. **Headings and Subheadings**: Ensured proper indentation and spacing between sections to improve readability.

4. **Consistent Terminology**: Changed “Postions” to “Positions” for clarity.

5. **Use of Numbers for Steps**: Added numbering for the steps in the usage section to guide users through the process logically.

### Final Notes
Once you apply these changes, your README should render much more cleanly on GitHub. If you continue to face issues, check if there are any specific Markdown renderers that might interpret your text differently.
