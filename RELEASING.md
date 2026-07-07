# Releasing (GitHub Actions)

## macOS

This repo includes a GitHub Actions workflow that builds unsigned macOS artifacts on `macos-latest`.

### Manual build

1. Go to GitHub -> Actions -> build-mac.
2. Click Run workflow.
3. Download `TXT-Pets-mac-arm64` and `TXT-Pets-mac-x64` from the run summary.

### Tag release

Push a tag matching `v*.*.*`, for example `v1.0.0`.

The workflow builds both Apple Silicon and Intel artifacts, uploads Actions artifacts, and publishes them to a GitHub Release for tag builds.

### Notes

- The workflow does not sign or notarize the app.
- macOS may show a Gatekeeper warning for unsigned apps. A smoother install requires Apple Developer signing and notarization secrets.
