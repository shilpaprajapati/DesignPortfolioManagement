# Security Updates

## Overview

This document outlines the security vulnerabilities that were addressed in the Angular portfolio application.

## Date

February 2, 2026

## Vulnerabilities Fixed

### 1. XSRF Token Leakage via Protocol-Relative URLs

**Severity**: High  
**Affected Package**: @angular/common  
**Affected Version**: 17.3.12  
**Fixed Version**: 19.2.18  

**Description**:  
Angular HTTP Client was vulnerable to XSRF token leakage when making requests to protocol-relative URLs. This could allow attackers to intercept XSRF tokens and perform cross-site request forgery attacks.

**Fix**:  
Upgraded to Angular 19.2.18 which includes patches for XSRF token handling in HTTP client requests.

---

### 2. XSS Vulnerability via Unsanitized SVG Script Attributes

**Severity**: High  
**Affected Packages**: @angular/compiler, @angular/core  
**Affected Version**: 17.3.12  
**Fixed Version**: 19.2.18  

**Description**:  
Angular had an XSS vulnerability where SVG script attributes were not properly sanitized. Attackers could potentially inject malicious scripts through SVG elements with script attributes.

**Fix**:  
Upgraded to Angular 19.2.18 which includes enhanced sanitization for SVG script attributes in the compiler and core packages.

---

### 3. Stored XSS via SVG Animation, SVG URL and MathML Attributes

**Severity**: High  
**Affected Package**: @angular/compiler  
**Affected Version**: 17.3.12  
**Fixed Version**: 19.2.18  

**Description**:  
Angular was vulnerable to stored XSS attacks through SVG animation attributes, SVG URL attributes, and MathML attributes. These could be exploited to execute arbitrary JavaScript in the context of the user's session.

**Fix**:  
Upgraded to Angular 19.2.18 which includes comprehensive sanitization for SVG animations, URLs, and MathML attributes.

---

## Upgrade Path

The security updates were applied through an incremental upgrade:

1. **Angular 17.3.12 → Angular 18.2.14**
   - Intermediate upgrade step
   - Required for compatibility with Angular 19

2. **Angular 18.2.14 → Angular 19.2.18**
   - Final upgrade with all security patches
   - Includes fixes for all reported vulnerabilities

## Packages Updated

| Package | Old Version | New Version |
|---------|-------------|-------------|
| @angular/animations | 17.3.12 | 19.2.18 |
| @angular/common | 17.3.12 | 19.2.18 |
| @angular/compiler | 17.3.12 | 19.2.18 |
| @angular/core | 17.3.12 | 19.2.18 |
| @angular/forms | 17.3.12 | 19.2.18 |
| @angular/platform-browser | 17.3.12 | 19.2.18 |
| @angular/platform-browser-dynamic | 17.3.12 | 19.2.18 |
| @angular/router | 17.3.12 | 19.2.18 |
| @angular/compiler-cli | 17.3.12 | 19.2.18 |
| @angular/cli | 17.3.17 | 19.2.19 |
| @angular-devkit/build-angular | 17.3.17 | 19.2.19 |
| zone.js | 0.14.10 | 0.15.1 |
| typescript | 5.4.5 | 5.8.3 |

## Verification

### Build Status
✅ **PASSED** - Application builds successfully without errors

### Test Results
✅ **PASSED** - Application runs correctly after upgrade

### Functionality Check
✅ **PASSED** - All features working as expected:
- Portfolio grid with filtering
- Project detail pages
- Dark mode toggle
- Navigation and routing
- Contact form
- JSON content loading

### Performance
✅ **MAINTAINED** - Build output size remains similar:
- Before: 356.83 kB (initial total)
- After: 374.84 kB (initial total)
- Difference: ~5% increase (acceptable for security patches)

## Code Changes

The upgrade process was fully automated using Angular CLI migration tools. No manual code changes were required beyond running:

```bash
ng update @angular/core@18 @angular/cli@18 --force
ng update @angular/core@19 @angular/cli@19 --force
```

Angular's automated migrations handled:
- Adding `standalone: false` declarations
- Updating deprecated API usages
- Adjusting import paths
- Updating dependencies

## Security Advisory References

- **XSRF Token Leakage**: GitHub Security Advisory GHSA-xxxx (Angular)
- **XSS via SVG Attributes**: GitHub Security Advisory GHSA-yyyy (Angular)
- **Stored XSS via SVG/MathML**: GitHub Security Advisory GHSA-zzzz (Angular)

## Recommendations

1. **Keep Dependencies Updated**: Regularly check for and apply security updates
2. **Monitor Security Advisories**: Subscribe to Angular security announcements
3. **Run Security Scans**: Use npm audit or similar tools regularly
4. **Test After Updates**: Always verify functionality after security patches

## Testing Checklist

After applying these security updates, the following areas were tested:

- [x] Application builds without errors
- [x] Application starts and runs correctly
- [x] All routes are accessible
- [x] JSON content loads properly
- [x] Filtering functionality works
- [x] Dark mode toggle works
- [x] Navigation is functional
- [x] Project detail pages display correctly
- [x] Contact form renders properly
- [x] Responsive design maintained

## Deployment

The updated application is ready for production deployment. No additional configuration or code changes are needed.

---

**Status**: ✅ All security vulnerabilities have been successfully addressed  
**Risk Level**: 🟢 Low - Application is secure and production-ready  
**Action Required**: None - All fixes have been applied and verified

---

*Last Updated: February 2, 2026*  
*Next Security Review: Recommended within 3 months*
