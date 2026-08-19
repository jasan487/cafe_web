# Brewista / Himalayan Coffee House — Design System Specification

## Brand Identity & Aesthetic
An artisan, organic coffee house design theme combining refined high-contrast editorial serif typography with natural botanical tones (sage green, deep forest olive, warm amber caramel, and soft ivory cream).

---

## 1. Color Palette

### Light Mode (Primary Theme)
- **Base Background:** `#FAF7F2` (Warm Ivory / Alabaster)
- **Secondary Surface:** `#F5EFE6` (Sand Linen)
- **Card Background:** `#FFFFFF` (Pure Crisp White)
- **Subtle Surface:** `#F8F5EF`
- **Sage Accents:**
  - `Sage Light`: `#EEF4EC` (Icon badges & soft chips)
  - `Sage Base`: `#DDE7DA` (Organic blur disks)
  - `Sage Dark`: `#C9D8C6` (Organic background blobs)
- **Deep Forest Olive (Primary Brand):**
  - `Forest Base`: `#223826` (Primary CTA buttons, dark containers, active indicators)
  - `Forest Dark`: `#17291B` (Hover states)
  - `Forest Light`: `#2E4B33`
- **Warm Caramel & Gold (Accent):**
  - `Caramel Base`: `#D7A86E` (Secondary buttons, micro-accents, badge accents)
  - `Caramel Dark`: `#BA884F` (Eyebrow labels)
  - `Caramel Light`: `#E8BE88`
- **Typography:**
  - `Text Dark / Headings`: `#111813`
  - `Text Main / Body`: `#1B241E`
  - `Text Muted / Subtitles`: `#5D685C`
  - `Text Light`: `#8E9A8D`
  - `Text Ivory (on dark)`: `#FAF7F2`
- **Footer Surface:** `#1C1510` (Deep Roasted Espresso)

### Warm Dark Mode (Optional Switch)
- **Base Background:** `#14100D` (Dark Roast Espresso)
- **Card Background:** `#221B16`
- **Surface Subtle:** `#2A221C`
- **Forest Highlight:** `#2E4B33` / `#3D6144`
- **Caramel Accent:** `#E2B075` / `#F0C692`
- **Text Main:** `#F4EFEA`

---

## 2. Typography Hierarchy

- **Headings (Display / Editorial):** `'Playfair Display', Georgia, serif`
  - `Hero Title`: `clamp(2.8rem, 5vw, 4.2rem)`, `font-weight: 700`, `line-height: 1.12`
  - `Section Titles`: `clamp(2.2rem, 4vw, 3.2rem)`, `font-weight: 700`, `line-height: 1.15`
  - `Card Titles`: `1.05rem` - `1.3rem`, `font-weight: 700`
- **Body & Interface (Clean Sans):** `'Plus Jakarta Sans', -apple-system, sans-serif`
  - `Body Text`: `0.95rem` - `1.05rem`, `line-height: 1.65`, `font-weight: 400`
  - `Eyebrow & Subtitles`: `0.78rem`, `font-weight: 800`, `letter-spacing: 0.12em`, `text-transform: uppercase`
  - `Nav Links`: `0.8125rem`, `font-weight: 700`, `letter-spacing: 0.08em`, `text-transform: uppercase`
  - `Buttons & CTAs`: `0.8125rem` - `0.875rem`, `font-weight: 700`, `letter-spacing: 0.04em`

---

## 3. UI Components & Patterns

1. **Floating Capsule Navbar:**
   - Full pill shape (`border-radius: 9999px`) with `rgba(255, 255, 255, 0.95)` backdrop blur.
   - Botanical coffee sprout logo mark + serif typography.
   - Uppercase nav links with forest-green underline active indicator.
   - Forest green pill action CTA: `ORDER ONLINE 🛒`.

2. **Hero Section:**
   - 2-column layout with organic sage blob backgrounds.
   - Big serif title: *"Good days start with great coffee."*
   - Forest green pill button (`EXPLORE MENU →`) + white outlined pill (`OUR STORY`).
   - Circular social icon pills row.
   - Artisanal ceramic green cup with microfoam latte art + floating circular seal *"PREMIUM QUALITY BEANS"*.

3. **4-Pillars Floating Bar:**
   - Elevated pure white rounded card (`border-radius: 28px`) with soft drop shadow.
   - 4 equal columns with vertical hairline dividers:
     - `Quality Coffee`
     - `Expertly Brewed`
     - `Made with Love`
     - `Fast & Friendly`
   - Icons enclosed in soft sage circular badges (`#EEF4EC`).

4. **Split Signature Collection Container:**
   - Deep forest green left card (`#223826`) with ivory CTA (`VIEW FULL MENU →`).
   - Warm cream right panel (`#F5EFE6`) with 3 vertical coffee product cards (Espresso, Cappuccino, Iced Latte) with circular dark green `+` action buttons.
   - Subtle botanical leaf watermark in background.

5. **"Why Choose Us" Feature Section:**
   - Left: *"More Than Just Coffee"* with forest green CTA (`LEARN MORE →`).
   - Right: 4 organic soft-sage blob badges (`Ethically Sourced`, `Award Winning`, `Modern Equipment`, `Cozy Ambience`).

6. **Coffee Club / Special Offers Promo Banner:**
   - Deep forest green rounded banner (`#223826`, `border-radius: 28px`).
   - Left: Circular `10% OFF YOUR FIRST ORDER` badge overlapping fresh pastries & latte photo.
   - Middle: `✉ JOIN OUR COFFEE CLUB` with exclusive tips & deals copy.
   - Right: White pill input box + caramel `SUBSCRIBE` pill button.

7. **Scalloped Organic Footer:**
   - Wavy scalloped organic top border transition into deep espresso roast (`#1C1510`).
   - 4-column layout: Brand Bio, Quick Links, Help & Support, Contact & Social.
   - Copyright bar with coffee leaf icon.
