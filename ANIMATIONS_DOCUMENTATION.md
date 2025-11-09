# Gourdshades Website Animation Documentation

This document provides a comprehensive overview of all animations used on the Gourdshades website, their implementations, and how to reuse them in other projects.

## Table of Contents

1. [Animation Libraries Used](#animation-libraries-used)
2. [GSAP Animations](#gsap-animations)
3. [Framer Motion Animations](#framer-motion-animations)
4. [CSS Animations & Transitions](#css-animations--transitions)
5. [Scroll-Based Animations](#scroll-based-animations)
6. [Hover Effects](#hover-effects)
7. [Text Animations](#text-animations)
8. [Performance Optimizations](#performance-optimizations)
9. [Accessibility Considerations](#accessibility-considerations)
10. [Reusable Animation Patterns](#reusable-animation-patterns)

---

## Animation Libraries Used

### Primary Libraries
- **GSAP (GreenSock Animation Platform)** - For complex scroll-triggered animations and timeline-based animations
- **Framer Motion** - For React component animations and page transitions
- **CSS Animations** - For simple transitions and keyframe animations

### Installation
```bash
npm install gsap framer-motion
```

---

## GSAP Animations

### 1. Hero Section Parallax Animation

**File:** `src/components/Hero.tsx`

**Implementation:**
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const setupAnimations = useCallback(() => {
  const ctx = gsap.context(() => {
    // Initial text reveal animation with character splitting
    const tl = gsap.timeline();
    
    // Split text into characters for staggered animation
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      titleRef.current.innerHTML = titleText
        .split('')
        .map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    }

    // Initial reveal animations
    tl.from(titleRef.current?.children || [], {
      duration: 0.8,
      y: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.out"
    });

    // Parallax scroll animations
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(backgroundRef.current, {
          y: progress * 200,
          scale: 1 + progress * 0.1
        });
      }
    });
  }, heroRef);

  return () => ctx.revert();
}, []);
```

**Key Features:**
- Character-by-character text reveal
- Parallax background movement
- Staggered animations
- ScrollTrigger integration

### 2. Pinned Story Animation

**File:** `src/components/PinnedStoryAnimation.tsx`

**Implementation:**
```typescript
const PinnedStoryAnimation: React.FC<PinnedStoryAnimationProps> = ({
  title,
  paragraphs,
  className = ''
}) => {
  useEffect(() => {
    // Split title and paragraphs into characters
    const titleElement = currentContainer.querySelector('.story-title');
    if (titleElement) {
      const titleText = titleElement.textContent || '';
      titleElement.innerHTML = titleText
        .split('')
        .map((char, index) => 
          `<span class="story-char" data-char="${index}" style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        )
        .join('');
    }

    // Animate characters based on scroll position
    ScrollTrigger.create({
      trigger: currentContainer,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const chars = currentContainer.querySelectorAll('.story-char');
        
        chars.forEach((char, index) => {
          const charProgress = Math.max(0, Math.min(1, (progress * chars.length - index) / 2));
          gsap.set(char, { opacity: charProgress });
        });
      }
    });
  }, []);
};
```

**Key Features:**
- Character-based scroll reveal
- Progressive text opacity
- Scroll-synchronized animation

### 3. Text Gradient Opacity on Scroll

**File:** `src/components/TextGradientOpacityOnScroll.tsx`

**Implementation:**
```typescript
export default function TextGradientOpacityOnScroll({
  text,
  staggerDelay = 0.05,
  scrollStart = 'top 80%',
  scrollEnd = 'bottom 20%'
}: TextGradientOpacityOnScrollProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(refs.current, { opacity: 0 });

      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          start: scrollStart,
          end: scrollEnd,
          scrub: 1,
        },
        opacity: 1,
        ease: "none",
        stagger: staggerDelay,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={containerClassName}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className={`animated-char ${className}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
```

**Key Features:**
- Scroll-triggered text reveal
- Staggered character animation
- Customizable scroll triggers

---

## Framer Motion Animations

### 1. Navigation Menu Animation

**File:** `src/components/Navigation.tsx`

**Implementation:**
```typescript
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 50,
    rotateX: -90,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

// Usage in component
<AnimatePresence>
  {isOpen && (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-50 bg-black"
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={item.name}
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link href={item.href}>{item.name}</Link>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
```

**Key Features:**
- Slide-in menu animation
- Staggered link animations
- 3D rotation effects
- Custom easing curves

### 2. Interactive Features Animation

**File:** `src/components/InteractiveFeatures.tsx`

**Implementation:**
```typescript
const backgroundVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

const chipVariants = {
  inactive: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  active: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

// Usage
<motion.div
  variants={backgroundVariants}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  whileHover={{ scale: 1.02 }}
  style={{ willChange: 'transform' }}
>
  <motion.div
    variants={chipVariants}
    animate={activeFeature === index ? "active" : "inactive"}
    whileHover={{ scale: 1.05 }}
    onHoverStart={() => handleFeatureHover(index)}
  >
    {/* Content */}
  </motion.div>
</motion.div>
```

**Key Features:**
- State-based animations
- Hover interactions
- Scale transformations
- Performance optimizations with `willChange`

### 3. Sticky Footer Reveal

**File:** `src/components/StickyFooterReveal.tsx`

**Implementation:**
```typescript
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyFooterReveal: React.FC<StickyFooterRevealProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  
  // Use scroll progress from the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform footer position based on scroll progress
  const footerY = useTransform(
    scrollYProgress,
    [0.8, 1],
    [footerHeight, 0]
  );

  return (
    <div ref={containerRef} className="relative">
      <div style={{ paddingBottom: footerHeight }}>
        {children}
      </div>
      <motion.div
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 z-10"
        style={{ y: footerY }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};
```

**Key Features:**
- Scroll-based transforms
- Dynamic height calculation
- Smooth reveal animation

---

## CSS Animations & Transitions

### 1. Text Gradient Animation

**File:** `src/styles/text-animations.css`

**Implementation:**
```css
.animated-char {
  background: linear-gradient(90deg, #0bb7ff, #5fd3ff, #00d4ff, #4dd0e1);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Alternative gradient styles */
.animated-char.gold-gradient {
  background: linear-gradient(90deg, #ffd700, #ffed4e, #fff176, #ffeb3b);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Fallback for browsers that don't support background-clip */
@supports not (-webkit-background-clip: text) {
  .animated-char {
    background: none;
    -webkit-text-fill-color: initial;
    color: #0bb7ff;
  }
}
```

**Key Features:**
- Animated gradient text
- Multiple color schemes
- Browser fallbacks
- Smooth infinite animation

### 2. Global Animation Utilities

**File:** `src/app/globals.css`

**Implementation:**
```css
/* Hardware acceleration for animations */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

.force-3d {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Smooth transitions */
.smooth-transition {
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Key Features:**
- Performance optimizations
- Accessibility considerations
- Consistent easing curves
- Hardware acceleration

### 3. Image Slider Animations

**File:** `src/components/NewImageSlider.tsx` (CSS-in-JS)

**Implementation:**
```css
@keyframes showContent {
  from {
    transform: translateY(100px);
    filter: blur(33px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes showImage {
  from {
    transform: scale(1.3);
    filter: blur(33px);
  }
  to {
    transform: scale(1);
    filter: blur(0);
  }
}

@keyframes runningTime {
  from { width: 0; }
  to { width: 100%; }
}

.carousel .item.active .content h2,
.carousel .item.active .content .author,
.carousel .item.active .content .title,
.carousel .item.active .content .topic,
.carousel .item.active .content .des,
.carousel .item.active .content .buttons {
  animation: showContent 0.5s ease-in-out 1 forwards;
}

.carousel .item.active .image img {
  animation: showImage 0.5s ease-in-out 1 forwards;
}

.time .timeRunning {
  animation: runningTime 3s linear 1 forwards;
}
```

**Key Features:**
- Keyframe-based animations
- Blur and scale effects
- Staggered content reveal
- Progress bar animation

---

## Scroll-Based Animations

### 1. GSAP ScrollTrigger Pattern

```typescript
// Basic ScrollTrigger setup
ScrollTrigger.create({
  trigger: elementRef.current,
  start: "top 80%",
  end: "bottom 20%",
  scrub: 1, // Smooth scrubbing
  onUpdate: (self) => {
    const progress = self.progress;
    // Apply animations based on scroll progress
    gsap.set(targetElement, {
      opacity: progress,
      y: (1 - progress) * 100
    });
  }
});

// Timeline with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top center",
    end: "bottom center",
    scrub: 2,
    pin: true // Pin element during animation
  }
});

tl.to(element1, { x: 100, duration: 1 })
  .to(element2, { opacity: 0, duration: 0.5 }, "-=0.5");
```

### 2. Framer Motion Scroll Hooks

```typescript
import { useScroll, useTransform } from 'framer-motion';

const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

return (
  <motion.div
    style={{ y, opacity }}
    className="scroll-animated-element"
  >
    {/* Content */}
  </motion.div>
);
```

---

## Hover Effects

### 1. Framer Motion Hover Animations

```typescript
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  }}
>
  Hover Me
</motion.button>

// Complex hover with variants
const buttonVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

<motion.div
  variants={buttonVariants}
  initial="rest"
  whileHover="hover"
>
  {/* Content */}
</motion.div>
```

### 2. CSS Hover Transitions

```css
.hover-effect {
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  transform: translateY(0);
}

.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Image hover effects */
.image-hover {
  overflow: hidden;
}

.image-hover img {
  transition: transform 0.5s ease;
  transform: scale(1);
}

.image-hover:hover img {
  transform: scale(1.1);
}
```

---

## Text Animations

### 1. Character-by-Character Reveal

```typescript
// GSAP implementation
const animateText = (element: HTMLElement) => {
  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map(char => `<span style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  gsap.to(element.children, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.02,
    ease: "power2.out"
  });
};

// Framer Motion implementation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.3
    }
  })
};

{text.split('').map((char, i) => (
  <motion.span
    key={i}
    custom={i}
    variants={textVariants}
    initial="hidden"
    animate="visible"
  >
    {char}
  </motion.span>
))}
```

### 2. Typewriter Effect

```typescript
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayText;
};
```

---

## Performance Optimizations

### 1. Hardware Acceleration

```css
/* Force GPU acceleration */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
}

/* Optimize for specific properties */
.will-change-transform { will-change: transform; }
.will-change-opacity { will-change: opacity; }
.will-change-scroll { will-change: scroll-position; }
```

### 2. Framer Motion Optimizations

```typescript
// Use layout animations sparingly
<motion.div layout="position"> {/* Only animate position */}

// Optimize with willChange
<motion.div
  animate={{ x: 100 }}
  style={{ willChange: 'transform' }}
/>

// Use transform instead of layout properties
// Good: transform (GPU accelerated)
<motion.div animate={{ x: 100, y: 50 }} />

// Avoid: layout properties (CPU intensive)
<motion.div animate={{ left: 100, top: 50 }} />
```

### 3. GSAP Performance Tips

```typescript
// Use GSAP's set for immediate changes
gsap.set(element, { x: 100, opacity: 0 });

// Batch DOM reads and writes
gsap.batch(elements, {
  onEnter: (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 100,
      stagger: 0.1
    });
  }
});

// Use timeline for complex sequences
const tl = gsap.timeline({ paused: true });
tl.to(element1, { x: 100 })
  .to(element2, { opacity: 0 }, "-=0.5");
```

---

## Accessibility Considerations

### 1. Respect User Preferences

```css
/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 2. Framer Motion Accessibility

```typescript
// Respect reduced motion preference
const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? {} : { x: 100 }}
  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### 3. Focus Management

```typescript
// Ensure focus is managed during animations
const handleAnimationComplete = () => {
  if (focusElementRef.current) {
    focusElementRef.current.focus();
  }
};

<motion.div
  animate={{ opacity: 1 }}
  onAnimationComplete={handleAnimationComplete}
>
  {/* Content */}
</motion.div>
```

---

## Reusable Animation Patterns

### 1. Fade In Animation Hook

```typescript
import { useInView } from 'framer-motion';

export const useFadeInAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return {
    ref,
    variants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden"
  };
};

// Usage
const fadeIn = useFadeInAnimation();

<motion.div {...fadeIn}>
  {/* Content */}
</motion.div>
```

### 2. Stagger Animation Component

```typescript
interface StaggerAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export const StaggerAnimation: React.FC<StaggerAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  className
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### 3. Scroll Progress Indicator

```typescript
export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};
```

---

## Implementation Guidelines

### 1. Animation Timing
- **Micro-interactions:** 200-300ms
- **Page transitions:** 400-600ms
- **Complex animations:** 800-1200ms
- **Scroll animations:** Use `scrub` for smooth performance

### 2. Easing Functions
- **Default:** `cubic-bezier(0.76, 0, 0.24, 1)` (custom ease-out)
- **Bouncy:** `type: "spring", stiffness: 300, damping: 20`
- **Smooth:** `ease: "easeInOut"`

### 3. Performance Best Practices
- Use `transform` and `opacity` for animations
- Avoid animating layout properties (`width`, `height`, `top`, `left`)
- Use `will-change` sparingly and remove after animation
- Implement `prefers-reduced-motion` support
- Use `AnimatePresence` for exit animations

### 4. Code Organization
- Keep animation variants in separate objects
- Create reusable animation hooks
- Use consistent naming conventions
- Document complex animation sequences

---

This documentation provides a complete reference for all animations used in the Gourdshades website. Each pattern can be extracted and reused in other projects with minimal modifications.