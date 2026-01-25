# Brand.ai Design Guidelines
## Полное руководство по дизайн-системе brand.ai

> **Источник:** https://brand.ai  
> **Дата анализа:** 25 января 2026  
> **Применено к проекту:** Yacht Nakhodka Rental

---

## 📐 1. Typography (Типографика)

### Основные шрифты

**Главный шрифт:**
- **Название:** `ABC Monument Grotesk` (Sans-serif)
- **Альтернатива для проекта:** `Inter` (доступен на Google Fonts)

**Mono шрифт:**
- **Название:** `ABC Monument Grotesk Semi-Mono`
- **Альтернатива для проекта:** `Roboto Mono`

### Размеры шрифтов

```css
/* Hero Headings */
font-size: 80px;
font-weight: 700 (Bold);
line-height: 80px (1.0);
letter-spacing: -3.2px; /* ⚠️ КЛЮЧЕВАЯ ОСОБЕННОСТЬ */

/* H2 Headings */
font-size: 52px;
font-weight: 700;
letter-spacing: -2.0px;

/* Body Text */
font-size: 16px;
font-weight: 400;
line-height: 22.4px (1.4);
letter-spacing: -0.32px;

/* Button/Label Text (Mono) */
font-size: 14px;
font-weight: 500;
letter-spacing: 0.5px;
```

### ⭐ Ключевая особенность:
**Очень плотное letter-spacing** для заголовков (`-3.2px`) — это создает премиальный, утонченный вид.

---

## 🎨 2. Цветовая палитра

### Основные цвета

```css
/* Фон */
--bg-primary: #F7F5F2;      /* Светлый теплый беж */
--bg-secondary: #FFFFFF;    /* Белый для карточек */

/* Текст */
--text-primary: #1B1B1B;    /* Почти черный */
--text-secondary: #8C877D;  /* Мягкий серо-бежевый */

/* Акценты */
--accent-dark: #1B1B1B;     /* Черный для кнопок/активных элементов */
--accent-light: #F7F5F2;    /* Светлый для неактивных элементов */
```

### Применение цветов

- **Кнопки (Primary):** Черный фон (#1B1B1B), белый/светлый текст
- **Кнопки (Secondary):** Прозрачный/светлый фон, черная обводка
- **Активные теги:** Черный фон, белый текс т
- **Неактивные теги:** Прозрачный фон, черная обводка

---

## 📏 3. Layout & Spacing (Макет и отступы)

### Контейнеры

```css
/* Максимальная ширина контента */
max-width: 1040px;

/* Горизонтальные отступы (Desktop) */
padding-left: 80px;
padding-right: 80px;

/* Горизонтальные отступы (Mobile) */
padding-left: 20px;
padding-right: 20px;
```

### Вертикальные отступы между секциями

```css
/* Маленький промежуток */
margin-bottom: 80px;

/* Средний промежуток */
margin-bottom: 120px;

/* Большой промежуток */
margin-bottom: 200px;
```

⭐ **Brand.ai использует ОЧЕНЬ щедрые отступы** — это создает ощущение "воздуха" и премиальности.

### Grid системы

```css
/* Grid gap (расстояние между элементами) */
gap: 30px;

/* Для flexbox */
gap: 30px;
```

---

## 🔘 4. Border Radius (Скругления)

### Размеры скруглений

```css
/* Кнопки */
border-radius: 6px;

/* Средние элементы (tags, pills) */
border-radius: 14px;

/* Карточки и изображения */
border-radius: 24px;

/* Большие медиа-блоки (видео, hero images) */
border-radius: 40px;

/* Pills/Tags (полное скругление) */
border-radius: 50px;
```

### ⚠️ Правило:
- **Маленький радиус (6px)** = интерактивные элементы (кнопки)
- **Большой радиус (24-40px)** = контент-блоки (карточки, видео, изображения)

---

## 🖼️ 5. Gallery Section (Галерея)

### Layout структура

```
┌───────────────────────────────────────┐
│  [Фильтры-теги в одну линию]         │
│  ○ All  ● Updates  ○ Videos  ○ Guides│
└───────────────────────────────────────┘
         ⬇ gap: 30px
┌─────────┐  ┌─────────┐  ┌─────────┐
│ [Image] │  │ [Image] │  │ [Image] │
│         │  │         │  │         │
│ Title   │  │ Title   │  │ Title   │
│ Desc... │  │ Desc... │  │ Desc... │
└─────────┘  └─────────┘  └─────────┘
```

### Стили карточек галереи

```css
/* Gallery card */
.gallery-card {
    border-radius: 24px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.gallery-card:hover {
    transform: scale(1.02); /* Легкое увеличение */
}

.gallery-card img {
    width: 100%;
    height: auto;
    border-radius: 24px 24px 0 0;
}

.gallery-card-title {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.3px;
    margin-top: 16px;
}

.gallery-card-desc {
    font-size: 14px;
    color: #8C877D;
    margin-top: 8px;
}
```

### Фильтры (Pills)

```css
.filter-pill {
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* Inactive */
.filter-pill {
    background: transparent;
    border: 1px solid #1B1B1B;
    color: #1B1B1B;
}

/* Active */
.filter-pill.active {
    background: #1B1B1B;
    color: #F7F5F2;
}
```

---

## 🎥 6. Video Block (Видео-блок)

### Hero Video Container

```css
.video-hero {
    width: 100%;
    max-width: 1040px;
    border-radius: 40px; /* Большое скругление */
    overflow: hidden;
    margin: 0 auto;
}

.video-hero video {
    width: 100%;
    height: auto;
    display: block;
}
```

### Inline Video (в контенте)

```css
.video-inline {
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}
```

### Video с placeholder

```css
.video-placeholder {
    position: relative;
    background: linear-gradient(135deg, #F7F5F2, #E8E5E1);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
}

.video-play-button {
    width: 80px;
    height: 80px;
    background: #1B1B1B;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.video-play-button:hover {
    transform: scale(1.1);
}
```

---

## 🎯 7. Buttons (Кнопки)

### Primary Button

```css
.btn-primary {
    padding: 10px 20px;
    background: #1B1B1B;
    color: #FFFFFF;
    border-radius: 6px;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

### Secondary Button

```css
.btn-secondary {
    padding: 10px 20px;
    background: transparent;
    color: #1B1B1B;
    border: 1px solid #1B1B1B;
    border-radius: 6px;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}

.btn-secondary:hover {
    background: #1B1B1B;
    color: #F7F5F2;
}
```

---

## 🧩 8. Icons (Иконки)

### Стиль иконок

- **Тип:** Outline (контурные), тонкие линии
- **Stroke width:** 1.5px - 2px
- **Размер:** 20px - 32px (в зависимости от контекста)
- **Цвет:** Обычно #1B1B1B или #8C877D

### Рекомендуемые библиотеки

1. **Phosphor Icons** (https://phosphoricons.com) - минималистичные
2. **Iconify Solar** (используется в нашем проекте)
3. **Lucide Icons** (очень близко к brand.ai)

---

## 🔄 9. Animations & Transitions (Анимации)

### Timing Function

```css
/* Brand.ai использует плавные easing */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Альтернатива */
transition-timing-function: ease-in-out;
```

### Типичные анимации

```css
/* Hover на карточках */
transform: translateY(-4px);
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);

/* Hover на кнопках */
transform: translateY(-2px);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

/* Fade-in для секций */
opacity: 0 → 1;
transform: translateY(30px) → translateY(0);
transition-duration: 0.6s;
```

---

## 📱 10. Responsive Design (Адаптивность)

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
    --container-padding: 20px;
    --fs-display: 36px;
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
    --container-padding: 40px;
    --fs-display: 52px;
}

/* Desktop */
@media (min-width: 1025px) {
    --container-padding: 80px;
    --fs-display: 80px;
}
```

---

## 🎨 11. Header (Шапка сайта)

### Sticky Header Pill

```css
.header-container {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #1B1B1B;
    border-radius: 14px;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 30px;
    z-index: 1000;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.header-nav a {
    color: #F7F5F2;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    text-decoration: none;
}
```

---

## ✅ 12. Checklist для применения

- [ ] Установить Inter и Roboto Mono шрифты
- [ ] Применить letter-spacing: -3.2px к hero заголовкам
- [ ] Применить letter-spacing: -0.32px к body тексту
- [ ] Изменить border-radius кнопок на 6px
- [ ] Изменить border-radius карточек/видео на 24-40px
- [ ] Увеличить max-width контейнера до 1040px
- [ ] Увеличить padding контейнера до 80px (desktop)
- [ ] Увеличить gap в grid до 30px
- [ ] Увеличить вертикальные отступы между секциями до 120-200px
- [ ] Применить цветовую палитру (#F7F5F2, #1B1B1B, #8C877D)
- [ ] Использовать mono шрифт для кнопок и меток
- [ ] Добавить cubic-bezier transitions
- [ ] Создать gallery с pills-фильтрами
- [ ] Создать video block с большим border-radius

---

## 📦 13. Готовые CSS Variables

```css
:root {
    /* Colors */
    --bg-primary: #F7F5F2;
    --bg-secondary: #FFFFFF;
    --text-primary: #1B1B1B;
    --text-secondary: #8C877D;
    --accent-primary: #1B1B1B;
    
    /* Typography */
    --font-heading: 'Inter', -apple-system, sans-serif;
    --font-body: 'Inter', -apple-system, sans-serif;
    --font-mono: 'Roboto Mono', 'Monaco', monospace;
    
    /* Font Sizes */
    --fs-display: clamp(48px, 6vw, 80px);
    --fs-h2: clamp(32px, 4vw, 52px);
    --fs-h3: clamp(22px, 3vw, 32px);
    --fs-body: 16px;
    --fs-small: 14px;
    
    /* Letter Spacing */
    --ls-tight: -3.2px;
    --ls-normal: -0.32px;
    --ls-mono: 0.5px;
    
    /* Spacing */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 30px;
    --space-lg: 48px;
    --space-xl: 80px;
    --space-2xl: 120px;
    --space-3xl: 200px;
    
    /* Border Radius */
    --radius-btn: 6px;
    --radius-md: 14px;
    --radius-card: 24px;
    --radius-lg: 40px;
    --radius-pill: 50px;
    
    /* Container */
    --container-max-width: 1040px;
    --container-padding: 80px;
    
    /* Transitions */
    --transition-fast: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🎯 Философия дизайна Brand.ai

1. **Минимализм** - Меньше элементов, больше пространства
2. **Премиальность** - Качество > Количество
3. **Читаемость** - Контраст и правильная типографика
4. **Утонченность** - Плотное letter-spacing, большие радиусы
5. **Фокус на контенте** - Дизайн не отвлекает от сути

---

**Создано:** 25 января 2026  
**Проект:** Yacht Nakhodka Rental Design  
**Источник анализа:** https://brand.ai
