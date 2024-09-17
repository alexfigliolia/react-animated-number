# Animated Number
A react component that animates between numeric values! 

<video src="https://github.com/user-attachments/assets/cf3777b5-9025-4576-878b-971312ef1e6b" width="auto" height="auto"></video>

## Installation
```bash
npm i @figliolia/react-animated-number
# or
yarn add @figliolia/react-animated-number
```

## Basic Usage
To animate numeric values and transition them between one another simply import the `AnimatedNumber` component.
```tsx
import { AnimatedNumber } from "@figliolia/react-animated-number";

export const LiveNumericValue = ({ value }: { 
  value: string | number 
}) => {
  return (
    <AnimatedNumber 
      delay={0}
      value={value} 
      duration={1500}
      timingFunction="cubic-bezier(0.33, 1, 0.68, 1)" />
  );
}
```
You may choose to wrap this component in `h1, h2, p, etc` tags to inherit the font-sizes, weights, and styling of your application.