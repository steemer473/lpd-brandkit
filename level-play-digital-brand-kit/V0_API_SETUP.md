# V0 API Key Setup for Cursor

## How to Configure V0 API Key in Cursor

### Method 1: Cursor Settings (Recommended)

1. **Open Cursor Settings:**
   - Press `Cmd + ,` (Mac) or `Ctrl + ,` (Windows/Linux)
   - Or go to: **Cursor → Settings** (Mac) or **File → Preferences → Settings** (Windows/Linux)

2. **Navigate to Extensions/Features:**
   - Search for "V0" or "API" in settings
   - Look for "V0 API Key" or "External API Keys" section

3. **Add Your API Key:**
   - Your V0 API Key: `v1:k31zWrYktwbmpnr8xe5jQ8sl:HMAK5H6EL3DIYpyHPMOQa8y4`
   - Paste it in the V0 API Key field
   - Save settings

### Method 2: Environment Variables

If Cursor doesn't have a direct V0 setting, you can set it as an environment variable:

**Mac/Linux:**
```bash
export V0_API_KEY="v1:k31zWrYktwbmpnr8xe5jQ8sl:HMAK5H6EL3DIYpyHPMOQa8y4"
```

**Windows (PowerShell):**
```powershell
$env:V0_API_KEY="v1:k31zWrYktwbmpnr8xe5jQ8sl:HMAK5H6EL3DIYpyHPMOQa8y4"
```

### Method 3: Cursor Config File

Check if there's a `.cursor` folder or config file in your project where you can add:
```json
{
  "v0": {
    "apiKey": "v1:k31zWrYktwbmpnr8xe5jQ8sl:HMAK5H6EL3DIYpyHPMOQa8y4"
  }
}
```

## Verifying Setup

After configuring, you should be able to use V0 commands in Cursor. Try:
- `@v0` or `/v0` commands
- Check if V0 appears in Cursor's command palette

## Note

If V0 integration isn't available directly in Cursor, you may need to:
1. Use V0's web interface at v0.dev
2. Or use V0's API directly via HTTP requests
3. Check Cursor's documentation for third-party API integrations

---

**Your API Key:** `v1:k31zWrYktwbmpnr8xe5jQ8sl:HMAK5H6EL3DIYpyHPMOQa8y4`

