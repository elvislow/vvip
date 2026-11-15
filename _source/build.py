T=open('/home/claude/vvip-src/bs-mono-designer-portfolio/references/template.html').read().split('\n')
import re
css='\n'.join(T[23:736])
css=re.sub(r'@font-face \{[^\n]*\n','',css)
s0=[i for i,l in enumerate(T) if l.startswith('<!-- Icon sprite')][0]
s1=[i for i,l in enumerate(T) if '</defs>' in l][0]
sprite='\n'.join(T[s0:s1])
icons=open('parts/icons.svg').read() if __import__('os').path.exists('parts/icons.svg') else ''
out=open('parts/head.html').read()+css+'\n'+open('parts/extra.css').read()+'\n</style>\n</head>\n<body>\n'+sprite+icons+'\n  </defs>\n</svg>\n'+open('parts/body.html').read()+open('parts/script.js').read().replace('"use strict";','"use strict";\n'+open('parts/map-data.js').read()+open('parts/threads.js').read(),1)
open('src/index.html','w').write(out)
