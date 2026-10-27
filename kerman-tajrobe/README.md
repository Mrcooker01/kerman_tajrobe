# کرمان تجربه — صفحه راه‌های ارتباطی

پیاده‌سازی صفحه ارتباطی با Next.js در فرانت‌اند و Node.js + Express در بک‌اند. لینک‌ها و اطلاعات اصلی پروژه قبلی حفظ شده‌اند.

## پیش‌نیازها
- Node.js نسخه 20.9 یا جدیدتر
- npm
- اتصال اینترنت برای بارگذاری فونت Vazirmatn و آیکون‌های Font Awesome از CDN

## اجرا در حالت توسعه
از پوشه اصلی پروژه اجرا کن:

```bash
npm install
npm run dev
```

- فرانت‌اند: http://localhost:3000
- API: http://localhost:4000/api/contacts
- سلامت بک‌اند: http://localhost:4000/api/health

## ساخت نسخه production
```bash
npm run build
npm start
```

## تنظیمات اختیاری
- `PORT`: پورت Express (پیش‌فرض 4000)
- `FRONTEND_ORIGIN`: مبدأ مجاز CORS (پیش‌فرض `http://localhost:3000`)
- `API_URL`: آدرس API که Next.js از سمت سرور درخواست می‌کند (پیش‌فرض `http://localhost:4000/api/contacts`)

## محل تغییر لینک‌ها
اطلاعات تماس در `backend/src/data/contacts.js` قرار دارد. پس از تغییر، در حالت توسعه سرور Node به‌صورت خودکار راه‌اندازی مجدد می‌شود.

اگر API در دسترس نباشد، صفحه برای جلوگیری از ازکارافتادن کامل از داده‌های پشتیبان داخل `frontend/app/page.jsx` استفاده می‌کند.
