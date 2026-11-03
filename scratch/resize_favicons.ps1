Add-Type -AssemblyName System.Drawing
$fullPath = (Get-Item 'favicon.png').FullName
$src = [System.Drawing.Bitmap]::new($fullPath)

function Resize-Image($img, $w, $h, $outPath) {
    $dest = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $dest.Dispose()
}

Resize-Image $src 32 32 'favicon-32x32.png'
Resize-Image $src 16 16 'favicon-16x16.png'
Resize-Image $src 48 48 'favicon-48x48.png'
$src.Dispose()
Write-Output 'Resized successfully'

