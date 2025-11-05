# LichSu Quiz — Static site

This small static quiz was refactored from a single `LichSu.html` file into separate files for easier editing:

- `index.html` — entry page (also present as `LichSu.html` for compatibility)
- `css/styles.css` — styles
- `js/script.js` — quiz logic and CSV export

How to host on GitHub Pages
1. Create a new repository on GitHub (or use an existing one).
2. Add/commit these files and push to the repo (main branch)
   - Example (PowerShell):

```powershell
git init
git add .
git commit -m "Add quiz site"
git branch -M main
git remote add origin https://github.com/<yourname>/<repo>.git
git push -u origin main
```

3. Enable GitHub Pages in the repository settings:
   - Settings → Pages → Source: select `main` branch and `/ (root)`, save.
   - Within a minute or two your site will be available at `https://<yourname>.github.io/<repo>/`

Notes & testing locally
- To preview locally, you can use VS Code Live Server or a local static server. With Python (if installed):

```powershell
# from the repository folder
python -m http.server 8000
# open http://localhost:8000 in your browser
```

- The export CSV uses CRLF line endings for better Excel compatibility. If you want a UTF-8 BOM added for older Excel versions, I can add it.

Next steps I can do for you
- Add a timestamped filename for CSV downloads
- Add persistence (localStorage) so answers survive reloads
- Improve visual polish: animations, icons, dark mode

Tell me what you want next and I'll make the changes.
