შექმენით ახალი **backend** პროექტი Express.js-ის და Mongoose-ის გამოყენებით - URL Shortener.

შექმენით ახალი სქემა და მოდელი. მონაცემთა ბაზაში უნდა შეინახოთ URL დოკუმენტები ველებით: `originalUrl`, `shortUrl`, `createdAt` და `updatedAt`. 

დაამატეთ ეს **ოთხი endpoint** და დატესტეთ Insomnia პროგრამით:

### /urls - GET მეთოდი

აბრუნებს ყველა URL დოკუმენტს. *არ* დააბრუნოთ URL დოკუმენტების `updatedAt` და `_id` ველები. მოიძიეთ როგორ შეიძლება ველების გამორიცხვა ძიების შედეგიდან

![Insomnia /urls GET demo](/homework/descriptions/img-attachments/17-1.png)


### /urls - POST მეთოდი

უნდა იღებდეს json payload-ს: `originalUrl` და `customPath`. თუ `customPath` იქნება გადმოცემული, უნდა შეინახოთ, თუ არა - დააგენერეთ და შეინახეთ მოკლე random id (ამისთვის შეგიძლიათ გამოიყენოთ nanoid ბიბლიოთეკის მეთოდები, `npm i nanoid`, მოიძიეთ დოკუმენტაცია). მონაცემთა ბაზაში მხოლოდ **relative URL** შეინახეთ. პასუხის დაბრუნებისას express-ის კოდით წინ მიუწერეთ http://localhost:3000 (რაც არის თქვენი backend-ის მისამართი).

![Insomnia /urls POST demo 1](/homework/descriptions/img-attachments/17-2.png)

ამ ქვემოთა მაგალითში id ავტომატურად შეიქმნა, რადგან customPath არ მიუღია სერვერს:

![Insomnia /urls POST demo 2](/homework/descriptions/img-attachments/17-3.png)

### /urls/:shortUrl - GET მეთოდი

გადაცემული shortUrl-ის მიხედვით (id ან რაიმე სახელი) მონაცემთა ბაზაში უნდა მოძებნოს დოკუმენტი. მომხმარებელი უნდა გადაამისამართოს (`res.redirect`) ამ დოკუმენტის `originalUrl`-ზე

![Insomnia /urls/:shortUrl GET demo](/homework/descriptions/img-attachments/17-4.png)

### /urls/:shortUrl - PATCH მეთოდი

shortUrl-ის მიხედვით უნდა მოძებნოს URL დოკუმენტი. გადაცემული newOriginalUrl-ის მიხედვით უნდა განაახლოს მოძებნილი დოკუმენტის originalUrl:

![Insomnia /urls/:shortUrl PATCH demo](/homework/descriptions/img-attachments/17-5.png)

ვალიდაცია და error handling ამ დავალებაში *არ არის* საჭირო. თუ სურვილი გექნებათ დაამატეთ basic შემოწმებები.
