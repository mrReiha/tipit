![no dependency](https://img.shields.io/badge/no-dependency-green.svg)
![+jQuery plugin](https://img.shields.io/badge/+-jQuery%20plugin%20included-blue.svg)

# tipIt

an Easy-to-use tooltip system that has a nice interface for both users and developers!

## How it works?

### 1. Import two files to your project:

on any workflow you're working, you may have access to load some files into it.
so include **css** and **js** of *tipIt*. but there's just one point:

> If you want to use automatic tooltip making, you should put the script tag before closing `</body>`

sample:

```

    <head>

        <!-- .... -->

        <link rel="stylesheet" href="dist/css/tipit.css" />

        <!-- .... -->

    </head>

    <body>

        <!-- .... -->

        <script src="dist/js/tipit.js"></script>

    </body>

```

using **NPM**:

```

npm i tipit-native

```

```

makeTipit = require( 'tipit-native' );

// or

import makeTipit from 'tipit-native';

```

and for css files ( [stylus](http://stylus-lang.com/) syntax ):

```

@require 'path-to-node_modules/tipit-native/dist/css/tipit.css'

```

or any other workflow you're using. Just make sure relative css file is included in your page.

### 2. Add some config:

assume you want to add tooltip on a `<div>` element; so:

```

<div data-tipit-content="Hey there!"></div>

```

it'll work like a charm! and by default, placement of tooltip is left-side of element. if you're planning to change that, don't worry:

```

<div data-tipit-content="Hey there!" data-tipit-placement="right">

```

and it'll work like another charm :)).

### 3. Make tooltips manually:

if you wanna make tooltips on your own timing ( like, after some ajax loaded and blah blah blah ), you could use:

```

// native version
makeTipit( someElement );


// jQuery version
someElement.tipit();

```

You have to write configs of that element as mentioned [here](#2-add-some-config)

## API

automatically or manually, tooltips got made. now you've access to two methods:

```

someElement.showTipit();
someElement.hideTipit();

```

to force visibility of a tooltip.

> Since the other version at [anetwork/tipit](https://github.com/anetwork/tipit) is not maintaining anymore, I make new changes to this repository. Consider this repo as **main**.
