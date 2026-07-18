# 📁 دليل الفولدر

## البنية:
```
salon-profile/
├── index.html              ← البروفايل + الستيمارا المدمجة
├── catalogue.html          ← صفحة الكتالوگ
└── assets/
    ├── logo.png            ← الشعار
    ├── background.jpg      ← صورة الخلفية
    ├── cat-1.jpg           ← صورة الكتالوگ 1
    ├── cat-2.jpg           ← صورة الكتالوگ 2
    ├── cat-3.jpg           ← صورة الكتالوگ 3
    └── cat-4.jpg           ← صورة الكتالوگ 4
```

## 🔄 تبديل الصور:
كل صورة بدّلها بنفس السمية:
- logo.png ← الشعار
- background.jpg ← الخلفية
- cat-1.jpg ← صورة الكتالوگ 1
- cat-2.jpg ← صورة الكتالوگ 2
- ...

## 🎛️ شفافية الخلفية:
--bg-opacity:0.15; (0=مخفية، 1=كاملة)

## 🔘 الأزرار:
| الزر | الرابط |
|------|--------|
| احجزي موعد | https://wa.me/212600000000 |
| شوف الكتالوگ | catalogue.html (تلقائي) |

## ⚠️ مهم: ربط الستيمارا بـ Google Sheet

الستيمارا موجودة فالبروفايل (نفس التصميم).
باش تجي الإجابات فـ Google Sheet، خاصك تدير هاد الخطوات:

1. دخل لـ Google Sheets → خلق fichier جديد
2. Extensions → Apps Script
3. حط الكود (كاين فـ fichier apps-script-code.gs)
4. Deploy → New deployment → Web app
5. Execute as: Me
6. Who has access: Anyone
7. خد الرابط وحطو فـ index.html فـ هادا السطر:
   const SHEET_URL = 'PASTE_..._HERE';
