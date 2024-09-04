## A simple utility tool to help decompress text based files inscribed on the Bitcoin blockchain
The purpose is simple: to allow compressed inscriptions to be loaded dynamically from this loader
using a URL parameter.

The code is forever stored on the Bitcoin blockchain and can never be changed. It's free to use
and simple to understand.

## Why is this needed?
Inscribing on Bitcoin is useful and adheres to FPOC principles. However, it can be costly and
repeated code makes no sense to be inscribed nor does it make sense to inscribe text based files
without compressing them before hand. 

It costs more sats, it bloats up the blockchain and makes no sense, hence this utility.

## What is the inscription id for this code?
You can reference this code in your inscriptions by using this inscriptionId

```/content/6e546cf6c3963fda0bfef6a95f41794f76aee86732b4df2e3190f7a0f4cf52aci0```

## Do I need to reinscribe this file?
No, the code is for reference purposes and guidance. The file is already stored on the
Bitcoin blockchain and is easily accessible by anyone. You can check it here:
https://easymint.app/content/6e546cf6c3963fda0bfef6a95f41794f76aee86732b4df2e3190f7a0f4cf52aci0

## How can I use it?
In order to load compressed files, you first have to compress them.
The simplest way to compress a file is using `gzip` like so

```gzip -9 -k -f -v ./yourfile.js```

which will output a file `yourfile.js.gz`

This file has to also be inscribed on Bitcoin and after that you're able to use it in your inscriptions.

After this, in order to load this inscription using recursiveness, you reference the resulting
inscriptionId like so:

```<script src="/content/6e546cf6c3963fda0bfef6a95f41794f76aee86732b4df2e3190f7a0f4cf52aci0?inscriptionId=[your_inscription_id]"></script>```

## How does this work?
The script checks for a URL parameter called `inscriptionId` and passes it on to the `fetch()` function.
The loaded file will use the same `/content/[your_inscription_id]` format and will not call external domains
since they'll be blocked and can potentially pose a risk

## Will this library be available to the loaded code?
Yes, you can use the same structure to decompress other inscriptions later in your code, without the need to reference it again.
This file is the first thing that loads, meaning the variables are always available in the context.

After this script has loaded, it will add an object to the window ```window.fflate = { strFromU8, gunzipSync }``` which containts 2 methods:

```const { strFromU8, gunzipSync } = window.fflate;```

To read another inscription, just load its content id and decompress it

```
const inscription = await fetch("/content/" + inscriptionId );
const buffer = await inscription.arrayBuffer();
const script = strFromU8(gunzipSync(new Uint8Array(buffer)));
        
const el = document.createElement('script');
el.innerHTML = script;
document.head.appendChild(el);
```
