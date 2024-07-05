თქვენი მიზანია პირობითი დარენდერებისთვის შექმნათ ახალი **custom (გარე ბიბლიოთეკების დახმარების გარეშე)** კომპონენტები `If`, `Then` და `Else`. `If`-ს ერთ-ერთ prop-ად უნდა გადაეცემოდეს პირობა, რის მიხედვითაც დაარენდერებს `Then` ან `Else` კომპონენტში ჩასმულ ელემენტებს. 

**Before** - ჩვენთვის ნაცნობი პირობითი რენდერინგის კოდი ? ოპერატორით:

![Code demo - before custom if](/homework/descriptions/img-attachments/B1-1.png)

**After** - Custom `If/Then/Else`-ით დაწერილი პირობითი დარენდერება (გამოგზავნილ დავალებაში ეს კოდი უნდა ეწეროს და მუშაობდეს):

![Code demo - after custom if](/homework/descriptions/img-attachments/B1-2.png)

შენიშვნა: არ არის საჭირო ამ კომპონენტებმა ყველა შემთხვევაში იმუშაოს. ჩათვალეთ, რომ `If` კომპონენტს `Then` და `Else` კომპონენტები ყოველთვის გადაეცემა tag-ებს შორის (და მეტი არაფერი).

დაგჭირდებათ `children` prop, კონსოლში ნახეთ რა მნიშვნელობა აქვს `children`-ს და რა შეიძლება გამოგადგეთ.

Starter კოდი: https://codesandbox.io/p/sandbox/mz-react-starter-forked-jnq4c7
