თუ არ ხართ, დარეგისტრირდით codesandbox.io-ზე და დააკოპირეთ Job listings challenge, სადამდეც მივიყვანეთ: https://codesandbox.io/p/sandbox/job-listings-2-v22tyh (მარჯვენა ზედა კუთხეში დააჭირეთ fork-ს).

Job listings challenge: https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt აქ ნახავთ დიზაინის სურათს. მასალებში Figma-ს ფაილიც მაქვს ატვირთული, თუ დაგჭირდათ.

დავალება ეხება პირობით rendering-ს. გამოიყენეთ `?, &&, ||` ოპერატორები ან `if else`.

1. თუ ვაკანსია არის `new` ტიპის, გამოიტანეთ badge "new". სხვა შემთხვევაში არაფერი.
2. თუ ვაკანსია არის `featured` ტიპის, გამოიტანეთ badge "featured" და მარცხენა კიდეზე დაამატეთ მწვანე highlight. სხვა შემთხვევაში არაფერი დაამატოთ.
3. თუ ვაკანსიას არ აქვს კომპანიის ლოგო (`logo: null` ჩანაწერი `data.json`-ში), გამოიტანეთ `/images/company-placeholder.svg` სურათი. თუმცა "ხელით" არ უნდა შეცვალოთ `data.json`. Javascript-ით უნდა შეამოწმოთ არის თუ არა logo ატრიბუტი `null`. ეს სურათი უნდა იყოს წრიული, როგორც დანარჩენი კომპანიის ლოგოები.
4. ვაკანსიის ბარათში მესამე სვეტად დაამატეთ tag-ები: ახალ ფაილში შექმენით კომპონენტი `TagList.jsx`, რომელსაც prop-ად გადაეცემა tags სია. ამ სიის მიხედვით უნდა დააგენერიროს tag ელემენტები (ღილაკები ან ლინკები). `ListingCard.jsx`-მა უნდა დაარენდეროს `TagList` კომპონენტი და prop-ად გადასცეს tags სია. განლაგების/layout-ისთვის როგორც გინდათ შეცვალეთ HTML სტრუქტურა, თუ დაგჭირდებათ. რაც გინდათ წაშალეთ ან დაამატეთ, მთავარია დიზაინს ემთხვეოდეს.
5. კომპონენტები გადაიტანეთ `src/components` ფოლდერში. შესაბამისად შეცვალეთ import ჩანაწერები.

### პირობის ნომრები და შესაბამისი ვიზუალური ნაწილი:

![Job listing component](/homework/descriptions/img-attachments/4-1.png)

სად ვნახოთ `new, featured, tags` და ლოგოზე ინფორმაცია? ეს ინფორმაცია მოცემულია `data.json`-ში.

შენიშვნა tag-ებზე: `data.json`-ში, ვაკანსიის ობიექტებზე, *არ* გვაქვს ერთიანი სია `tags: [...]`. ნაწილ-ნაწილ არის მოცემული რამდენიმე ატრიბუტი, რომლებიც tag-ებად ითვლება: languages, tools, level და role. თქვენი მიზანია ეს ატრიბუტები ერთ სიად გააერთიანოთ Javascript კოდით (შეგიძლიათ გამოიყენოთ spread ოპერაცია) და ყველა დაარენდეროთ.

შეგახსენებთ, პირობითად შეგვიძლია გამოვიტანოთ ელემენტი, კომპონენტი. ან პირობითი მნიშვნელობა მივანიჭოთ კლასს, ტექტს. ამ თემაზე გადახედეთ გაკვეთილის მასალებს და დალინკულ საიტებს.
