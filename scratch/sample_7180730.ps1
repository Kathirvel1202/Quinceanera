Add-Type -AssemblyName System.Drawing

$f = "images/pexels-7180730.jpg"
$bmp = [System.Drawing.Bitmap]::new((Get-Item $f).FullName)

$totalR = 0; $totalG = 0; $totalB = 0; $count = 0
for ($x = 0; $x -lt $bmp.Width; $x += 50) {
    for ($y = 0; $y -lt $bmp.Height; $y += 50) {
        $c = $bmp.GetPixel($x, $y)
        $totalR += $c.R; $totalG += $c.G; $totalB += $c.B; $count++
    }
}
$avgR = [math]::Round($totalR / $count)
$avgG = [math]::Round($totalG / $count)
$avgB = [math]::Round($totalB / $count)
Write-Host "Avg color: R=$avgR, G=$avgG, B=$avgB"
$bmp.Dispose()

