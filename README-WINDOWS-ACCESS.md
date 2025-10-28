# 🪟 Accessing Claude Code Projects from Windows

## The Situation
Claude Code runs in a **remote isolated container** that cannot directly access your local network or WD Cloud drive.

## ✅ RECOMMENDED WORKFLOW: Use Git

### Setup (One-time)
From your Windows machine (PowerShell or Git Bash):

```bash
# Navigate to your WD Cloud
cd \\MYCLOUD-490008\Public\Claude-Projects

# Clone the repository
git clone <your-git-repo-url>
cd claude-code-agents-wizard-v2
```

### Daily Use
Whenever Claude creates or updates files:

```bash
# Pull latest changes
cd \\MYCLOUD-490008\Public\Claude-Projects\claude-code-agents-wizard-v2
git pull origin claude/build-code-a-011CUYx5aLHszVD7P4GtQosf

# View files
cd test-landing-page
explorer.exe index-standalone.html
```

---

## 🎯 Current Project Location in Container

**Path**: `/home/user/claude-code-agents-wizard-v2/`

**Files**:
- `test-landing-page/` - Your landing page project
  - `index.html` - Home page
  - `about.html` - About page
  - `contact.html` - Contact page
  - `index-standalone.html` - Standalone version (best for Windows)
  - `css/style.css` - Styling
  - `js/script.js` - JavaScript

**Git Branch**: `claude/build-code-a-011CUYx5aLHszVD7P4GtQosf`

---

## 📦 Alternative: Export Packages

Use the export script to create downloadable packages:

```bash
/home/user/export-project.sh /home/user/claude-code-agents-wizard-v2
```

Output: `/home/user/exports/` directory

---

## 🔄 Why Direct Network Mount Won't Work

```
Your Local Network          ❌ No Connection ❌          Remote Container
├── Windows 10                                           ├── Claude Code
├── WD Cloud                                            └── Project Files
└── Router (192.168.x.x)                                    (21.0.0.x)
```

The container is in a different network, so:
- ❌ Can't mount `\\MYCLOUD-490008`
- ❌ Can't ping local IPs
- ❌ Can't access local network shares

**Solution**: Use Git to bridge the gap! ✅
