# Legal Law Chat Bot

A lightweight, static web app that provides instant legal guidance, structured drafts, and a searchable catalog of legal sections. Deployed as a static site to GitHub Pages.

## 1. Code Repository Hosting

- Purpose: Share and collaborate on source code.
- Features: Version control, issue tracking, pull requests, and project boards.
- Use case: Any software project, from scripts to full applications.

Repository: https://github.com/Daniel04-hub/Law-Chatbot

### How we use it here
- Version control: All site code (HTML/CSS/JS) tracked on the `main` branch.
- Collaboration: Open issues for bugs/features; contribute via pull requests.
- Automation: GitHub Actions deploys the site to Pages on every push to `main`.

### Quick start (clone & run locally)

```powershell
# Clone the repo
git clone https://github.com/Daniel04-hub/Law-Chatbot.git

# Open the project folder
cd Law-Chatbot\project

# Open index.html in your browser (no build step required)
# On Windows, you can also double-click index.html in Explorer
```

### Live site
- GitHub Pages: https://daniel04-hub.github.io/Law-Chatbot/

> Note: If the Pages URL changes (custom domain or org settings), see the repo’s Settings → Pages for the current link.

## 2. Static Site Hosting

- Purpose: Serve static websites (HTML, CSS, JS, images) at a public URL with minimal ops.
- Features: Free HTTPS, automatic deployments from the repository, custom domain + subpath support, and access controls via the repo.
- Use case: Documentation sites, portfolios, SPAs, demos, and simple apps without a backend.

### How we host this project
- Platform: GitHub Pages
- Flow: Push to `main` → GitHub Actions builds (none needed here) → Pages publishes the contents of `project/` to the live URL.
- URL: https://daniel04-hub.github.io/Law-Chatbot/

### Notes & tips
- Use relative paths for assets (e.g., `script.js`, `favicon.svg`) so it works under the `/Law-Chatbot/` subpath.
- Avoid absolute root paths like `/image.png` on GitHub Pages subpaths.
- Deployment status: Check the repo’s Actions and Settings → Pages for the latest publish logs.
- Custom domain: Configure DNS (CNAME) and set the domain in Settings → Pages; Pages will create a `CNAME` file.
