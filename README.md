# Sip Website 🚀

> **A modern React-based web platform for community engagement and social interaction**

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Quick Start](#-quick-start)
- [Technology Stack](#-technology-stack)
- [Design System](#-design-system)
- [Security Framework](#-security-framework)
- [Architecture & Patterns](#-architecture--patterns)
- [Development Guidelines](#-development-guidelines)
- [Testing Strategy](#-testing-strategy)
- [Deployment & CI/CD](#-deployment--cicd)
- [Team Collaboration](#-team-collaboration)
- [Performance & Monitoring](#-performance--monitoring)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Project Overview

Sip Website is a React-TypeScript web application designed to foster community engagement through group discovery, user interaction, and social features. Built with modern web technologies and a focus on scalability, security, and user experience.

### Key Features
- **Featured Groups Discovery**: Browse and explore community groups
- **User Profiles & Interaction**: Rich user profiles with social statistics
- **Real-time Messaging**: Latest message previews and threading
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Firebase Integration**: Secure backend with Firestore and Authentication

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Firebase Account**: For backend services

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/sip-website.git
cd sip-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase configuration

# Start development server
npm start
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server on port 3000 |
| `npm run build` | Production build |
| `npm test` | Run test suite |
| `npm run lint` | ESLint code analysis |
| `npm run type-check` | TypeScript compilation check |

---

## 🛠 Technology Stack

### Core Technologies
- **Frontend**: React 19.1.1 + TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.4.17 + PostCSS
- **Routing**: React Router DOM 7.8.0
- **Backend**: Firebase 12.1.0 (Firestore, Auth, Hosting)
- **Build Tool**: Create React App 5.0.1

### UI Component Libraries
- **Design System**: Radix UI (Comprehensive component library)
- **Icons**: Lucide React 0.539.0
- **Animations**: Tailwind CSS Animate 1.0.7
- **Styling Utilities**: 
  - `clsx` - Conditional class names
  - `tailwind-merge` - Merge Tailwind classes
  - `class-variance-authority` - Component variants

### Development Tools
- **Testing**: React Testing Library + Jest
- **Type Safety**: TypeScript with strict mode
- **Code Quality**: ESLint + Prettier (configured via CRA)

---

## 🎨 Design System

### Color Palette

Our standardized color system ensures consistent branding and accessibility:

```css
/* Primary Colors */
--primary-white: #FCFCFC    /* Main background */
--primary-red: #ED0942      /* Brand primary, CTAs */
--primary-blue: #002649     /* Headers, navigation */
--primary-black: #00061A    /* Text, high contrast */

/* Secondary Colors */
--primary-yellow: #FCD549   /* Highlights, warnings */
--secondary-yellow: #FCF0C2 /* Subtle backgrounds */
--secondary-red: rgba(237, 9, 66, 0.4)  /* Hover states */
--primary-gray: rgba(12, 42, 70, 0.6)   /* Body text */
--secondary-gray: rgba(12, 42, 70, 0.4) /* Muted text */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 700 (bold)
- **Scale**: Fluid typography using `clamp()` for responsive design

```css
/* Typography Examples */
.hero-title { font-size: clamp(2.5rem, 8vw, 4.5rem); }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); }
```

### Component Patterns

#### Consistent Styling Patterns
1. **Cards**: `rounded-3xl`, `shadow-soft` → `shadow-medium` on hover
2. **Buttons**: `rounded-xl`, `transition-all duration-200`
3. **Animations**: `animate-fadeIn`, `animate-slideDown`, `animate-slideUp`
4. **Hover Effects**: `-translate-y-1.5`, `hover:shadow-2xl`

#### Design Tokens
- **Spacing**: Consistent use of Tailwind's spacing scale
- **Border Radius**: `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for buttons
- **Shadows**: Custom shadow system via CSS variables

---

## 🔒 Security Framework

### Firebase Security Strategy

Our security approach follows defense-in-depth principles:

#### 1. Data Integrity Protection

**Firestore Security Rules**: Deny all write access for read-only functionality

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false; // CRITICAL: Prevents unauthorized data modification
    }
  }
}
```

#### 2. Communication Security

- **HTTPS Enforcement**: Firebase Hosting provides automatic SSL certificates
- **Secure Headers**: Implement CSP and security headers in Firebase hosting config
- **API Security**: All Firebase SDK calls use HTTPS by default

#### 3. Client-Side Security

**XSS Prevention**:
- ✅ React JSX auto-escapes content by default
- ⚠️ Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- 🔍 Sanitize any user-generated content before rendering

#### 4. Cost & Abuse Protection

**Firebase App Check Integration** (TODO):
```javascript
// TODO: Implement App Check for production
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('your-site-key'),
  isTokenAutoRefreshEnabled: true
});
```

#### 5. Monitoring & Alerts

- **Budget Alerts**: Set up Google Cloud billing alerts
- **Usage Monitoring**: Track Firebase usage and quota limits
- **Error Tracking**: Implement error boundary patterns

### Security Checklist

| Threat | Primary Defense | Status | Action Required |
|--------|----------------|--------|-----------------|
| Network DDoS | Google Cloud Infrastructure | ✅ Handled | None |
| Unauthorized Data Access | Firestore Security Rules | ✅ Implemented | Review rules quarterly |
| Cost Exhaustion | Budget Alerts + App Check | ⚠️ Partial | Implement App Check |
| XSS/Script Injection | React JSX Escaping | ✅ Built-in | Avoid dangerouslySetInnerHTML |
| Vulnerable Dependencies | npm audit + Dependabot | 🔄 Ongoing | Run npm audit weekly |

---

## 🏗 Architecture & Patterns

### Project Structure

```
src/
├── components/          # Shared UI components
├── features/            # Feature-based modules
│   └── featuredGroups/  # Group discovery feature
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Custom React hooks
│       └── services/    # API and business logic
├── hooks/               # Global custom hooks
├── services/            # Global services (Firebase, API)
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

### Design Patterns

#### 1. Feature-Based Architecture
- Group related components, hooks, and services by feature
- Promotes modularity and easier maintenance
- Enables better code splitting and team ownership

#### 2. Custom Hooks Pattern
```typescript
// Example: useFeaturedGroups hook
export const useFeaturedGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Implementation...
  return { groups, loading, error };
};
```

#### 3. Component Composition
- Use Radix UI primitives for accessibility
- Compose complex UI from simple, reusable components
- Leverage TypeScript for prop validation

#### 4. Service Layer Pattern
```typescript
// services/groupService.ts
export class GroupService {
  static async getFeaturedGroups(): Promise<Group[]> {
    // Firebase Firestore logic
  }
}
```

---

## 💻 Development Guidelines

### Code Standards

#### TypeScript Best Practices
1. **Strict Mode**: Always use strict TypeScript configuration
2. **Interface Design**: Prefer interfaces over types for object shapes
3. **Type Guards**: Implement proper type guards for data validation
4. **Null Safety**: Handle nullable values explicitly

#### React Best Practices
1. **Function Components**: Use function components with hooks
2. **Custom Hooks**: Extract reusable logic into custom hooks
3. **Error Boundaries**: Implement error boundaries for component trees
4. **Memoization**: Use `useMemo` and `useCallback` for expensive operations

#### Styling Guidelines
1. **Tailwind First**: Use Tailwind classes over custom CSS
2. **Design Tokens**: Use our standardized color palette
3. **Responsive Design**: Mobile-first approach
4. **Accessibility**: Ensure WCAG 2.1 AA compliance

### Git Workflow

#### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Individual feature development


#### Commit Convention
```
feat: add user profile display to member cards
fix: resolve group card hover animation glitch
docs: update security guidelines in README
style: migrate group components to Tailwind CSS
```

### Code Review Process

#### Required Checks
- [ ] TypeScript compilation passes
- [ ] All tests pass
- [ ] ESLint warnings resolved
- [ ] Design system compliance
- [ ] Security considerations reviewed
- [ ] Performance impact assessed

---

## 🧪 Testing Strategy

### Testing Philosophy
- **Unit Tests**: Test individual components and hooks
- **Integration Tests**: Test feature workflows
- **Accessibility Tests**: Ensure WCAG compliance
- **Visual Regression**: Prevent UI breakage

### Testing Tools
- **React Testing Library**: Component testing
- **Jest**: Test runner and assertions
- **MSW**: API mocking for tests
- **Axe**: Accessibility testing

### Testing Guidelines
```typescript
// Example test structure
describe('GroupCard Component', () => {
  it('displays group information correctly', () => {
    // Arrange
    const mockGroup = createMockGroup();
    
    // Act
    render(<GroupCard group={mockGroup} />);
    
    // Assert
    expect(screen.getByText(mockGroup.name)).toBeInTheDocument();
  });
});
```

---

## 🚀 Deployment & CI/CD

### Firebase Hosting Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

### Environment Configuration

| Environment | Branch | URL | Firebase Project |
|-------------|--------|-----|------------------|
| Development | `develop` | dev.sip-app.com | sip-dev |
| Staging | `staging` | staging.sip-app.com | sip-staging |
| Production | `main` | sip-app.com | sip-prod |

### CI/CD Pipeline (TODO)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches: [main, develop]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test -- --coverage --watchAll=false
      - name: Build
        run: npm run build
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
```


### Development Workflow 
1. **Development**: Feature branches from `develop`
2. **Review**: Pull request with required approvals
3. **Testing**: Automated tests + manual QA
4. **Deployment**: Merge triggers deployment pipeline

---

## 📊 Performance & Monitoring

### Monitoring Tools (TODO)
- **Web Vitals**: Core web vitals tracking
- **Firebase Performance**: Real user monitoring
- **Sentry**: Error tracking and performance monitoring
- **Lighthouse CI**: Automated performance testing

### Optimization Strategies(TODO)
1. **Code Splitting**:
2. **Image Optimization**: 
3. **Bundle Analysis**: Regular bundle size monitoring
4. **Caching**: Aggressive caching with service workers

---

#### Build Failures
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Clear TypeScript cache
rm -rf node_modules/.cache
```

#### Firebase Connection Issues
```bash
# Check Firebase configuration
firebase projects:list
firebase use --add

# Verify Firestore rules
firebase firestore:rules:get
```

### Debug Mode

Enable debug logging:
```javascript
// In development
localStorage.setItem('debug', 'sip:*');
```

### Performance Debugging
```javascript
// React Developer Tools Profiler
// Chrome DevTools Performance tab
// Firebase Performance Monitoring
```

---

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)

### Internal Resources
- [Design System Guide](./docs/design-system.md) (TODO)
- [API Documentation](./docs/api.md) (TODO)
- [Security Playbook](./docs/security.md) (TODO)
- [Deployment Guide](./docs/deployment.md) (TODO)

---


### Before You Commit
- [ ] Run `npm test` and ensure all tests pass
- [ ] Run `npm run build` and verify successful build
- [ ] Follow our commit message convention
- [ ] Update documentation if needed

---