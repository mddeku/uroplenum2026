$ErrorActionPreference = "Stop"

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$out = Join-Path $root "out"
$target = Join-Path $root "github-pages-upload"

if (-not (Test-Path -LiteralPath $out)) {
  throw "Static export folder not found: $out. Run npm run build:pages first."
}

if (Test-Path -LiteralPath $target) {
  $resolvedTarget = (Resolve-Path -LiteralPath $target).Path
  if (-not $resolvedTarget.StartsWith($root)) {
    throw "Refusing to delete outside workspace: $resolvedTarget"
  }
  Remove-Item -LiteralPath $resolvedTarget -Recurse -Force
}

New-Item -ItemType Directory -Path $target | Out-Null
Copy-Item -Path (Join-Path $out "*") -Destination $target -Recurse -Force

$htmlFiles = Get-ChildItem -LiteralPath $target -Recurse -File -Filter "*.html"

foreach ($file in $htmlFiles) {
  $targetUri = New-Object System.Uri (($target.TrimEnd('\') + '\'))
  $dirUri = New-Object System.Uri (($file.DirectoryName.TrimEnd('\') + '\'))
  $relativeDir = [System.Uri]::UnescapeDataString($targetUri.MakeRelativeUri($dirUri).ToString())
  $relativeDir = $relativeDir.TrimEnd('/')

  if ([string]::IsNullOrWhiteSpace($relativeDir)) {
    $prefix = ""
  } else {
    $depth = ($relativeDir -split "/").Count
    $prefix = "../" * $depth
  }

  $content = Get-Content -LiteralPath $file.FullName -Raw

  $content = $content.Replace('href="/_next/', ('href="' + $prefix + '_next/'))
  $content = $content.Replace('src="/_next/', ('src="' + $prefix + '_next/'))
  $content = $content.Replace('href="/program"', ('href="' + $prefix + 'program/"'))
  $content = $content.Replace('href="/program/"', ('href="' + $prefix + 'program/"'))
  $content = $content.Replace('href="/faculty"', ('href="' + $prefix + 'faculty/"'))
  $content = $content.Replace('href="/faculty/"', ('href="' + $prefix + 'faculty/"'))
  $content = $content.Replace('href="/venue"', ('href="' + $prefix + 'venue/"'))
  $content = $content.Replace('href="/venue/"', ('href="' + $prefix + 'venue/"'))
  $content = $content.Replace('href="/"', ('href="' + $prefix + 'index.html"'))

  Set-Content -LiteralPath $file.FullName -Value $content -NoNewline
}

$instructions = @"
# Upload These Files to GitHub Pages

Upload the **contents of this folder** to your GitHub repository.

This folder has been prepared with relative paths, so CSS and JavaScript should work on GitHub project pages such as:

```text
https://username.github.io/repository-name/
```

## GitHub Pages Settings

1. Open your repository on GitHub.
2. Go to **Settings -> Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save.

## Upload Everything

Upload all files and folders here, including:

- `_next`
- `.nojekyll`
- `index.html`
- `404.html`
- `program`
- `faculty`
- `venue`

The `.nojekyll` file is required so GitHub Pages serves the `_next` folder.
"@

Set-Content -LiteralPath (Join-Path $target "UPLOAD_INSTRUCTIONS.md") -Value $instructions

Write-Host "Prepared GitHub Pages upload folder: $target"
