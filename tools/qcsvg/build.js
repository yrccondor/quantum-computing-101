const fs = require('fs')
const fetch = require('node-fetch')
const { optimize } = require('svgo')

const content = fs.readFileSync(__dirname + '/draw.tex', 'utf8')
const lines = content.split('\n')
const title = lines[0].trim()
const body = lines.slice(1).join('\n')

if (!title || title.includes('\\begin')) {
    console.error('Error: No title')
    process.exit(1)
}

console.log('Building', title)

fetch('https://www.quicklatex.com/latex3.f', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `formula=\\begin{tikzpicture}
    \\end{tikzpicture}
    ${encodeURIComponent(body)}&fsize=75px&fcolor=ffffff&mode=0&out=2&remhost=quicklatex.com&preamble=\\usepackage{amsmath}
    \\usepackage{amsfonts}
    \\usepackage{amssymb}
    \\usepackage{tikz}
    \\usepackage{quantikz}
    \\usetikzlibrary{arrows,decorations.pathreplacing}&errors=1&rand=${new Date().getTime()}`
}).then(res => res.text()).then(body => {
    const lines = body.split('\n')
    const status = lines[0].trim()
    if (status !== '0') {
        console.error('Error:', body)
        process.exit(1)
    }
    return lines[1].split(' ')[0].trim().replace('.png', '.svg')
}).then(url => fetch(url)).then(res => res.text()).then(body => {
    console.log('Optimizing', title)
    fs.writeFileSync(__dirname + `/../../docs/public/qcsvg/${title}.svg`, optimize(body, {
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
            'removeDimensions',
            'removeScriptElement',
            'reusePaths'
        ]
    }).data)
})

// \\tikzset{meter/.append style={draw, inner sep=10, rectangle, font=\\vphantom{A}, minimum width=30, line width=.8,path picture={\\draw[black] ([shift={(.1,.3)}]path picture bounding box.south west) to[bend left=50] ([shift={(-.1,.3)}]path picture bounding box.south east);\\draw[black,-latex] ([shift={(0,.1)}]path picture bounding box.south) -- ([shift={(.3,-.1)}]path picture bounding box.north);}}}
