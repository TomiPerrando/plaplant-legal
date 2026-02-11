# Plaplant Legal (GitHub Pages)

Static legal site for Play Console links:
- Privacy policy
- Account deletion instructions

## Structure

- `index.html`
- `styles.css`
- `privacy-policy/index.html`
- `account-deletion/index.html`

## Publish with GitHub Pages

1. Create remote repository (public).
2. Add remote:
   - `git remote add origin <REMOTE_URL>`
3. Push:
   - `git add .`
   - `git commit -m "Add legal pages"`
   - `git branch -M main`
   - `git push -u origin main`
4. In GitHub repository settings:
   - Pages -> Deploy from a branch
   - Branch `main`, folder `/ (root)`

## Replace placeholders before publishing

- `[TU_NOMBRE_LEGAL_O_DEVELOPER_NAME]`
- `[TU_EMAIL_DE_SOPORTE]`
