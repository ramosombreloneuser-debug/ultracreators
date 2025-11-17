# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML landing page for **Ultra Creators**, a Brazilian affiliate marketing platform. The site is written entirely in Portuguese (pt-BR) and consists of self-contained HTML files with inline CSS and JavaScript.

## File Structure

- **indexoficial.html** - Main production landing page (v2.1.5) with complete sales funnel
- **index.html** - Maintenance/under construction page with countdown timer
- **fotoana.jpg, fotojoao.jpg, fotomaria.jpg** - Testimonial profile photos
- **ultracreators.PNG** - Logo/favicon

## Development Commands

Since this is a static site with no build process, there are no npm/build commands. To work with the site:

**Preview locally:**
```bash
# Option 1: Open directly in browser
start indexoficial.html  # Windows
open indexoficial.html   # macOS

# Option 2: Use Python's built-in HTTP server
python -m http.server 8000
# Then visit http://localhost:8000/indexoficial.html

# Option 3: Use VS Code Live Server extension or similar
```

## Architecture

### Single-Page Structure (indexoficial.html)

The landing page follows a traditional long-form sales funnel with these sections in order:

1. **Header** - Fixed navigation with mobile burger menu
2. **Hero** - Primary value proposition and CTA
3. **Numbers** - Social proof metrics (commissions, affiliates, satisfaction rate)
4. **Training** - Course content overview (6 feature cards)
5. **Method** - 4-step process explanation
6. **Social Proof** - Three testimonial cards with photos
7. **Differentials** - 6 unique selling points
8. **Offer** - 3 product/service cards
9. **Bonuses** - 4 bonus offerings
10. **FAQ** - Accordion-style frequently asked questions
11. **Final CTA** - Conversion section with link to external signup
12. **Footer** - Contact info, navigation links, social media

### CSS Architecture

All styles are inline using CSS custom properties (variables):
- Color scheme: Black backgrounds with gold (#d4af37) accent
- Responsive breakpoints: 1023px (tablet), 767px (mobile)
- Mobile-first navigation with overlay menu

### JavaScript Functionality

Pure vanilla JavaScript (no frameworks):
- Mobile navigation toggle
- Smooth scroll to anchor links
- Scroll-triggered reveal animations (IntersectionObserver)
- Animated number counters
- FAQ accordion
- Back-to-top button

## Content Notes

- **Language:** All content is in Portuguese (Brazil)
- **Brand colors:** Gold (#d4af37) on black (#000000)
- **Typography:** Montserrat font family (loaded from Google Fonts)
- **CTA link:** Points to external domain (ramostech.site)
- **Social media:** Instagram @creatorsultra

## Making Changes

When editing this codebase:

1. **Maintain Portuguese:** All user-facing text should remain in pt-BR
2. **Inline everything:** Keep CSS in `<style>` tags and JS in `<script>` tags - this site is designed to be self-contained
3. **Test responsiveness:** Always check mobile (< 768px), tablet (768-1023px), and desktop views
4. **Preserve accessibility:** Maintain ARIA labels and semantic HTML
5. **Color consistency:** Use CSS variables for colors to maintain brand consistency

## Current Version

According to README.md: **v2.1.5** (versão oficial)
