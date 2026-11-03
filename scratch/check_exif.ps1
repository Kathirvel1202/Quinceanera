$files = Get-ChildItem -Path "images" -Filter "*.jpg"
Add-Type -AssemblyName System.Drawing

foreach ($f in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        $desc = ""
        # 0x010E is ImageDescription, 0x9C9B is XPTitle, 0x9C9C is XPComment
        foreach ($prop in $img.PropertyItems) {
            if ($prop.Id -eq 0x010E -or $prop.Id -eq 0x9C9B -or $prop.Id -eq 0x9C9C) {
                $str = [System.Text.Encoding]::Unicode.GetString($prop.Value).Trim([char]0)
                if (-not $str) {
                    $str = [System.Text.Encoding]::UTF8.GetString($prop.Value).Trim([char]0)
                }
                $desc += " [$($prop.Id): $str]"
            }
        }
        $img.Dispose()
        if ($desc) {
            Write-Host "$($f.Name): $desc"
        }
    } catch {
        # ignore
    }
}

