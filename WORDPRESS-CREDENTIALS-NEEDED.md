# 🔑 WordPress Development - Credentials Needed

Both MCP servers are now installed and ready! Here's what I need from you to get started.

---

## ✅ Installed MCP Servers

- ✅ **WordPress MCP** (server-wp-mcp@1.0.1)
- ✅ **Chrome DevTools MCP** (chrome-devtools-mcp@0.9.0)
- ✅ **Playwright MCP** (already configured)

---

## 📋 Choose Your Access Method

### **Option 1: WordPress REST API Access** (Recommended for WordPress Sites)

This allows me to work directly with WordPress posts, pages, themes, plugins, etc.

**What I need:**

1. **WordPress Site URL**
   - Example: `https://yoursite.com`
   - Or: `https://dev.yoursite.com` (staging site)

2. **WordPress Username**
   - Example: `admin` or your admin username
   - This user should have Administrator role

3. **Application Password** (Recommended - More Secure)
   - Go to: WordPress Dashboard → Users → Your Profile
   - Scroll to "Application Passwords"
   - Enter name: "Claude Code"
   - Click "Add New Application Password"
   - Copy the generated password (format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
   
   **OR**
   
   **Admin Password** (If application passwords not available)
   - Your regular WordPress admin password

**What I can do with WordPress MCP:**
- ✅ Create/edit posts and pages
- ✅ Upload and manage media
- ✅ Install and configure themes
- ✅ Install and configure plugins
- ✅ Manage categories and tags
- ✅ Create custom post types
- ✅ Update site settings
- ✅ Manage users
- ✅ All via WordPress REST API!

---

### **Option 2: cPanel API Access** (For Server-Level Management)

This allows me to manage WordPress installations, databases, files, etc. at the server level.

**What I need:**

1. **cPanel Hostname**
   - Example: `cpanel.yoursite.com`
   - Or: `yoursite.com:2083`
   - Or: `123.45.67.89:2083`

2. **cPanel Username**
   - Example: `username` or your cPanel login

3. **cPanel API Token** (Recommended - More Secure)
   - Go to: cPanel → Security → Manage API Tokens
   - Create new token: "Claude Code"
   - Copy the token
   
   **OR**
   
   **cPanel Password**
   - Your regular cPanel password

**What I can do with cPanel API:**
- ✅ Install WordPress (via Softaculous/Installatron)
- ✅ Manage files and directories
- ✅ Create/manage databases
- ✅ Configure domains and subdomains
- ✅ Manage email accounts
- ✅ Configure SSL certificates
- ✅ Backup and restore sites
- ✅ Monitor server resources

---

### **Option 3: WHM API Access** (If You Have Root/Reseller Access)

This allows me to manage multiple cPanel accounts, create new accounts, etc.

**What I need:**

1. **WHM Hostname**
   - Example: `server.yourhost.com:2087`
   - Or: `123.45.67.89:2087`

2. **WHM Username**
   - Usually: `root` or your reseller username

3. **WHM API Token** (Recommended)
   - Go to: WHM → Development → Manage API Tokens
   - Create new token
   
   **OR**
   
   **WHM Password**
   - Your root or reseller password

**What I can do with WHM API:**
- ✅ Create new cPanel accounts
- ✅ Manage all cPanel accounts
- ✅ Configure server-wide settings
- ✅ Install WordPress on any account
- ✅ Manage reseller accounts
- ✅ Server-level backups

---

## 🎯 My Recommendation

**For WordPress Development:**

Start with **Option 1 (WordPress REST API)** - It's:
- ✅ Easiest to set up
- ✅ Most secure (application passwords)
- ✅ Perfect for content/theme/plugin work
- ✅ No server access needed

**For Multiple Sites or Advanced Server Work:**

Use **Option 2 (cPanel API)** - Gives you:
- ✅ Full file system access
- ✅ Database management
- ✅ Multiple WordPress installations
- ✅ Server-level control

---

## 📝 How to Provide Credentials Securely

**Just send me in plain text:**

```
WordPress Site URL: https://yoursite.com
Username: admin
App Password: xxxx xxxx xxxx xxxx xxxx xxxx
```

**Or for cPanel:**

```
cPanel Host: cpanel.yoursite.com:2083
Username: your-username
API Token: your-api-token-here
```

I'll configure the MCP servers and test the connection immediately!

---

## 🧪 What Happens Next

Once you provide credentials:

1. ✅ I'll update `.mcp.json` with your credentials
2. ✅ I'll test the connection to your WordPress/cPanel
3. ✅ I'll create a test page to verify everything works
4. ✅ I'll show you what I can access/do
5. ✅ We start building your WordPress site!

---

## 🔒 Security Notes

- ✅ Application passwords can be revoked anytime
- ✅ API tokens can be deleted anytime
- ✅ I only use credentials for the work you request
- ✅ All stored in local `.mcp.json` (not committed to Git)
- ✅ You maintain full control of your accounts

---

**Ready to get started! Just provide credentials for whichever option you prefer.** 🚀
