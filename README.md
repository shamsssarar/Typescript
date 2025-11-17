Q1. What are some differences between interfaces and types in TypeScript?

Ans: 

Interface:

১। একই নামে অনেকবার ডিক্লেয়ারেশন করা যায়।

২। ক্লাস দ্বারা implements করা যায়।

৩। অবজেক্টের গঠন করতে।

৪। নিজে নিজেকে রেফারেন্স করতে পারে।

type:

১। একই নামে একাধিক ডিক্লেয়ারেশন করা যায় না।

২। ক্লাস দ্বারা implements করা যায় না।

৩। অবজেক্ট, ইউনিয়ন, লিটারেল, টিউপল সহ প্রায় সব ধরনের টাইপ করতে।

৪। নিজে নিজেকে রেফারেন্স করতে পারে।


---
Q2. What is the use of the keyof keyword in TypeScript? Provide an example.

Ans:

keyof হলো TypeScript এর একটি বিশেষ শব্দ, যা একটি অবজেক্টের টাইপ থেকে সেই অবজেক্টের সব প্রপার্টির নামের ইউনিয়ন টাইপ।  keyof ব্যবহার করা হয় টাইপ সেফটি নিশ্চিত করার জন্য। যখন ডাইনামিকভাবে কোনো অবজেক্টের প্রপার্টি অ্যাক্সেস করি।

```TypeScript```
```ts
function getProperty(obj: Car, key: keyof Car): any {
    return obj[key];
}

const myCar: Car = {
    brand: "Toyota",
    model: 2024,
    color: "Red"
};

const carBrand = getProperty(myCar, "brand");
