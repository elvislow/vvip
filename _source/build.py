T=open('_source/template/template.html').read().split('\n')
import re
css='\n'.join(T[23:736])
css=re.sub(r'@font-face \{[^\n]*\n','',css)
s0=[i for i,l in enumerate(T) if l.startswith('<!-- Icon sprite')][0]
s1=[i for i,l in enumerate(T) if '</defs>' in l][0]
sprite='\n'.join(T[s0:s1])
icons=open('_source/parts/icons.svg').read() if __import__('os').path.exists('_source/parts/icons.svg') else ''
out=open('_source/parts/head.html').read()+css+'\n'+open('_source/parts/extra.css').read()+'\n</style>\n</head>\n<body>\n'+sprite+icons+'\n  </defs>\n</svg>\n'+open('_source/parts/body.html').read()+open('_source/parts/script.js').read().replace('"use strict";','"use strict";\n'+open('_source/parts/map-data.js').read()+open('_source/parts/threads.js').read(),1)
open('_source/src-index.html','w').write(out)
