შექმენით node.js-ის სკრიპტი `onlineStatus.js`.

მოცემულია ობიექტი:

```js
const servers = {
  facebook: [{ username: "turbo-booster", isOnline: false }],
  discord: [
    { username: "mailbox_2", isOnline: true },
    { username: "Leanne", isOnline: false }
  ],
  twitter: [
    { username: "panda_321", isOnline: true },
    { username: "motor_bike5", isOnline: true }
  ],
  instagram: [
    { username: "goldenapple", isOnline: false },
    { username: "violin_91", isOnline: true },
    { username: "hillsam", isOnline: true },
    { username: "monosurfer", isOnline: true }
  ]
}
```

## 1.
შექმენით arrow ფუნქცია სახელად `getStatusText`, რომელსაც არგუმენტად გადაეცემა სერვერის მომხმარებლების სია (Array). ფუნქციამ უნდა გაფილტროს online მომხმარებლები შექმნას და *დააბრუნოს* სტატუსის შესაბამისი ტექსტი მომხმარებლების რაოდენობის მიხედვით.

სტატუსის ტექსტის ინსტრუქცია:

- თუ არცერთი მომხმარებელია online, "No one online".
- თუ 1 მომხმარებელია online, "\<username1> online".
- თუ 2 მომხმარებელია online, "\<username1> and \<username2> online".
- თუ 2-ზე მეტი მომხმარებელია online, "\<username1>, \<username2> and \<remainingUsers> more online".

`remainingUsers` არის პირველი ორი მომხმარებლის გარდა სხვა online მომხმარებლების **რაოდენობა**.

ეს სტატუსი უნდა შეიქმნას და დაიპრინტოს თითოეული სერვერისთვის (facebook, discord, twitter, instagram)

### 2.
პროგრამის გაშვებისას კონსოლში ერთიანად უნდა დაიპრინტოს 5 ხაზი:

```
User status:
FACEBOOK: No one online
DISCORD: mailbox_2 online
TWITTER: panda_321 and motor_bike5 online
INSTAGRAM: violin_91, hillsam and 1 more online
```

ყურადღება მიაქციეთ, სერვერის სახელი არის uppercase (discord -> DISCORD).

დასრულების შემდეგ, ატვირთეთ `onlineStatus.js` ფაილი.

---

ობიექტებში ციკლის გამოსაყენებლად ნახეთ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

ან დაგუგლეთ "Loop through objects in JS"

#### რა არის Arrow function?

https://www.programiz.com/javascript/arrow-function

https://webreference.com/javascript/es6/arrow-functions/
