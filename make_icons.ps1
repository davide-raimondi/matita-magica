param(
    [string]$srcPath = "$PSScriptRoot\icon_source.jpg"
)

# Generates all Android launcher icons + Play Store icon from one full-bleed square image.
Add-Type -AssemblyName System.Drawing

$res = "$PSScriptRoot\android-app\app\src\main\res"
$src = New-Object System.Drawing.Bitmap($srcPath)

function New-Icon($size, $shape) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    if ($shape -ne "square") {
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        if ($shape -eq "circle") {
            $path.AddEllipse(0, 0, $size, $size)
        } else {
            # rounded square (legacy launchers)
            $r = [int]($size * 0.22); $d = $r * 2
            $path.AddArc(0, 0, $d, $d, 180, 90)
            $path.AddArc($size - $d, 0, $d, $d, 270, 90)
            $path.AddArc($size - $d, $size - $d, $d, $d, 0, 90)
            $path.AddArc(0, $size - $d, $d, $d, 90, 90)
            $path.CloseFigure()
        }
        $g.SetClip($path)
    }
    $g.DrawImage($src, 0, 0, $size, $size)
    $g.Dispose()
    return $bmp
}

function Save-Png($bmp, $dest) {
    $dir = Split-Path $dest
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$sizes = @{ "mdpi" = 48; "hdpi" = 72; "xhdpi" = 96; "xxhdpi" = 144; "xxxhdpi" = 192 }
foreach ($k in $sizes.Keys) {
    $s = $sizes[$k]
    Remove-Item "$res\mipmap-$k\ic_launcher*.webp" -ErrorAction SilentlyContinue
    Save-Png (New-Icon $s "rounded") "$res\mipmap-$k\ic_launcher.png"
    Save-Png (New-Icon $s "circle")  "$res\mipmap-$k\ic_launcher_round.png"
    Write-Host "mipmap-$k ${s}px"
}

# Adaptive icon layer (108dp @ xxxhdpi = 432px), full-bleed: the system applies the mask
Save-Png (New-Icon 432 "square") "$res\drawable-nodpi\ic_launcher_art.png"

# Play Store hi-res icon (512x512, square: Play applies its own rounding)
Save-Png (New-Icon 512 "square") "$PSScriptRoot\store_icon_512.png"

# Favicon for the web version / WebView
Save-Png (New-Icon 192 "rounded") "$PSScriptRoot\logo.png"
Copy-Item "$PSScriptRoot\logo.png" "$PSScriptRoot\android-app\app\src\main\assets\logo.png" -Force

$src.Dispose()
Write-Host "Done."
