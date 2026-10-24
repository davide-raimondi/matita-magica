$raw = [System.IO.File]::ReadAllText("$PSScriptRoot\index.html", [System.Text.Encoding]::UTF8)

# Find lessonsData
$start = $raw.IndexOf("const lessonsData = [")
$end = $raw.IndexOf("    /* -------------------------------------------------------------`r`n       3. STATO DELL'APPLICAZIONE", $start)
if ($end -lt 0) {
    $end = $raw.IndexOf("    /* -------------------------------------------------------------`n       3. STATO DELL'APPLICAZIONE", $start)
}

$js = $raw.Substring($start, $end - $start)

# Extract each lesson using regex
$pattern = 'id:\s*"([^"]+)",[\s\S]*?title:\s*\{\s*it:\s*"([^"]+)"[\s\S]*?iconEmoji:\s*"([^"]+)",[\s\S]*?steps:\s*\[([\s\S]*?)\n\s*\]\s*\}'
$matches = [regex]::Matches($js, $pattern)

$out = @"
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Anteprima Disegni</title>
<style>
body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #EAE6DF; margin: 0; padding: 24px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.card { background: white; border-radius: 16px; padding: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); width: 320px; text-align: center; }
.card h2 { margin: 0 0 10px; font-size: 1.2rem; color: #2B2D42; }
.svg-wrap { width: 300px; height: 300px; margin: 0 auto; background: #FAF9F6; border-radius: 12px; border: 2px dashed #D5DDD8; display: flex; align-items: center; justify-content: center; }
svg { width: 280px; height: 280px; }
.legend { display: flex; justify-content: space-around; margin-top: 10px; font-size: 0.75rem; font-weight: bold; }
.s1 { color: #8D99AE; }
.s2 { color: #3A86FF; }
.s3 { color: #FF9F1C; }
.s4 { color: #FF5E7E; }
.step-preview { margin-top: 8px; font-size: 0.78rem; color: #555; text-align: left; background: #F8F7F4; padding: 8px; border-radius: 8px; }
</style>
</head>
<body>
"@

$colors = @('#8D99AE', '#3A86FF', '#FF9F1C', '#FF5E7E', '#2EC4B6')

foreach ($m in $matches) {
    $id = $m.Groups[1].Value
    $title = $m.Groups[2].Value
    $emoji = $m.Groups[3].Value
    $stepsBlock = $m.Groups[4].Value

    # Extract all svgD
    $stepPattern = 'svgD:\s*"([^"]+)"'
    $stepMatches = [regex]::Matches($stepsBlock, $stepPattern)

    $svgPaths = ""
    for ($i = 0; $i -lt $stepMatches.Count; $i++) {
        $c = $colors[$i]
        $d = $stepMatches[$i].Groups[1].Value
        $svgPaths += "<path d=`"$d`" fill=`"none`" stroke=`"$c`" stroke-width=`"5`" stroke-linecap=`"round`" stroke-linejoin=`"round`" />`n"
    }

    $out += @"
    <div class="card">
      <h2>$emoji $title ($id)</h2>
      <div class="svg-wrap">
        <svg viewBox="0 0 400 400">
          $svgPaths
        </svg>
      </div>
      <div class="legend">
        <span class="s1">Passo 1</span>
        <span class="s2">Passo 2</span>
        <span class="s3">Passo 3</span>
        <span class="s4">Passo 4</span>
      </div>
    </div>
"@
}

$out += "</body></html>"
[System.IO.File]::WriteAllText("$PSScriptRoot\preview_drawings.html", $out, [System.Text.Encoding]::UTF8)
Write-Host "Generato preview_drawings.html con $($matches.Count) disegni"
