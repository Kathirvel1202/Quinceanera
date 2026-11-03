Add-Type -AssemblyName System.Drawing

$unused = @(
  'images/pexels-7180730.jpg',
  'images/pexels-7600385.jpg',
  'images/pexels-8467358.jpg',
  'images/pexels-8466243.jpg',
  'images/pexels-12489322.jpg',
  'images/pexels-14457430.jpg',
  'images/pexels-17931427.jpg',
  'images/pexels-18265901.jpg',
  'images/pexels-19894399.jpg',
  'images/pexels-20218564.jpg',
  'images/pexels-2306281.jpg',
  'images/pexels-24023403.jpg',
  'images/pexels-26546847.jpg',
  'images/pexels-2788492.jpg',
  'images/pexels-28236694.jpg',
  'images/pexels-29410666.jpg',
  'images/pexels-30464368.jpg',
  'images/pexels-31224898.jpg',
  'images/pexels-32019678.jpg',
  'images/pexels-33678487.jpg',
  'images/pexels-35188691.jpg',
  'images/pexels-35511828.jpg',
  'images/pexels-35629351.jpg',
  'images/pexels-35629381.jpg',
  'images/pexels-35985217.jpg',
  'images/pexels-37097188.jpg',
  'images/pexels-37120133.jpg',
  'images/pexels-37190291.jpg',
  'images/pexels-37296132.jpg',
  'images/pexels-37572680.jpg',
  'images/pexels-40041419.jpg',
  'images/pexels-4959892.jpg',
  'images/pexels-5804898.jpg',
  'images/pexels-6148506.jpg',
  'images/pexels-6479558.jpg',
  'images/pexels-6666644.jpg',
  'images/pexels-6815418.jpg',
  'images/pexels-7099975.jpg',
  'images/pexels-8015248.jpg',
  'images/pexels-9294072.jpg'
)

foreach ($u in $unused) {
    if (Test-Path $u) {
        $bmp = [System.Drawing.Bitmap]::new((Get-Item $u).FullName)
        Write-Host "$u : $($bmp.Width) x $($bmp.Height)"
        $bmp.Dispose()
    }
}

